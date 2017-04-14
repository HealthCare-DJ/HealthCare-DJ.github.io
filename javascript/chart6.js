// JavaScript Documentapp.title = '坐标轴刻度与标签对齐';
document.write("<script language='javascript' src='echarts.js'></script>");
var myChart6 = echarts.init(document.getElementById('chart6'),'dark');
option6 = {
    title:{
     
        subtext: '三级公立医院人均住院费',
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
            axisTick:{show:false},
            max:'13500',
            min:'11500'
        },
        {
            name: '上涨幅度（%）',
            interval: 0.01,
            type: 'value',
            axisTick:{show:false},
            axisLabel:{
                formatter:function(value,index){
                    return value*100+"%"
                }
            }
        }
    ],
    series : [
        {
            name:'人均住院费',
            type:'bar',
            barWidth: '50%',
            data:[11752.2,12136.5,12611.3, 12903.6],
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
            data:[0.036, 0.033, 0.039, 0.023]
           
           
        },
        {
            name:'按可比价格上涨',
            type:'line',
            yAxisIndex:1,
            data:[0.009, 0.012, 0.025, 0.003 ],
			itemStyle: {
                normal: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: '#e69d87'
                }
                
            },
            
           
        }
    ]
};
