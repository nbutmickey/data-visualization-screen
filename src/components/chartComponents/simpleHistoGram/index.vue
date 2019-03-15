<template>
  <!--简单柱状图-->
  <div>
    <p class="title">- {{config.showTitle}} -</p>
    <v-chart :width="width" :height="height" :data="sourceData" :padding="padding">
      <v-tooltip />
      <v-axis data-key="year" :label="label"/>
      <v-axis data-key="sales" :label="label" :grid="null"/>
      <v-bar position="year*sales" />
    </v-chart>
  </div>
</template>

<script>
  const data = [
    { year: '1951 年', sales: 38 },
    { year: '1952 年', sales: 52 },
    { year: '1956 年', sales: 61 },
    { year: '1957 年', sales: 145 },
    { year: '1958 年', sales: 48 },
    { year: '1959 年', sales: 38 },
    { year: '1960 年', sales: 38 },
    { year: '1962 年', sales: 38 },
  ];
    export default {
        name: "index",
        props:['width','height','config'],
        data(){
          return {
            title:'简单柱状图',
            sourceData:data,
            padding:[10,'auto',20,'auto'],
            label:{
              textStyle:{
                fill:'#fff'
              }
            }
          }
        },
        mounted(){
          //this.fetchData();
        },
        methods:{
          async fetchData(){
            let {status,message,data}=await this.$store.dispatch('',params);
            if(status){
              this.sourceData=data;
            }else{
              alert(message);
              console.log(message);
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
