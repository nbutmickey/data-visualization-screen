let state={
  //websocket的配置,
  config:{},
  //标题
  headerTitle:'',
  //模板控制
  templateType:'',
  //背景控制
  styleType:'',
  //实时数据展示
  realTimeData:[],
  //websocket
  isConfig:false,
  //趋势分析配置
  trendStyle:{
    trendWidth:'',
    trendHeight:'',
    lineChartType:[],
  },
  //统计数据配置
  statisticalStyle:{
    statisticalWidth:'',
    statisticalHeight:'',
    statisticalType:[]
  }
}
export default state;
