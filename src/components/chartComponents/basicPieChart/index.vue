<template>
  <!--基础饼图组件-->
  <div>
    <p class="title">- {{config.showTitle}} -</p>
    <div style="display: flex;justify-content: space-between;width: 100%">
    <div :style="{width:width/2+'px'}">
    <v-chart :forceFit="true" :height="height" :data="sourceData" :scale="scale" :padding="padding">
      <v-tooltip :showTitle="false" dataKey="item*percent" />
      <v-legend dataKey="item" :textStyle="{fill:'#ffff'}"/>
      <v-pie
        position="percent"
        color="item"
        :label="labelConfig"
      />
      <v-coord type="theta" />
    </v-chart>
    </div>
      <div :style="{width:width/2+'px'}">
      <v-chart :forceFit="true" :height="height" :data="sourceData2" :scale="scale" :padding="padding">
      <v-tooltip :showTitle="false" dataKey="item*percent" />
      <v-legend  dataKey="item" :textStyle="{fill:'#ffff'}"/>
      <v-pie
        position="percent"
        color="item"
        :label="labelConfig"
      />
      <v-coord type="theta" />
    </v-chart>
      </div>
    </div>
  </div>
</template>

<script>
  const DataSet = require('@antv/data-set');
    export default {
        props:['width','height','config'],
        name: "index",
        data(){
          return {
            sourceData:[],
            sourceData2:[],
            scale:[{
              dataKey: 'percent',
              min: 0,
              formatter: '.0%',
            }],
            padding:[10,'auto',65,'auto'],
            labelConfig: ['percent', {
              offset: -40,
              textStyle: {
                rotate: 0,
                textAlign: 'center',
                fill:'#ffffff',
                fontSize:12,
                fontWeight:500,
                shadowBlur: 2,
                shadowColor: 'rgba(0, 0, 0, .45)'
              }
            }],
          }
        },
        mounted(){
          this.fetchData();
        },
        methods:{
          async fetchData(){
            let fetchDataType = this.config.fetchDataType;
            if(fetchDataType==='statisticalDataTwo'){
              //静态数据模拟
              let {status,message,result} = await this.$store.dispatch(fetchDataType);
              if(status){
                let {browser,os}=result;
                this.sourceData=new DataSet.View().source(browser).transform({
                  type: 'percent',
                  field: 'count',
                  dimension: 'item',
                  as: 'percent'
                }).rows;
                this.sourceData2=new DataSet.View().source(os).transform({
                  type: 'percent',
                  field: 'count',
                  dimension: 'item',
                  as: 'percent'
                }).rows;
              }else{
                alert(message);
              }

            }else if(fetchDataType==='statisticalDataFive'){
              let {status,message,result} = await this.$store.dispatch(fetchDataType);
              if(status){
                let {client,server}=result;
                this.sourceData=new DataSet.View().source(client).transform({
                  type: 'percent',
                  field: 'count',
                  dimension: 'item',
                  as: 'percent'
                }).rows;
                this.sourceData2=new DataSet.View().source(server).transform({
                  type: 'percent',
                  field: 'count',
                  dimension: 'item',
                  as: 'percent'
                }).rows;
              }else{
                console.log(message);
              }
            }
          }
        }
    }
</script>

<style scoped>
.title{
  font-size: 14px;
  text-align: center;
  color: rgb(37, 243, 230);
  font-weight: 700;
}
</style>
