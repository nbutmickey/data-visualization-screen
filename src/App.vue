<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      ws:null,
      wsURL:'ws://10.26.24.154:8080/websocket'
    }
  },
  mounted(){
    this.connection();
  },
  methods:{
    //修改相应的store中state的函数
    //与服务器端建立websocket连接
    connection(){
      this.ws=new WebSocket(this.wsURL);
      const ws=this.ws;
      ws.onopen=this.wsonopen;
      ws.onmessage=this.wsonmessage;
    },
    wsonopen(e){
      console.log("websocket已经建立连接。。。");
    },
    wsonmessage(e){
      if(e.data==='updateConfig'){
        //如果控制端突然发起修改配置请求
        this.$store.commit('SET_IS_CONFIG',false);
      }else{
        let {isConfig,config}=JSON.parse(e.data);
        if(isConfig){
          this.$store.commit('SET_IS_CONFIG',true);
          this.$store.commit('SET_CONFIG',config.newConfig);
        }
      }
    },
    onclose(){}
  }
}
</script>

<style lang="less">
  @import "../style/index.less";
  @import "../style/normalize.less";
</style>
