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
        console.log('button clicked');

        let xhr = new XMLHttpRequest();
        xhr.open('GET', `${API.url}`, true);
        xhr.setRequestHeader('Authorization', 'Bearer ' + API.access_token);
        // xhr.open('GET', `./data/WIN-9DBOGP80695.Simulation00052.json`, true);

        xhr.onload = async () => {
            if(xhr.status === 200) {
                console.log(xhr.responseText);
                let sampleValues = await JSON.parse(xhr.responseText);
                console.log(sampleValues);
                sampleValues.forEach(value => {
                    // console.log(value.Value);
                    // console.log(value.TimeStamp);
                    timeArray.push(simplifyTime(value.TimeStamp));
                    // valuesArray.push(Math.ceil(value.Value));
                    valuesArray.push((parseInt(value.Value)).toFixed(0));
                    plotChart();
                })

            }
        };

        xhr.send();

    } catch (e) {
        console.log(e);
    }
}

function simplifyTime(timestamp) {
    return timestamp.slice(0, 19);
}

let plot = echarts.init(document.querySelector('#main'));

function plotChart() {
    plot.setOption(option);
}





