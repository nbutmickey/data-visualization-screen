let getters={
  config:state=>state.config,
  headerTitle:state=>state.headerTitle,
  templateType:state=>state.templateType,
  styleType:state=>state.styleType,
  isConfig:state=>state.isConfig,
  realTimeData:state=>state.realTimeData,
  trendWidth:state=>state.trendStyle.trendWidth,
  trendHeight:state=>state.trendStyle.trendHeight,
  lineChartType:state=>state.trendStyle.lineChartType,
  statisticalType:state=>state.statisticalStyle.statisticalType,
  statisticalWidth:state=>state.statisticalStyle.statisticalWidth,
  statisticalHeight:state=>state.statisticalStyle.statisticalHeight
}
export default getters

