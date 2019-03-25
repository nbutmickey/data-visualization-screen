<template>
  <!--基础面积图组件-->
  <div>
    <p class="title">- {{config.showTitle}} -</p>
    <v-chart :width="width" :height="height" :data="sourceData" :padding="padding">
      <v-tooltip />
      <v-axis data-key="tick" :label="label" />
      <v-axis data-key="count" :label="label"  :line="{strokeOpacity:1}" :tickLine="{strokeOpacity:1}" :grid="null"/>
      <v-line position="tick*count" :size="2" />
      <v-area position="tick*count" color="rgba(35, 72, 135, 0.4)"/>
    </v-chart>
  </div>
</template>

<script>
    export default {
        name: "index",
        props:['height','width','config'],
        data(){
          return {
              padding:[10,'auto',35,'auto'],
              sourceData:[],
              label:{
                textStyle:{
                  fill:'#fff',
                }
            }
          }
        },
      mounted(){
        this.fetchData();
      },
      methods:{
          //获取数据
          async fetchData() {
            //转化后端数据
            console.log(this.config);
              const {status,message,result}=await this.$store.dispatch(this.config.fetchDataType,{type:this.config.type,detailDate:this.config.detailDate,page:this.config.page});
              if(status){
                this.sourceData=result;
              }else{
                alert(message);
              }

          }
      },
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
