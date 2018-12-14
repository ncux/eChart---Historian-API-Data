let valuesArray = [];
let timeArray = [];
let samplesSource = 'WIN-9DBOGP80695.Simulation00085';

const option = {
    title: {
        text: samplesSource
    },
    tooltip: {},
    legend: {
        data:[samplesSource]
    },
    xAxis: {
        data: timeArray
    },
    yAxis: {},
    series: [{
        name: samplesSource,
        type: 'bar',
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
            // valuesArray.push(value.Value);
            // timeArray.push(value.TimeStamp);
            // timeArray.forEach(value => console.log(new Date(value)));
            plotChart();
        })
    } catch (e) {
        console.log(e);
    }
}

function simplifyTime(timestamp) {
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


// let timeArray2 = timeArray.map(timestamp => new Date(timestamp));

function plotChart() {
    plot.setOption(option);
}

