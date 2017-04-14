    
    // 引入另一个文件里的方法
    document.write("<script language='javascript' src='echarts.js'></script>");
        // 基于准备好的dom，初始化echarts实例
        var myChart1 = echarts.init(document.getElementById('chart1'),'dark');

        // 指定图表的配置项和数据
        var option1 = {
    title:{
     text: '2011年-2015年全国参加城镇基本医疗保险情况',
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
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data:['城镇居民基本医疗保险','城镇职工基本医疗保险','城镇基本医疗保险'],
        selected:{
            '城镇居民基本医疗保险':true,
            '城镇职工基本医疗保险':true,
            '城镇基本医疗保险':false
        },
        top:'15%'
    },
    grid: {
        top:'28%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['2011年','2012年','2013年','2014年','2015年'],
            
        }
    ],
    yAxis : [
        {
            type : 'value',
            name :'人数（万人）'
        }
    ],
    series : [
        /*{
            name:'农民工参加医疗保险',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {
                color:"#FFF"
            }},
            data:[4641, 4996, 5018, 5229, 5166]
        },*/
        {
            name:'城镇居民基本医疗保险',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[22116, 27156, 29629, 31451, 37689]
        },
        {
            name:'城镇职工基本医疗保险',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[25227, 26486, 27443, 28296, 28893]
        },
        {
            name:'城镇基本医疗保险',
            type:'line',
            
            areaStyle: {normal: {}},
            data:[47343, 53641, 57073,59747, 66582]
        },
        
        /*
        {
            name:'搜索引擎',
            type:'line',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            areaStyle: {normal: {}},
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        }
        */
    ]
};
// JavaScript Document myChart.setOption(option)
 