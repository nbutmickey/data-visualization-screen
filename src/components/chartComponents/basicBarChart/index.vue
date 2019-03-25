<template>
  <!--基础条形图(纵向)-->
  <div>
    <p class="title">- {{config.showTitle}} -</p>
    <v-chart :width="width" :height="height" :padding="padding" :data="sourceData">
      <v-coord type="rect" direction="LB" />
      <v-tooltip />
      <v-axis data-key="item" :label="label" />
      <v-axis data-key="count" :label="label" :line="{strokeOpacity:1}" :tickLine="{strokeOpacity:1}"  :grid="null"/>
      <v-bar position="item*count" />
    </v-chart>
  </div>
</template>

<script>
  //const DataSet = require('@antv/data-set');
    export default {
        props:['width','height','config'],
        name: "index",
        data(){
          return {
            sourceData:[],
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
          this.fetchData();
        },
        methods: {
          async fetchData() {
            let fetchDataType = this.config.fetchDataType;
            if (fetchDataType === 'statisticalDataTweleve'||fetchDataType === 'statisticalDataThirteen') {
              let {status, message, result} = await this.$store.dispatch('statisticalDataFive');
              if (status) {
                this.sourceData=result;
              }else{
                alert(message)
              }
            } else if(fetchDataType === 'statisticalDataFourteen'){
              let {status, message, result} = await this.$store.dispatch('statisticalDataSix');
              if(status){
                this.sourceData=result;
              }else{
                alert(message);
              }
            } else if (fetchDataType === 'statisticalDataEight'||fetchDataType === 'statisticalDataNine') {
              let {status, message, result} = await this.$store.dispatch('statisticalDataTwo');
              let {browser,os}=result;
              if (status) {
                if(fetchDataType === 'statisticalDataEight'){
                  this.sourceData = browser;
                }else{
                  this.sourceData = os;
                }
              }else{
                alert(message);
              }
            }else if(fetchDataType === 'statisticalDataTen'){
              let {status, message, result} = await this.$store.dispatch('statisticalDataThree');
              if (status){
                this.sourceData = result;
              }else{
                alert(message);
              }
            }else if(fetchDataType==='statisticalDataEleven'){
              let {status, message, result} = await this.$store.dispatch('statisticalDataFour');
              if (status){
                this.sourceData = result;
              }else{
                alert(message);
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
