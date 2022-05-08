var a2 = document.getElementById('a2');
var myChart = echarts.init(a2,'红');
var option;
option = {
  title: {
    text: '中国和前十名国家总奖牌数对比'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['美国', '匈牙利', '中国', '瑞典', '意大利','法国','澳大利亚','英国','日本','韩国','德国','挪威'],
	top:'10%'
	},
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['1952', '1984', '1988', '1992', '1996','2000','2004','2008','2012','2016','2020']
  },
  yAxis: {
    min:0,
    max:180,
    type: 'value'
  },
  series:
   
   [
    {
      name: '美国',
      type: 'line',
     
      data: [76,174,94,108,101,92,103,112,103,121,113]
    },
    {
      name: '匈牙利',
      type: 'line',
      
      data: [42,0,23,30,21,17,18,10,18,15,20]
    },
    {
      name: '瑞典',
      type: 'line',
      
      data: [35,19,11,12,8,12,7,5,8,11,9]
    },
    {
      name: '中国',
      type: 'line',
      itemStyle: {
        normal: {
          color: '#a80000', //改变折线点的颜色
          lineStyle: {
            color: '#a80000' //改变折线颜色
         }
       }
      },
      data: [0,32,28,54,50,59,63,100,91,70,88]
    },
    {
      name: '意大利',
      type: 'line',
      
      data: [21,32,14,19,35,34,32,27,28,28,40]
    },
    {
      name: '法国',
      type: 'line',
      
      data: [18,28,16,29,37,38,33,43,35,42,33]
    },
    {
      name: '澳大利亚',
      type: 'line',
      
      data: [11,24,14,27,41,58,49,46,35,29,46]
    },
    {
      name: '挪威',
      type: 'line',
      
      data: [5,3,5,7,7,10,6,9,4,4,8]
    },
    {
      name: '日本',
      type: 'line',
      
      data: [9,32,14,22,14,18,37,25,38,41,58]
    },
    {
      name: '英国',
      type: 'line',
      
      data: [11,37,24,20,15,28,30,51,65,67,65]
    },
    {
      name: '韩国',
      type: 'line',
      
      data: [2,19,33,29,27,28,30,32,30,21,20]
    },
    {
      name: '德国',
      type: 'line',
     
      data: [24,59,0,82,65,56,48,41,44,42,37]
    }
  ]
};
option && myChart.setOption(option);