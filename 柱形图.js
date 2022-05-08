var chartDom = document.getElementById('zhu');
var myChart = echarts.init(chartDom,'红');
var option;
option = {
	title: {
	  text: '中国体育代表团历届奥运奖牌榜',
	  subtext: '',
	  left: 'center'
	},
  legend: {top:'5%'},
   grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
  tooltip: {},
  dataset: {
    dimensions: ['product', '金牌', '银牌', '铜牌'],
    source: [
      { product: '1984', 金牌:15, 银牌: 8, 铜牌:9 },
      { product: '1988', 金牌:5, 银牌: 11, 铜牌: 12 },
      { product: '1992', 金牌: 16, 银牌: 22, 铜牌: 16 },
      { product: '1996', 金牌: 16, 银牌:22, 铜牌: 12 },
      { product: '2000', 金牌: 28, 银牌: 16, 铜牌: 15 },
      { product: '2004', 金牌: 32, 银牌: 17, 铜牌: 14 },
      { product: '2008', 金牌: 51, 银牌:21, 铜牌: 28 },
      { product: '2012', 金牌: 37, 银牌: 28, 铜牌: 23 },
      { product: '2016', 金牌:26, 银牌: 18, 铜牌: 26 },
      { product: '2020', 金牌: 38, 银牌:32, 铜牌: 18 }
    ]
  },
  yAxis: { type: 'category' },
  xAxis: {},
  // Declare several bar series, each will be mapped
  // to a column of dataset.source by default.
   series: [{ type: 'bar' , itemStyle:{color: '#ff4c46'}}, 
   { type: 'bar',itemStyle:{color: '#aaff7f'}}, 
   { type: 'bar',itemStyle:{color: '#ffff00'}}],
   
  };
option && myChart.setOption(option);
