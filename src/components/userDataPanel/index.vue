<template>
  <div :style="{width: width+'px',height:height+'px'}">
      <p class="title">- {{config.showTitle}} -</p>
      <div class="detail-data">
        <div class="data-item" v-for="item in userData" :key="item.id">
          <div class="count">{{item.count}}</div>
          <div class="name">{{item.name}}</div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        props:['width','height','config'],
        data(){
          return {
            userData:[
              {
              id:1,count:32,name:'新增访客',
              },
              {
                id:2,count:892,name:'活跃用户'
              },
              {
                id:3,count:224,name:'沉默用户',
              },
              {
                id:4,count:7,name:'平均停留(分)'
              }
            ]
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
  .detail-data{
    width: 100%;
    height: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-around;
    .data-item{
      width: 25%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .count{
        //height: 50%;
        color: #f27027;
        font-size: 55px;
        font-family: Digital;
      }
      .name{
        margin-top: 30px;
        font-size: 20px;
        color: #fff;
      }
    }
  }
</style>
