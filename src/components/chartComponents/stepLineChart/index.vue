<template>
  <div>
  <p class="title">- {{config.showTitle}} -</p>
  <v-chart  :width="width"  :height="height" :padding="padding"  :data="sourceData" >
    <v-tooltip />
    <v-axis data-key="key" :label="label" />
    <v-axis data-key="value" :label="label" :line="{strokeOpacity:1}" :tickLine="{strokeOpacity:1}" :grid="null"/>
    <v-line position="key*value" shape="hv" />
  </v-chart>
  </div>
</template>

<script>
  const data = [
    { key: 'Jan', value: 12312351 },
    { key: 'Feb', value: 3123291 },
    { key: 'Mar', value: 5345343 },
    { key: 'Apr', value: 5354542 },
    { key: 'May', value: 423463 },
    { key: 'June', value: 6546458 },
    { key: 'July', value: 6546455 },
    { key: 'Aug', value: 534577 },
    { key: 'Sep', value: 953459 },
    { key: 'Oct', value: 535106 },
    { key: 'Nov', value: 853458 },
    { key: 'Dec', value: 534556 },
  ];
    export default {
        name: "index",
        props:['height','width','config'],
        data(){
          return{
            sourceData:data,
            padding:[10,'auto',40,'auto'],
            label:{
                textStyle:{
                  fill:'#fff',
                }
            }
          }
        },
        mounted(){
          //页面挂载完毕，获取数据
          //this.fetchData();
        },
        methods:{
          //拉取数据
          async fetchData() {
            const {status,message,results}=await this.$store.dispatch(`${this.dataType}`,{type:this.type,interval:this.interval,page:this.page});
            if(status){
              let resData=JSON.parse(JSON.stringify(results).replace(/tick/g,'key').replace(/count/g,'value'));
              this.sourceData=resData;
            }else{
              console.log(message);
              alert(message);
            }
          }
        }
    }
</script>

<style scoped lang="less">
.title {
  font-size: 14px;
  text-align: center;
  color: rgb(37, 243, 230);
  font-weight: 700;
}
</style>
