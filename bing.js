var bing = document.getElementById('bing');
var myChart = echarts.init(bing,'红');
var option;

option = {
	title: {
	  text: '中国体育代表团奥运各大项金牌分布',
	  subtext: '',
	  left: 'center'
		
	},
  tooltip: {
     trigger: 'item',
    // formatter: '{a} <br/>{b} : {c} ({d}%)'
   },
   legend: {
     type: 'scroll',
     orient: 'vertical',
     right: 10,
     top: 20,
     bottom: 20,
    // data: data.legendData
   },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '40',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 47, name: '跳水' },
        { value: 38, name: '举重' },
        { value: 33, name: '体操' },
        { value: 32, name: '乒乓球' },
        { value: 26, name: '射击' },
        { value: 20, name: '羽毛球' },
        { value: 16, name: '游泳' },
        { value: 10, name: '田径' },
        { value: 8, name: '柔道' },
        { value: 7, name: '跆拳道' },
        { value: 5, name: '击剑' },
        { value: 3, name: '拳击' },
        { value: 3, name: '帆船' },
        { value: 3, name: '排球' },
        { value: 3, name: '皮划艇' },
        { value: 2, name: '摔跤' },
        { value: 2, name: '赛艇' },
        { value: 2, name: '自行车' },
        { value: 1, name: '射箭' },
        { value: 1, name: '网球' },
        { value: 0, name: '花样游泳' },
        { value: 0, name: '篮球' },
        { value: 0, name: '空手道' },
        { value: 0, name: '曲棍球' },
        { value: 0, name: '现代五项' },
        { value: 0, name: '足球' },
        { value: 0, name: '垒球' },
        { value: 0, name: '高尔夫球' },
        { value: 0, name: '手球' }
      ],
    }
  ]
};
option && myChart.setOption(option);