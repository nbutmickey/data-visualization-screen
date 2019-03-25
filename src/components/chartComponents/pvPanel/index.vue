<template>
  <!--访问总量(pv)展示面板-->
    <div class="pv-box" :style="{width:width?'100%':'45%'}">
        <div class="title">日浏览量(PV)</div>
        <div class="number">{{pvNumber}}</div>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
    export default {
        name: "index",
        data(){
          return {
            pvNumber:0
          }
        },
        created(){
          this.getPVNumber();
        },
        computed:{
          ...mapGetters(['templateType','realTimeData']),
          width(){
            if(this.templateType==='1'||this.templateType==='5'){
              console.log('fsfd');
              if(this.realTimeData.length===2&&this.realTimeData.includes('record')){
                return true;
              }
              return true;
            }else{
              if(this.realTimeData.length===2&&this.realTimeData.includes('record')){
                return true;
              }else{
                return false;
              }
            }
          }
        },
        mounted(){
          setInterval(()=>{this.pvNumber++},1000);
        },
        methods:{
            async getPVNumber(){
                let {status,message,count}=await this.$store.dispatch('getPVNumber');
                if(status){
                  this.pvNumber=count;
                }else{
                  alert(message)
                }
            }
        }
    }
</script>

<style scoped lang="less">
  .pv-box{
    height: 110px;
    background:rgba(35,72,135,.4);
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-bottom: 10px;
    .title{
        width: 100%;
        height: 50%;
        font-size: 16px;
        padding-top: 10px;
        color: #fff;
      }
    .number{
        width: 100%;
        height: 50%;
        font-size: 40px;
        font-weight: 700;
        font-family: Digital;
        color: #fa8c16;
        overflow: hidden;
        whitespace:wrap;
        text-overflow: ellipsis;
      }

  }
</style>
