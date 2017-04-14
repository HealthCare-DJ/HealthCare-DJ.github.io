// JavaScript Documentapp.title = '坐标轴刻度与标签对齐';
document.write("<script language='javascript' src='echarts.js'></script>");
var myChart5 = echarts.init(document.getElementById('chart5'),'dark');
option5 = {
    title:{
     
        subtext: '三级公立医院次均门诊费',
        left: 'right',
        padding: [
    0,  // 上
    18, // 右
    15,  // 下
    15, // 左
]
},
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        top:'22%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['2013年','2014年','2015年','2016年'],
            axisTick: {
                alignWithLabel: true
            },
            axisTick:{show:false},
        }
    ],
    yAxis : [
        {
            name: '费用（元）',
            type : 'value',
            max:'325',
            min:'225',
            interval:25,
            
            axisTick:{show:false},
        },
        {
            name: '上涨幅度（%）',
            interval: 0.02,
            max:'0.08',
            type: 'value',
            splitLine:{show:false},
            axisTick:{show:false},
            axisLabel:{
                formatter:function(value,index){
                    return Math.round(value*100)+"%"
                }
            }
        }
    ],
    series : [
        {
            name:'次均门诊费',
            type:'bar',
            barWidth: '50%',
            data:[255.7,267.9,279.8, 293.1],
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
			itemStyle: {
                normal: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: '#759aa0'
                }
                
            },
        },
        {
            name:'按当年价格上涨',
            type:'line',
            yAxisIndex:1,
            data:[0.069, 0.048, 0.044, 0.047 ]
           
           
        },
        {
            name:'按可比价格上涨',
            type:'line',
            yAxisIndex:1,
            data:[0.042, 0.027, 0.03, 0.027 ],
			itemStyle: {
                normal: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: '#e69d87'
                }
                
            },
            
           
        }
    ]
};
