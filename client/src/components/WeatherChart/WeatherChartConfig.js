export default {
    responsive: {
        rules: [{
            condition: {
                maxHeight: 1
            }
        }]
    },
    chart: {
        backgroundColor: null,
        height: "180px"
    },
    title: {
        text: null,
    },
    tooltip: {
        enabled: false
    },
    xAxis: {
        visible: false
    },
    yAxis: {
        visible: false
    },
    plotOptions: {
        series: {
            showInLegend: false,
            marker: {
                enabled: false
            }
        }
    }
};