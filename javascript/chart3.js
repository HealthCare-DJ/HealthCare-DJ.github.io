// JavaScript Document
document.write("<script language='javascript' src='echarts.js'></script>");
var myChart3 = echarts.init(document.getElementById('chart3'),'dark');
option3 = {
    title:{
     text: '2011年-2015年国家城镇基本医疗保险基金收支情况',
        subtext: 'data from 中华人民共和国人力资源和社会保障部',
        left: 'center',
        padding: [
    10,  // 上
    10, // 右
    15,  // 下
    15, // 左
]
},
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['基金支出','基金收入','基金支出增幅','基金收入增幅'],
        top:'15%'
    },
    grid: {
        top:'30%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data : ['2011年','2012年','2013年','2014年','2015年']}
    ],
    yAxis : [
        {
            name: '基本医疗保险基金（亿元）',
            type : 'value',
            max:'12000',
            min:'0',
            interval:3000
        },
        {
            name: '基本医疗保险基金增幅（%）',
            max:'0.3',
            min:'-0.1',

            interval: 0.1,
            type: 'value',
            splitLine:{show:false},
            axisLabel:{
                formatter:function(value,index){
                    return value*100+"%"
                }
            }
        }
    ],
    series : [
        {
            name:'基金支出',
            type:'bar',
            data:[4431, 5544, 6801, 8134, 9312 ],
            
          /*
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }*/
        },
        {
            name:'基金收入',
            type:'bar',
            data:[5539, 6939, 8248, 9687,11193 ],
            markPoint : {
                data : [
                    {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183},
                    {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
                ]
            }
            /*
            markLine : {
                data : [
                    {type : 'average', name : '平均值'}
                ]
            }*/
        }
        ,{
            name:'基金支出增幅',
            type:'line',
            yAxisIndex:1,
            data:[0.252, 0.251, 0.227, 0.196, 0.145 ],
              markPoint : {
                data : [
                    {name: '某个屏幕坐标',
        x: 255,
        y: 200
    }
                        
                ]
            },
           
        },
        {
            name:'基金收入增幅',
            type:'line',
            yAxisIndex:1,
            data:[0.28,0.253, 0.189,0.174, 0.155 ],
            /*
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },*/
            
        },
    ]
};
