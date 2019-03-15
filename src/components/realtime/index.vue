<template>
  <div class="realTime-box" :style="realTimeStyle">
    <div class="panel" v-if="realTimeData.some((item)=>{if(item==='pv'||item==='uv')return true;return false})">
      <p class="title">--实时访问量--</p>
      <div :class="templateType==='1'||templateType==='5'?'change-layout':'layout'">
        <pv-panel v-if="realTimeData.includes('pv')"></pv-panel>
        <uv-panel v-if="realTimeData.includes('uv')"></uv-panel>
      </div>
    </div>
    <scroll-list v-if="realTimeData.includes('record')"></scroll-list>
  </div>
</template>

<script>
  import pvPanel from '../../components/chartComponents/pvPanel'
  import uvPanel from '../../components/chartComponents/uvPanel'
  import scrollList from '../../components/chartComponents/realTimeScroll'
  import {mapGetters} from 'vuex'
  export default {
    name: "index",
    props:{
      realTimeStyle:Object
    },
    computed:{
      ...mapGetters(['templateType','realTimeData'])
    },
    watch:{
      realTimeData(val){
        console.log(val);
      }
    },
    components:{
      uvPanel,
      pvPanel,
      scrollList
    },
    data(){
      return {
        pvNumber:234,
        uvNumber:123,
        listData: [{ip:'47.28.153.24',target:'/mickey/blog/index.html',date:'2017-05-18 13:30'},
          {ip:'47.28.153.24',target:'/mickey/blog/index.html',date:'2017-05-18 13:30'},
          {ip:'47.28.153.24',target:'/mickey/blog/index.html',date:'2017-05-18 13:30'},
          {ip:'47.28.153.24',target:'/mickey/blog/index.html',date:'2017-05-18 13:30'},
          {ip:'47.28.153.24',target:'/mickey/blog/index.html',date:'2017-05-18 13:30'},
          {ip:'47.28.153.24',target:'/mickey/blog/index.html',date:'2017-05-18 13:30'},
          {ip:'47.28.153.24',target:'/mickey/blog/index.html',date:'2017-05-18 13:30'},
          {ip:'47.28.153.24',target:'/mickey/blog/index.html',date:'2017-05-18 13:30'},
          {ip:'47.28.153.24',target:'/mickey/blog/index.html',date:'2017-05-18 13:30'},
          {ip:'47.28.153.24',target:'/mickey/blog/index.html',date:'2017-05-18 13:30'},
          {ip:'47.28.153.24',target:'/mickey/blog/index.html',date:'2017-05-18 13:30'},
          {ip:'47.28.153.24',target:'/mickey/blog/index.html',date:'2017-05-18 13:30'},
          {ip:'47.28.153.24',target:'/mickey/blog/index.html',date:'2017-05-18 13:30'},
          {ip:'47.28.153.24',target:'/mickey/blog/index.html',date:'2017-05-18 13:30'},
          {ip:'47.28.153.24',target:'/mickey/blog/index.html',date:'2017-05-18 13:30'},
          {ip:'47.28.153.24',target:'/mickey/blog/index.html',date:'2017-05-18 13:30'},
          {ip:'47.28.153.24',target:'/mickey/blog/index.html',date:'2017-05-18 13:30'},
          {ip:'47.28.153.24',target:'/mickey/blog/index.html',date:'2017-05-18 13:30'},
          {ip:'47.28.153.24',target:'/mickey/blog/index.html',date:'2017-05-18 13:30'},
          {ip:'47.28.153.24',target:'/mickey/blog/index.html',date:'2017-05-18 13:30'},
          {ip:'47.28.153.24',target:'/mickey/blog/index.html',date:'2017-05-18 13:30'},
          {ip:'47.28.153.24',target:'/mickey/blog/index.html',date:'2017-05-18 13:30'},
          {ip:'47.28.153.24',target:'/mickey/blog/index.html',date:'2017-05-18 13:30'},
          {ip:'47.28.153.24',target:'/mickey/blog/index.html',date:'2017-05-18 13:30'},
          {ip:'47.28.153.24',target:'/mickey/blog/index.html',date:'2017-05-18 13:30'},
          {ip:'47.28.153.24',target:'/mickey/blog/index.html',date:'2017-05-18 13:30'},
          {ip:'47.28.153.24',target:'/mickey/blog/index.html',date:'2017-05-18 13:30'}]
      }
    }
  }
</script>

<style scoped lang="less">
  .realTime-box{
    border: 1px solid #25f3e6;
    box-shadow: 0 0 10px #25f3e6;
    color: #fff;
    padding: 10px;
    box-sizing: border-box;
    .panel{
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin-top: 10px;
      flex-wrap: wrap;
      .layout{
        display: flex;
        width: 100%;
        justify-content: space-around
      }
      .change-layout{
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: space-around
      }
      .title{
        font-size: 14px;
        text-align: center;
        margin-bottom:15px;
        color: rgb(37, 243, 230);
        font-weight: 700;
      }
    }
  }

</style>
