<template>
  <div :style="{width: width+'px',height:height+'px'}">
      <p class="title">- {{config.showTitle}} -</p>
      <ul class="top-list">
        <li v-for="item in topOrigin" :key="item.id"><span class="topItem">NO. {{item.id}}</span><span class="url">{{item.url}}</span></li>
      </ul>
  </div>
</template>

<script>
    export default {
        name: "index",
        props:['width','height','config'],
        data(){
          return {
            topOrigin:[
              {id:1,url:'60.7.101.156'},
              {id:2,url:'47.100.253.114'},
              {id:3,url:'1.58.198.170'}
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
  .top-list{
    width: 100%;
    height: 100%;
    list-style: none;
    li{
      border-bottom: 10px solid #2188d9;
      border-radius: 5px;
      //padding-bottom: 10px;
      padding: 5px 10px 5px 20px;
      margin: 5px 0;
      display: flex;
      justify-content: space-between;
      span:nth-child(1){
        color: #fff;
        font-family: Acens;
      }
      span:nth-child(2){
        color: #d9d93e;
      }
    }
  }

</style>
