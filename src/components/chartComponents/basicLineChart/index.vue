<template>
  <!--基础折线图-->
    <div>
      <p class="title">- {{config.showTitle}} -</p>
      <v-chart  :width="width" :height="height" :padding="padding" :data="sourceData">
        <v-tooltip />
        <v-axis data-key="tick" :label="label"/>
        <v-axis data-key="count" :label="label" :line="{strokeOpacity:1}" :tickLine="{strokeOpacity:1}" :grid="null"/>
        <v-line position="tick*count" />
        <v-point position="tick*count" shape="circle" />
      </v-chart>
    </div>
</template>

<script>
    export default {
        name: "index",
        props:['height','width','config'],
        data(){
          return {
            sourceData:[],
            padding:[10,'auto',40,'auto'],
            label:{
              textStyle:{
                fill:'#fff',
              }
            }
          }
        },
      mounted(){
          //获取数据
          this.fetchData();
      },
      methods:{
          async fetchData() {
            const {status,message,result}=await this.$store.dispatch(this.config.fetchDataType,{type:this.config.type,detailDate:this.config.detailDate,page:this.config.page});
              if(status){
                this.sourceData=result;
              }else{
                alert(message);
              }
          }
      }
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
