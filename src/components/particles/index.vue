<template>
  <div>
    <vue-particles
      color="#dedede"
      :particleOpacity="0.8"
      :particlesNumber="70"
      shapeType="circle"
      :particleSize="4"
      linesColor="#6495ED"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.6"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      style="background: rgba(0,0,0,0.8)"
    >
    </vue-particles>
    <h1>页面正在配置中+-*%\&...</h1>
  </div>
</template>

<script>
  import Vue from 'vue'
  import VueParticles from 'vue-particles'
  Vue.use(VueParticles)
    export default {
        name: "index",
    }
</script>

<style scoped lang="less">
  #particles-js {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1003;
    width: 100%;
    height: 100%;
  }

  h1{
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 1004;
    letter-spacing: 2px;
    color: rgba(255,255,255,0.8);
  }
</style>
