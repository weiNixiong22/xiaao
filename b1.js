var b1 = document.getElementById('b1');
var myChart = echarts.init(b1,'红');
var option;
option = {
  title: {
    text: '最受欢迎奥运会top10'
  },
  tooltip: {
    trigger: 'item',
    formatter:'{a} <br/>{b}'
  },
  toolbox: {
    feature: {
      dataView: { readOnly: false },
      
    }
  },
  legend: {
    data: ['Show', 'Click', 'Visit', 'Inquiry', 'Order']
  },
  series: [
    {
      name: '最受欢迎奥运会',
      type: 'funnel',
      left: '0%',
      top: 30,
      bottom: 30,
      width: '100%',
      min: 0,
      max: 100,
      minSize: '100%',
      maxSize: '0%',
      sort: 'descending',
      gap: 2,
      label: {
        show: true,
        position: 'inside'
      },
      labelLine: {
        length: 10,
        lineStyle: {
          width: 1,
          type: 'solid'
        }
      },
      itemStyle: {
        borderColor: '#fff',
        borderWidth: 1
      },
      emphasis: {
        label: {
          fontSize: 20
        }
      },
      data: [
        { value: 100, name: 'Beijing 2008 北京（夏奥）' },
        { value: 90, name: 'Beijing 2020 北京（冬奥）'},
        { value: 80, name: 'Nanjing 2014 南京(青奥)' },
        { value: 70, name: 'Athens 2004 雅典（夏奥）' },
         { value: 60, name: 'Moscow 1980 莫斯科（夏奥）' },
         { value: 50, name: 'Athens 1896 雅典（夏奥）' },
        { value: 40, name: 'Sochi 2014 索契（冬奥）' },
         { value: 30, name: 'Barcelona 1992 巴塞罗那（夏奥）' },
          { value: 20, name: 'Singapore 2010 新加坡(青奥)' },
           { value: 10, name: 'Buenos Aires 2018 布宜诺斯艾利斯(青奥)' },
      ]
    }
  ]
};
option && myChart.setOption(option);