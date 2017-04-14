// JavaScript Document


document.write("<script language='javascript' src='echarts.js'></script>");
var myChart4 = echarts.init(document.getElementById('chart4'),'dark');
option4 = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['个人缴费标准','基本医保政府补助标准']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['2013年','2014年','2015年','2016年','2017年'],
            axisTick:{show:false},
        }
    ],
    yAxis : [
        {
            name : '人均（元）',
			type : 'value'
        }
    ],
    series : [
       
         /*{
            name: '',
            type: 'bar',
            barWidth:'40%',
            stack:  '人均筹资标准',
            itemStyle: {
                normal: {
                    barBorderColor: 'rgba(5,222,0,0)',
                    color: 'rgba(25,70,70,0)'
                },
                emphasis: {
                    barBorderColor: 'rgba(56,5,0,0)',
                    color: 'rgba(5,0,0,0)'
                }
            },
            data: [200, 240, 280, 320, 380, 420, 450]
        },*/
        {
            name:'个人缴费标准',
            type:'bar',
            barWidth:'50%',
            stack:  '人均筹资标准',
            data:[ 70, 90, 120, 150, 180],
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
			itemStyle: {
                normal: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: '#7289ab'
                }
                
            },
        
        },
         {
            name:'基本医保政府补助标准',
            type:'bar',
            barWidth:'50%',stack:  '人均筹资标准',
            data:[ 280, 320, 380, 420, 450],
			itemStyle: {
                normal: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: '#dd6b66'
                }
                
            },
			label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            }
        },
      
    ]
};
