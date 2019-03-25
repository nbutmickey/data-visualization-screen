<template>
  <!--基础环形图组件-->
  <div :style="{width:width+'px'}">
    <p class="title">- {{config.showTitle}} -</p>
    <div class="ringdigram-box">
      <div class="statisticalPanel">
        <div v-for="(item,index) in data" :class="/^[2-3].{2,}/.test(item.item)?'success-color':'fail-color'" :key="index" class="panel-item"><span>{{item.item}}</span><span>{{item.count}}</span></div>
      </div>
      <div style="width: 70%">
        <v-chart :forceFit="true" :height="height" :data="sourceData" :scale="scale" :padding="padding">
          <v-tooltip :showTitle="false" dataKey="item*percent" />
          <v-legend dataKey="item" position="bottom" :textStyle="{fill:'#ffff'}"/>
          <v-pie position="percent" color="item" :label="labelConfig"/>
          <v-coord type="theta" :radius="0.75" :innerRadius="0.6" />
        </v-chart>
      </div>
    </div>
  </div>
</template>

<script>
  const DataSet = require('@antv/data-set');
    export default {
        name: "index",
        props:['width','height','config'],
        data(){
          return {
            padding:[15,'auto',60,'auto'],
            data:[],
            scale:[{
              dataKey: 'percent',
              min: 0,
              formatter: '.0%',
            }],
            sourceData:[],
            labelConfig: ['percent', {
              formatter: (val, item) => {
                return item.point.item + ': ' + val;
              },
              textStyle:{
                fill:'#fff'
              }
            }]
          }
        },
        mounted(){
          this.fetchData();
        },
        methods:{
          async fetchData(){
            let fetchDataType = this.config.fetchDataType;
            let {status,message,result} = await this.$store.dispatch(fetchDataType);
            if(status){
              //console.log(typeof result);
              if(fetchDataType==='statisticalDataThree'){
                //this.data=result.sort((a,b)=>{return b.count-a.count});
                let newResult=[...result];
                this.data=newResult.slice(0,5);
              }else if(fetchDataType==='statisticalDataFour'){
                let newResult=[];
                newResult=result.filter((item)=>{if(item.item==='200'||item.item==='404'||item.item==='304'||item.item==='301'||item.item==='403'||item.item==='400'||item.item==='500') return true;else return false;})
                this.data=newResult.sort((a,b)=>{return b.count-a.count})
              }else{
                this.data=result;
              }
              //this.data=result;
              this.sourceData=new DataSet.View().source(result).transform({
                type: 'percent',
                field: 'count',
                dimension: 'item',
                as: 'percent'
              }).rows;
            }else{
              alert(message);
              //console.log(message);
            }
          }
        },

    }
</script>

<style scoped lang="less">
  .ringdigram-box{
    display: flex;
    justify-content: space-around;
    padding: 12px 0;
    .statisticalPanel{
      width:30%;
      background: rgba(35, 72, 135, 0.4);
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .panel-item{
        width: 100%;
        display: flex;
        padding: 0 30px;
        justify-content: space-between;
        span:first-child  {
          font-size: 16px;
        }
        span:last-child {
          color: #ffff43;
          font-size: 20px;
          font-weight: 700
        }
      }
    }
  }

  .success-color{
    color: #67C23A;
  }
  .fail-color{
    color:#F56C6C
  }
  .title{
    font-size: 14px;
    text-align: center;
    color: rgb(37, 243, 230);
    font-weight: 700;
  }
</style>
