<template>
  <!--基础条形图(纵向)-->
  <div>
    <p class="title">- {{config.showTitle}} -</p>
    <v-chart :width="width" :height="height" :data="sourceData" :padding="padding">
      <v-coord type="rect" direction="LB" />
      <v-tooltip />
      <v-axis dataKey="country" :label="label" />
      <v-axis dataKey="population" :label="label" :line="{strokeOpacity:1}" :tickLine="{strokeOpacity:1}" :grid="null"/>
      <v-bar position="country*population" />
    </v-chart>
  </div>
</template>

<script>
  const DataSet = require('@antv/data-set');
  const data = [
    { country: '中国', population: 1344 },
    { country: '印度', population: 1970 },
    { country: '美国', population: 2034 },
    { country: '印尼', population: 2489 },
    { country: '巴西', population: 1803 },
  ];
    export default {
        props:['width','height','config'],
        name: "index",
        data(){
          return {
            sourceData:[],
            data:data,
            padding:[10,'auto',15,'auto'],
            label:{
              offset:12,
              textStyle:{
                fill:'#fff',
              }
            },
          }
        },
        mounted(){
          //this.fetchData();
          this.sourceData=new DataSet.View().source(data).transform({
            type: 'sort',
            callback(a, b) {
              return a.count - b.count > 0;
            },
          }).rows;
        },
        methods:{
          async fetchData(){
            let {status,message,data}=await this.$store.dispatch('',parmas);
            if(status){
              const dv = new DataSet.View().source(data);
              this.sourceData=dv.transform({
                type: 'sort',
                callback(a, b) {
                  return a.count - b.count > 0;
                },
              }).rows;
            }else{
              console.log(message);
              alert(message);
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
