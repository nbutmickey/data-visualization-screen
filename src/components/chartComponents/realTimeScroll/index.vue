<template>
    <div class="message-container" >
        <p class="title">- 实时访问记录 -</p>
        <div class="caption">
          <span>IP地址</span><span>目标页面</span><span>访问时间</span>
        </div>
        <vue-seamless-scroll :data="listData" class="seamless-warp" :style="height" :class-option="{step:0.5,hoverStop: false}">
          <ul class="item">
            <li v-for="item in listData" class="itemClass" :style="{color:item.status===404?'red':'#2fc25b'}">
              <span v-text="item.ip"></span><span v-text="item.target" ></span><span v-text="item.date"></span>
            </li>
          </ul>
        </vue-seamless-scroll>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
    export default {
        name: "index",
        data(){
          return {
            activeIndex:0,
            listData:[]
          }
        },
      created(){
          this.getRealTimeRecord();
      },
      computed:{
        ...mapGetters(['templateType','realTimeData']),
        height(){
          if(this.templateType==='5'||this.templateType==='1'){
            if(this.realTimeData.length===2&&this.realTimeData.includes('record')){
              return {height:'640px'};
            }else{
              return {height:'520px'};
            }
          }else{
            return {height:'160px'};
          }
        }
      },
      methods:{
          async getRealTimeRecord(){
            let {status,message,result}=await this.$store.dispatch('getRealTimeRecord');
            if(status){
              this.listData=result;
            }else{
              alert(message)
            }
          }
      }
    }

</script>

<style scoped lang="less">
  .message-container {
    padding: 0 6px;
    .caption{
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      margin: 4px 0;
      color: #fff;
      font-weight: 600;
      padding: 0 15px;
      span:nth-child(2){
        text-align: center;
      }
    }
    .title {
      font-size: 14px;
      text-align: center;
      margin: 15px auto;
      color: rgb(37, 243, 230);
      font-weight: 700;
    }
    .seamless-warp {
      width: 100%;
      overflow: hidden;
      .item {
        width: 100%;
        font-size: 8px;
        .itemClass {
          width: 100%;
          margin-bottom: 2px;
          display: flex;
          justify-content: space-between;
          span{
            display: inline-block;
          }
          span:nth-child(1){
            width: 30%;
            text-align: left;
          }
          span:nth-child(2){
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            width: 40%;
            text-align: center;
          }
          span:nth-child(3){
            width: 30%;
            text-align: right;
          }
        }
      }
    }
  }
</style>
