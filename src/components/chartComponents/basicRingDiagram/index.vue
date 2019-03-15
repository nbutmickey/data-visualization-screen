<template>
  <!--基础环形图组件-->
  <div :style="{width:width+'px'}">
    <p class="title">- {{config.showTitle}} -</p>
    <div class="ringdigram-box">
      <div class="statisticalPanel">
        <div v-for="(item,index) in data" :key="index" class="panel-item"><span>{{item.item}}</span><span>{{item.count}}</span></div>
      </div>
      <div style="width: 70%">
        <v-chart :forceFit="true" :height="height" :data="sourceData" :scale="scale" :padding="padding">
          <v-tooltip :showTitle="false" dataKey="item*percent" />
          <v-legend dataKey="item" position="bottom" :textStyle="{fill:'#ffff'}"/>
          <v-pie position="percent" color="item" :label="labelConfig"/>
          <v-coord type="theta" :radius="0.75" :innerRadius="0.5" />
        </v-chart>
      </div>
    </div>
  </div>
</template>

<script>
  const DataSet = require('@antv/data-set');
  const data = [
    { item: 'POST', count: 40 },
    { item: 'GET', count: 21 },
    { item: 'PUT', count: 17 },
    { item: 'DELETE', count: 13 },
  ];
    export default {
        name: "index",
        props:['width','height','config'],
        data(){
          return {
            title:'环形对比图',
            padding:[15,'auto',60,'auto'],
            data:data,
            scale:[{
              dataKey: 'percent',
              min: 0,
              formatter: '.0%',
            }],
            sourceData:[],
            labelConfig: ['percent', {
              formatter: (val, item) => {
                return item.point.item + ': ' + val;
              },
              textStyle:{
                fill:'#fff'
              }
            }]
          }
        },
        mounted(){

          this.sourceData=new DataSet.View().source(this.data).transform({
            type: 'percent',
            field: 'count',
            dimension: 'item',
            as: 'percent'
          }).rows;
        },
        methods:{
          async fetchData(){
            let {status,message,data}=await this.$store.dispatch('',params);
            if(status){
              this.data=data;
              this.sourceData=new DataSet.View().source(data).transform({
                type: 'percent',
                field: 'count',
                dimension: 'item',
                as: 'percent'
              }).rows;
            }else{
              alert(message);
              console.log(message);
            }
          }
        },

    }
</script>

<style scoped lang="less">
  .ringdigram-box{
    display: flex;
    justify-content: space-around;
    padding: 12px 0;
    .statisticalPanel{
      width:30%;
      background: rgba(35, 72, 135, 0.4);
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .panel-item{
        width: 100%;
        display: flex;
        justify-content: space-around;
        span:first-child  {
          font-size: 16px;
        }
        span:last-child {
          color: #ffff43;
          font-size: 20px;
          font-weight: 700
        }
      }
    }
  }
  .title{
    font-size: 14px;
    text-align: center;
    color: rgb(37, 243, 230);
    font-weight: 700;
  }
</style>
