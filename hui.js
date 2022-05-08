var a2 = document.getElementById('hui');
var myChart = echarts.init(a2,'红');
var option;
option = {
  title: [
    {
      text: '主要夺金项目“第一大省”奥运冠军人数占比(%)'
    }
  ],
  polar: {
    radius: [30, '70%']
  },
  angleAxis: {
    max: 30,
    startAngle: 75
  },
  radiusAxis: {
    type: 'category',
    data: ['跳水（广东）', '举重（福建/湖南）', '乒乓球（辽宁）', '体操（湖北）','羽毛球（湖北）','游泳（浙江）']
  },
  tooltip: {},
  series: {
    type: 'bar',
    data: [25.60, 18.20, 21.40, 21.40, 22.70, 26.70],
    coordinateSystem: 'polar',
    label: {
      show: true,
      position: 'middle',
      formatter: '{b}: {c}%'
    }
  }
};
option && myChart.setOption(option);