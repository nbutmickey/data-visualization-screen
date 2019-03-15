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
  const data = [
    { tick: '1991', count: 15468 },
    { tick: '1992', count: 16100 },
    { tick: '1993', count: 15900 },
    { tick: '1994', count: 17409 },
    { tick: '1995', count: 17000 },
    { tick: '1996', count: 31056 },
    { tick: '1997', count: 31982 },
    { tick: '1998', count: 32040 },
    { tick: '1999', count: 33233 },
  ];
    export default {
        name: "index",
        props:['height','width','config'],
        data(){
          return {
              padding:[10,'auto',35,'auto'],
              sourceData:data,
              label:{
                textStyle:{
                  fill:'#fff',
                }
            }
          }
        },
      mounted(){
        //this.fetchData();
      },
      methods:{
          //获取数据
          async fetchData() {

            //转化后端数据
            let resData=JSON.parse(JSON.stringify(data).replace(/tick/g,'key').replace(/count/g,'value'));
            this.sourceData=resData;
            const {status,message,results}=await this.$store.dispatch(`${this.dataType}`,{type:this.type,interval:this.interval,page:this.page});
            if(status){
              let resData=JSON.parse(JSON.stringify(results).replace(/tick/g,'key').replace(/count/g,'value'));
              this.sourceData=resData;
            }else{
              console.log(message);
              alert(message)
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
