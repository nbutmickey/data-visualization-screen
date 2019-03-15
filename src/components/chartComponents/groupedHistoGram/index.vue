<template>
  <!--分组柱状图-->
  <div>
    <p class="title">- {{config.showTitle}} -</p>
    <v-chart :width="width" :height="height" :data="sourceData" :padding="padding">
      <v-tooltip />
      <v-axis data-key="item" :label="label"/>
      <v-axis data-key="count" :label="label":line="{strokeOpacity:1}" :tickLine="{strokeOpacity:1}"  :grid="null"/>
      <v-legend :position="position"/>
      <v-bar position="item*count" color="name"  />
    </v-chart>
  </div>
</template>

<script>
    const DataSet = require('@antv/data-set');
    export default {
        props:['width','height','config'],
        name: "index",
        data(){
          return {
            title:'数据分析图',
            sourceData:[],
            position:'top',
            padding:[30,'auto',40,'auto'],
            label:{
              textStyle:{
                fill:'#fff'
              }
            }
          }
        },
        mounted(){
          const sourceData = [
            { name: 'London', 'Jan.': 18.9, 'Feb.': 28.8, 'Mar.': 39.3, 'Apr.': 81.4, 'May': 47, 'Jun.': 20.3, 'Jul.': 24, 'Aug.': 35.6 },
            { name: 'Berlin', 'Jan.': 12.4, 'Feb.': 23.2, 'Mar.': 34.5, 'Apr.': 99.7, 'May': 52.6, 'Jun.': 35.5, 'Jul.': 37.4, 'Aug.': 42.4 },
          ];
          const dv = new DataSet.View().source(sourceData);
          this.sourceData=dv.transform({
            type: 'fold',
            fields: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.'],
            key: 'item',
            value: 'count',
          }).rows;

        },
        methods:{
          // async fetchData(){
          //   let {status,message,data}=await this.$store.dispatch('',params);
          //   if(status){
          //
          //   }else{
          //     alert(message);
          //     console.log(message);
          //   }
          // }
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
