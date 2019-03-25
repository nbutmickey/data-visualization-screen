<template>
  <!--分组条形图-->
  <div>
    <p class="title">- {{config.showTitle}} -</p>
    <v-chart :width="width" :height="height" :data="sourceData" :padding="padding">
      <v-coord type="rect" direction="LT" />
      <v-tooltip />
      <v-legend :position="position"/>
      <v-axis dataKey="value" :label="label" :line="{strokeOpacity:1}" :tickLine="{strokeOpacity:1}"  position="right" :grid="null"/>
      <v-axis dataKey="label" :label="label"  />
      <v-bar position="label*value" color="type" :adjust="adjust" />
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
            position:'top',
            padding:[30,'auto',30,'auto'],
            sourceData:[],
            label:{
              offset:12,
              textStyle:{
                fill:'#fff'
              }
            },
            adjust:[{ type: 'dodge', marginRatio: 1 / 32 }]
          }
        },
        mounted(){
            this.fetchData();
        },
        methods:{
          async fetchData(){
              // let fetchDataType = this.config.fetchDataType;
              // let {status,message,result}=await this.$store.dispatch(fetchDataType,{});
              // if(status){
              //
              // }else{
              //   alert(message);
              //   console.log(message);
              // }
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
