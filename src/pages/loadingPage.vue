<template>
    <particles></particles>
</template>

<script>
  import particles  from '@/components/particles'
  import {mapGetters} from 'vuex'
    export default {
        name: "loadingPage",
        components:{
          particles
        },
        computed:{
          ...mapGetters(['isConfig','config'])
        },
        watch:{
          isConfig(val){
            if(val){
              this.$store.commit('SET_HEADER_TITLE',this.config.headerTitle);
              this.$store.commit('SET_STYLE_TYPE',this.config.styleType);
              this.$store.commit('SET_TEMPLATETYPE',this.config.templateType);
              this.$store.commit('SET_REALTIME_DATA',this.config.realTimeConfig);
              this.$store.commit('SET_TREND_LAYOUT',{width:this.config.trendConfig.trendWidth,height:this.config.trendConfig.trendHeight});
              this.$store.commit('SET_LINE_CHART_TYPE',this.config.trendConfig.lineChartType);
              this.$store.commit('SET_STATISTICAL_LAYOUT',{width:this.config.statisticalConfig.statisticalWidth,height:this.config.statisticalConfig.statisticalHeight});
              this.$store.commit('SET_STATISTICAL_TYPE',this.config.statisticalConfig.statisticalType);
              //路由跳转到大屏展示界面
              this.$router.push('/index')
            }
          }
        }
    }
</script>

<style scoped>

</style>
