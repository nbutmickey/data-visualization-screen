<template>
  <div class="statistical-box" :style="statisticalStyle">
    <div :class="templateType==='4'||templateType==='5'?'layout':'change-layout'">
      <user-data-panel v-if="statisticalType.some((item)=>item.graphStyle==='styleSeven')" :config="statisticalType.find((item)=>{if(item.graphStyle==='styleSeven') return item})" :width="statisticalWidth" :height="statisticalHeight"></user-data-panel>
      <spider-count-panel v-if="statisticalType.some((item)=>item.graphStyle==='styleEight')" :config="statisticalType.find((item)=>{if(item.graphStyle==='styleEight') return item})" :width="statisticalWidth" :height="statisticalHeight"></spider-count-panel>
      <origin-url-panel v-if="statisticalType.some((item)=>item.graphStyle==='styleNine')" :config="statisticalType.find((item)=>{if(item.graphStyle==='styleNine') return item})" :width="statisticalWidth" :height="statisticalHeight"></origin-url-panel>
      <origin-city-panel v-if="statisticalType.some((item)=>item.graphStyle==='styleTen')" :config="statisticalType.find((item)=>{if(item.graphStyle==='styleTen') return item})" :width="statisticalWidth" :height="statisticalHeight"></origin-city-panel>
      <status-count-panel v-if="statisticalType.some((item)=>item.graphStyle==='styleEleven')" :config="statisticalType.find((item)=>{if(item.graphStyle==='styleEleven') return item})" :width="statisticalWidth" :height="statisticalHeight"></status-count-panel>
      <popular-page-panel v-if="statisticalType.some((item)=>item.graphStyle==='styleTweleve')" :config="statisticalType.find((item)=>{if(item.graphStyle==='styleTweleve') return item})" :width="statisticalWidth" :height="statisticalHeight"></popular-page-panel>
      <basic-ring-diagram v-if="statisticalType.some((item)=>item.graphStyle==='styleOne')" :config="statisticalType.find((item)=>{if(item.graphStyle==='styleOne') return item})" :width="statisticalWidth" :height="statisticalHeight"></basic-ring-diagram>
      <basic-pie-chart v-if="statisticalType.some((item)=>item.graphStyle==='styleTwo')" :config="statisticalType.find((item)=>{if(item.graphStyle==='styleTwo') return item})" :width="statisticalWidth" :height="statisticalHeight"></basic-pie-chart>
      <grouped-histo-gram v-if="statisticalType.some((item)=>item.graphStyle==='styleFour')" :config="statisticalType.find((item)=>{if(item.graphStyle==='styleFour') return item})" :width="statisticalWidth" :height="statisticalHeight"></grouped-histo-gram>
      <simple-histo-gram v-if="statisticalType.some((item)=>item.graphStyle==='styleFive')" :config="statisticalType.find((item)=>{if(item.graphStyle==='styleFive') return item})" :width="statisticalWidth" :height="statisticalHeight"></simple-histo-gram>
      <basic-bar-chart v-if="statisticalType.some((item)=>item.graphStyle==='styleSix')" :config="statisticalType.find((item)=>{if(item.graphStyle==='styleSix') return item})" :width="statisticalWidth" :height="statisticalHeight"></basic-bar-chart>
    </div>
  </div>
</template>

<script>
  import basicRingDiagram from '@/components/chartComponents/basicRingDiagram'
  import basicBarChart from '@/components/chartComponents/basicBarChart'
  import basicPieChart from '@/components/chartComponents/basicPieChart'
  import groupedHistoGram from '@/components/chartComponents/groupedHistoGram'
  import distributionMap from '@/components/chartComponents/distributionMap'
  import simpleHistoGram from '@/components/chartComponents/simpleHistoGram'
  import userDataPanel from '@/components/userDataPanel'
  import spiderCountPanel from '@/components/spiderCountPanel'
  import originUrlPanel from '@/components/originUrlPanel'
  import originCityPanel from '@/components/originCityPanel'
  import statusCountPanel from '@/components/statusCountPanel'
  import popularPagePanel from '@/components/popularPagePanel'
  import {mapGetters} from 'vuex'
    export default {
        name: "index",
        props:{
          statisticalStyle:Object
        },
        data(){
          return {
          }
        },
        computed:{
          ...mapGetters(['templateType','statisticalType','statisticalHeight','statisticalWidth'])
        },
        components:{
          basicRingDiagram,
          basicBarChart,
          basicPieChart,
          userDataPanel,
          groupedHistoGram,
          distributionMap,
          simpleHistoGram,
          spiderCountPanel,
          originUrlPanel,
          originCityPanel,
          statusCountPanel,
          popularPagePanel
        }
    }
</script>

<style scoped lang="less">
  .statistical-box{
    .layout{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .change-layout{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
    }
    border: 1px solid #25f3e6;
    box-shadow: 0 0 10px #25f3e6;
    padding: 10px;
    box-sizing: border-box;
    color: #fff;
    .title{
      color:#61d2f7;
      font-weight: 700;
      font-size:16px;
      text-shadow: 0 0 1px #25f3e6;
    }
  }
</style>
