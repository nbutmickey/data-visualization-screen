<template>
  <!--分组柱状图-->
  <div>
    <p class="title">- {{config.showTitle}} -</p>
    <v-chart :width="width" :height="height" :data="sourceData" :padding="padding">
      <v-tooltip />
      <v-axis data-key="item" :label="label"/>
      <v-axis data-key="count" :label="label" :line="{strokeOpacity:1}" :tickLine="{strokeOpacity:1}"  :grid="null"/>
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
          this.fetchData();
        },
        methods:{
          async fetchData(){
            let fetchDataType = this.config.fetchDataType;
            let {status,result,message}=await this.$store.dispatch(fetchDataType)
            console.log(result);
            if(status){
              this.sourceData=new DataSet.View().source(result).transform({
                type: 'fold',
                fields: [`Jan.`,`Feb.`, `Mar.`,`Apr.`,`May.`,`Jun.`,`Jul.`,`Aug.`,`Sep.`,`Oct.`,`Nov.`,`Dec.`],
                key: 'item',
                value: 'count',
              }).rows;
            }else{
              alert(message)
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
