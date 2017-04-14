// JavaScript Documentapp.title = '坐标轴刻度与标签对齐';
document.write("<script language='javascript' src='echarts.js'></script>");
var myChart8 = echarts.init(document.getElementById('chart8'),'dark');
option8 = {
    title:{
     
        subtext: '二级公立医院人均住院费',
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
        top:'18%',
        left: '5%',
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
            name: '',
            type : 'value',
            max:'6000',
            min:'5000',
            axisTick:{show:false},
            interval:250
        },
        {
            name: '',
            interval: 0.02,
            type: 'value',
            axisTick:{show:false},  
            splitLine:{show:false},
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
            data:[5043.6,5171.5,5386.4,5588.3],
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
			 itemStyle: {
                normal: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: '#73b9bc'
                }
                
            },

        },
        {
            name:'按当年价格上涨',
            type:'line',
            yAxisIndex:1,
            data:[0.027, 0.025, 0.042, 0.037 ]
           
           
        },
        {
            name:'按可比价格上涨',
            type:'line',
            yAxisIndex:1,
            data:[-0.001, 0.005, 0.027, 0.017 ],
            markPoint : {
                data : [
                    
                    {type : 'min', name: '下降'}
                ]
            },
             itemStyle: {
                normal: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: '#e69d87'
                }
                
            },
           
        }
    ]
};
