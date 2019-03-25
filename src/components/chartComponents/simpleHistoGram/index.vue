<template>
  <!--简单柱状图-->
  <div>
    <p class="title">- {{config.showTitle}} -</p>
    <v-chart :width="width" :height="height" :data="sourceData" :padding="padding">
      <v-tooltip />
      <v-axis data-key="item" :label="label"/>
      <v-axis data-key="count" :label="label" :line="{strokeOpacity:1}" :tickLine="{strokeOpacity:1}"  :grid="null"/>
      <v-bar position="item*count" />
    </v-chart>
  </div>
</template>

<script>

    export default {
        name: "index",
        props:['width','height','config'],
        data(){
          return {
            sourceData:[],
            padding:[10,'auto',35,'auto'],
            label:{
              textStyle:{
                fill:'#fff'
              }
            }
          }
        },
        mounted(){
          this.fetchData();
        },
        methods:{
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
