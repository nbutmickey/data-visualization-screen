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
        this.fetchData();
      },
      methods:{
          async fetchData() {
            const {status,message,result}=await this.$store.dispatch(this.config.fetchDataType,{type:this.config.type,detailDate:this.config.detailDate,page:this.config.page});
            if(status){
              this.sourceData=new DataSet.View().source(result).transform({
                type: 'fold',
                fields: ['google','baidu','yaho','bing'],
                key: 'search',
                value: 'value',
              }).rows;
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
