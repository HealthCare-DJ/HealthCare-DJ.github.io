// JavaScript Document
document.write("<script language='javascript' src='echarts.js'></script>");
var myChart2 = echarts.init(document.getElementById('chart2'),'dark');
option2 = {
    title: {
       
     text: '各级政府对医保补助所占比例',
        subtext: '以2015年重庆綦江市为例',
        left: 'right',
        padding: [
    10,  // 上
    20, // 右
    15,  // 下
    15, // 左
]
},
        
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (params) {
            var tar = params[1];
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type : 'category',
        splitLine: {show:false},
        data : ['医保财政补助','中央财政补助','市级政府补助','地方政府补助']
    },
    yAxis: {
        type : 'value'
    },
    series: [
        {
            name: '辅助',
            type: 'bar',
            stack:  '总量',
            itemStyle: {
                normal: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                },
                emphasis: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: [0, 112, 28, 0]
        },
        {
            name: '费用',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            data:[380, 268, 84, 28]
        }
    ]
};
