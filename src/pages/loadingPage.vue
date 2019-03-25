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
              //console.log(this.config);
              switch (parseInt(this.config.templateType)){
                case 1:
                  this.config.trendConfig.trendWidth='490';
                  this.config.trendConfig.trendHeight='250';
                  this.config.statisticalConfig.statisticalWidth='740';
                  this.config.statisticalConfig.statisticalHeight='260';
                  break;
                case 2:
                  this.config.trendConfig.trendWidth='670';
                  this.config.trendConfig.trendHeight='300';
                  this.config.statisticalConfig.statisticalWidth='850';
                  this.config.statisticalConfig.statisticalHeight='260';
                  break;
                case 3:
                  this.config.trendConfig.trendWidth='670';
                  this.config.trendConfig.trendHeight='340';
                  this.config.statisticalConfig.statisticalWidth='850';
                  this.config.statisticalConfig.statisticalHeight='260';
                  break;
                case 4:
                  this.config.trendConfig.trendWidth='820';
                  this.config.trendConfig.trendHeight='340';
                  this.config.statisticalConfig.statisticalWidth='800';
                  this.config.statisticalConfig.statisticalHeight='360';
                  break;
                case 5:
                  this.config.trendConfig.trendWidth='650';
                  this.config.trendConfig.trendHeight='340';
                  this.config.statisticalConfig.statisticalWidth='650';
                  this.config.statisticalConfig.statisticalHeight='350';
                  break;
              }
              console.log(this.config);
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
