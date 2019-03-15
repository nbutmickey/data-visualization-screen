<template>
    <!--<transition  name="slide-fade">-->
        <div
          class="index-page"
          :style="{ backgroundImage: `url('${backgroundUrl}')` }"
        >
          <Header :titleType="styleType"></Header>
          <div class="main-layout">
            <TemplateOne v-if="templateType==='1'"></TemplateOne>
            <TemplateTwo v-if="templateType==='2'"></TemplateTwo>
            <TemplateThree v-if="templateType==='3'"></TemplateThree>
            <TemplateFour v-if="templateType==='4'"></TemplateFour>
            <TemplateFive v-if="templateType==='5'"></TemplateFive>
          </div>
        </div>

    <!--</transition>-->
</template>
<script>
import TemplateOne from "@/pages/templateOne/index";
import TemplateTwo from "@/pages/templateTwo/index";
import TemplateThree from "@/pages/templateThree/index";
import TemplateFour from "@/pages/templateFour/index";
import TemplateFive from "@/pages/templateFive/index";
import Header from "@/components/header/index";

import { mapGetters } from "vuex";
export default {
  name: "index",
  data() {
    return {
      backgroundUrl: require("../assets/bg/bg-global1.png")
    };
  },
  created() {
    //这里与服务器建立websocket的连接，实时监听服务器端的返回消息用于重新渲染页面
    //返回的消息应立即将store中对应的参数改ype变，以便渲染界面

  },
  computed: {
    ...mapGetters(["templateType", "styleType","isConfig"])
  },
  components: {
    Header,
    TemplateOne,
    TemplateTwo,
    TemplateThree,
    TemplateFour,
    TemplateFive,
  },
  watch: {
    //利用watch的立刻执行机制让页面重新加载进来之后，对于监听的属性可以立即执行对应的函数
    styleType: {
      handler(val) {
        this.backgroundUrl = require(`../assets/bg/bg-global${val}.png`);
      },
      immediate: true
    },
    isConfig(val){
      if(!val){
        this.$router.push('/');
      }
    }
  }
};
</script>
<style scoped lang="less">

.index-page {
  height: 100%;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  backgroundrepeat: repeat-x;
  .main-layout {
    padding: 5px 10px;
    height: 900px;
  }
}


.slide-fade-enter-active {
  transition: all .8s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
