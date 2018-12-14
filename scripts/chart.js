
let valuesArray = [];
let timeArray = [];
let samplesSource = 'WIN-9DBOGP80695.Simulation00085';
let chartType = {
    bar: 'bar',
    line: 'line'
};

const option = {
    title: {
        text: samplesSource
    },
    tooltip: {},
    legend: {
        data:[]
    },
    xAxis: {
        data: timeArray
    },
    yAxis: {},
    series: [{
        name: samplesSource,
        type: chartType.bar,
        data: valuesArray
    }]
};

async function getValues() {
    try {
        let data = await fetch(`./data/WIN-9DBOGP80695.Simulation00085.json`);
        let SampleValues = await data.json();
        console.log(SampleValues);
        SampleValues.forEach(value => {
            // console.log(value.Value);
            // console.log(value.TimeStamp);
            timeArray.push(simplifyTime(value.TimeStamp));
            const date = new Date(value.TimeStamp);
            timeArray.push(Math.floor(date.getTime() / 1000));
            console.log('Time array ' + timeArray);
            // valuesArray.push(Math.ceil(value.Value));
            valuesArray.push((parseInt(value.Value)).toFixed(0));
            plotChart();
        })
    } catch (e) {
        console.log(e);
    }
}

function simplifyTime(timestamp) {
    // const date = new Date('2018-10-02T11:30:07.211Z');
    // const milliseconds = date.getTime();
    // const seconds = Math.floor(date.getTime() / 1000);
    const date = new Date(timestamp);
    return Math.floor(date.getTime() / 1000);
}



// function sliceTimestamps() {
//     timeArray.forEach(timestamp => {
//         timestamp.slice(0, 19);
//     });
// }

let plot = echarts.init(document.querySelector('#main'));


// let timeArray2 = timeArray.map(timestamp => timestamp.slice(0, 19));
// let timeArray3 = timeArray2.map(timestamp => timestamp.slice(11));


function plotChart() {
    plot.setOption(option);
}

