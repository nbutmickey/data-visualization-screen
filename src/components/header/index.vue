<template>
<div class="header">
  <div class="header-bg" :style="{backgroundImage: `url('${titleBgUrl}')`,backgroundSize:'100% 100%'}">
    <p class="weather">
      <span><i class="iconfont icon-position" style="font-size: 22px"></i> 宁波</span>
      <span><i class="iconfont icon-tianqi-7" style="font-size: 22px"></i> 阴转小雨</span>
      <span><i class="iconfont icon-temperature" style="font-size: 22px"></i> 7℃~10℃</span>
    </p>
    <h1 class="title">{{headerTitle}}</h1>
    <p class="time">{{formatTime(date)}}</p>
  </div>
</div>
</template>

<script>
  import {mapGetters} from 'vuex'
    export default {
        name: "index",
        props:['titleType'],
        data(){
          return {
            date:new Date(),
            titleBgUrl:require(`../../assets/bg/title${this.titleType}.png`),
          }
        },
        computed:{
          ...mapGetters(['headerTitle'])
        },
        created(){
          this.getWeather();
        },
        watch:{
          titleType:(val)=>{
            console.log(val);
            this.titleBgUrl=require(`../../assets/bg/title${this.titleType}.png`)
          }
        },
        mounted(){
          let _this=this;
          this.timer=setInterval(()=>{
            _this.date=new Date();
          },1000)
        },
        methods:{
          async getWeather(){
            let result=await this.$store.dispatch('getWeather')
            console.log(result);
          },
          formatTime(date){
            let Year=date.getFullYear();
            let Month=(date.getMonth()+1)<10?'0'+(date.getMonth()+1):(date.getMonth()+1);
            let Day=date.getDate()<10?'0'+date.getDate():date.getDate();
            let Hour=date.getHours()<10?'0'+date.getHours():date.getHours();
            let Minutes=date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes();
            let Seconds=date.getSeconds()<10?'0'+date.getSeconds():date.getSeconds();
            return `${Year}-${Month}-${Day}  ${Hour}:${Minutes}:${Seconds}`
          }
        }
    }
</script>

<style scoped lang="less">
.header{
  width: 100%;
  height: 80px;
  .header-bg{
    box-sizing: border-box;
    width: 100%;
    height: 80px;
    padding:0 10px;
    .weather{
      width: 100%;
      font-size: 20px;
      display: inline-block;
      width: 25%;
      margin-bottom: 0;
      color: #25f3e6;
      span:first-child{
        margin-left: 40px;
      }
      span{
        margin-left: 35px;
      }
    }
    .title{
      width: 50%;
      display: inline-block;
      text-align: center;
      color: #fff;
      margin: 0;
      line-height: 50px;
      font-size: 30px;
    }
    .time{
      width: 20%;
      display: inline-block;
      font-family: Digital;
      font-size: 30px;
      color: #25f3e6;
      text-align: right;
    }
}
}

</style>
