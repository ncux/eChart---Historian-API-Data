let API = {
    access_token: "",
    tagsUrl: 'https://dev.sealu.net:4433/api/v1/forward?url=/historian-rest-api/v1/tagslist',
    dataUrl: "https://dev.sealu.net:4433/api/v1/forward?url=/historian-rest-api/v1/datapoints/calculated"
};


let valuesArray = [];
let timeArray = [];
let samplesSource = 'WIN-9DBOGP80695.Simulation00052';
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
        data: timeArray,
        // category: 'time'
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
        let headerOptions = {
            method: 'get',
            headers: {
                "Authorization": `Bearer ${API.access_token}`,
                'mode': 'cors'
            }
        };
        let data = await fetch(`${API.url}`, headerOptions);
        let SampleValues = await data.json();
        console.log(SampleValues);
        SampleValues.forEach(value => {
            // console.log(value.Value);
            // console.log(value.TimeStamp);
            timeArray.push(simplifyTime(value.TimeStamp));
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

let plot = echarts.init(document.querySelector('#main'));

function plotChart() {
    plot.setOption(option);
}




// function sliceTimestamps() {
//     timeArray.forEach(timestamp => {
//         timestamp.slice(0, 19);
//     });
// }



// let timeArray2 = timeArray.map(timestamp => timestamp.slice(0, 19));
// let timeArray3 = timeArray2.map(timestamp => timestamp.slice(11));




