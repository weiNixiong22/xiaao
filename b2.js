var chartDom = document.getElementById('b2');
var a = echarts.init(chartDom,'红');
var option;

option = {
  title: {
    text: '中国历届参与夏奥人数及男女比例'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {top:'7%'},
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value',
    boundaryGap: [0, 0.01]
  },
  yAxis: {
    type: 'category',
    data: ['1984', '1988', '1992', '1996', '2000', '2004','2008','2012','2016','2020']
  },
  series: [
    {
      name: '男',
      type: 'bar',
      data: [164, 169, 118, 110, 107, 138, 328, 171, 160, 133]
    },
    {
      name: '女',
      type: 'bar',
      data: [88, 132, 133, 199, 204, 269, 311, 225, 256, 298]
    }
  ]
};



option && a.setOption(option);