<template>
  <!--曲线折线图-->
  <div>
    <p class="title">- {{config.showTitle}} -</p>
    <v-chart :width="width" :height="height" :padding="padding" :data="sourceData">
      <v-tooltip/>
      <v-legend :position="'top-center'" :style="{fill:'#fff'}"/>
      <v-axis data-key="tick" :label="label"/>
      <v-axis data-key="value" :label="label" :line="{strokeOpacity:1}" :tickLine="{strokeOpacity:1}" :grid="null"/>
      <v-smooth-line position="tick*value" color="search" shape="smooth"/>
      <v-point position="tick*value" color="search" shape="square"/>
    </v-chart>
  </div>
</template>

<script>
  const DataSet = require('@antv/data-set');
    export default {
        name: "index",
        props:['height','width','config'],
        data(){
          return {
            sourceData:[],
            padding:[30,'auto',35,'auto'],
            label:{
              textStyle:{
                fill:'#fff',
              }
            }
          }
        },
      mounted(){
        //页面挂载完毕，获取数据
        //this.fetchData();
        const data2=[
          { tick: 'Jan', google: 1237,baidu: 2323,yaho:2321,bing:623},
          { tick: 'Feb', google: 1127,baidu: 2223,yaho:2321,bing:313},
          { tick: 'Mar', google: 3237,baidu: 4323,yaho:1621,bing:923},
          { tick: 'Apr', google: 3537,baidu: 6223,yaho:3321,bing:943},
          { tick: 'May', google: 1737,baidu: 213,yaho:6321,bing:823},
          { tick: 'Jun', google: 2137,baidu: 2373,yaho:2321,bing:423},
          { tick: 'Jul', google: 3123,baidu: 232,yaho:7321,bing:623},
          { tick: 'Aug', google: 6342,baidu: 2023,yaho:1825,bing:853},
          { tick: 'Sep', google: 4534,baidu: 2323,yaho:1321,bing:988},
          { tick: 'Oct', google: 1323,baidu: 1123,yaho:1831,bing:733},
          { tick: 'Nov', google: 4567,baidu: 2323,yaho:1321,bing:556},
          { tick: 'Dec', google: 9145,baidu: 2323,yaho:1756,bing:226},
        ]
        const dv = new DataSet.View().source(data2);
        this.sourceData=dv.transform({
          type: 'fold',
          fields: ['google','baidu','yaho','bing'],
          key: 'search',
          value: 'value',
        }).rows;
      },
      methods:{
          async fetchData() {
            const data2=[
              { tick: 'Jan', google: 1237,baidu: 2323,yaho:2321,bing:623},
              { tick: 'Feb', google: 1127,baidu: 2223,yaho:2321,bing:313},
              { tick: 'Mar', google: 3237,baidu: 4323,yaho:1621,bing:923},
              { tick: 'Apr', google: 3537,baidu: 6223,yaho:3321,bing:943},
              { tick: 'May', google: 1737,baidu: 213,yaho:6321,bing:823},
              { tick: 'Jun', google: 2137,baidu: 2373,yaho:2321,bing:423},
              { tick: 'Jul', google: 3123,baidu: 232,yaho:7321,bing:623},
              { tick: 'Aug', google: 6342,baidu: 2023,yaho:1825,bing:853},
              { tick: 'Sep', google: 4534,baidu: 2323,yaho:1321,bing:988},
              { tick: 'Oct', google: 1323,baidu: 1123,yaho:1831,bing:733},
              { tick: 'Nov', google: 4567,baidu: 2323,yaho:1321,bing:556},
              { tick: 'Dec', google: 9145,baidu: 2323,yaho:1756,bing:226},
            ]
            const dv = new DataSet.View().source(data2);
            this.sourceData=dv.transform({
              type: 'fold',
              fields: ['google','baidu','yaho','bing'],
              key: 'search',
              value: 'value',
            }).rows;
            console.log(this.sourceData);
            const {status,message,results}=await this.$store.dispatch(`${this.dataType}`,{type:this.type,interval:this.interval,page:this.page});
            if(status){
              this.sourceData=results;
            }else{
              console.log(message);
              alert(message);
            }
          }
        },

    }
</script>

<style scoped lang="less">
  .title{
    font-size: 14px;
    text-align: center;
    color: rgb(37, 243, 230);
    font-weight: 700;
  }
</style>
