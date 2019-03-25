import axios from 'axios'

const actions={
    getWeather(){
      return new Promise((resolve,reject)=>{
        axios({
          method:'GET',
          url:`/apiWeather/index?cityname=宁波&key=cd7737ed5458e0dfed153813ba755796`
        }).then(res=>{
          resolve(res.data);
        })
      })
    },

    getPVNumber(){
      return new Promise((resolve,reject)=>{
        axios({
          method:'GET',
          url:`/easy-mock/getRealTimePVNumber`
        }).then(res=>{
          resolve(res.data);
        })
      })
    },
    getUVNumber(){
      return new Promise((resolve,reject)=>{
      axios({
        method:'GET',
        url:`/easy-mock/getRealTimeUVNumber`
      }).then(res=>{
        resolve(res.data)
      })
    })
    },
    getRealTimeRecord(){
      return new Promise((resolve,reject)=>{
      axios({
        method:'GET',
        url:`/easy-mock/realTimeRecord`
      }).then(res=>{
        resolve(res.data)
      })
    })
    },


    statisticalDataOne(){
      return new Promise((resolve,reject)=>{
        axios({
          method:'GET',
          url:`/easy-mock/getReqMethodNum`
        }).then(res=>{
          resolve(res.data);
        })
      })
    },
    statisticalDataTwo(){
      return new Promise((resolve,reject)=>{
        axios({
          method:'GET',
          url: `/easy-mock/getClientBrowserOs`,
        }).then(res=>{
          resolve(res.data)
        })
      })
    },
    statisticalDataThree(){
      return new Promise((resolve,reject)=>{
        axios({
          method:'GET',
          url: `/easy-mock/getIpByProvinceNum`,
        }).then(res=>{
          resolve(res.data)
        })
      })
    },
    statisticalDataFour(){
      return new Promise((resolve,reject)=>{
        axios({
          method:'GET',
          url: `/easy-mock/getHttpStatusNum`,
        }).then(res=>{
          resolve(res.data)
        })
      })
    },
    statisticalDataFive(){
      return new Promise((resolve,reject)=>{
        axios({
          method:'GET',
          url: `/easy-mock/getFailLoadPageMost`,
        }).then(res=>{
          resolve(res.data)
        })
      })
    },
    statisticalDataSix(){
      return new Promise((resolve,reject)=>{
        axios({
          method:'GET',
          url: `/easy-mock/getMostPopularPage`,
        }).then(res=>{
          resolve(res.data)
        })
      })
    },
    statisticalDataFifteen(){
      return new Promise((resolve,reject)=>{
        axios({
          method:'GET',
          url:`/easy-mock/getClientServerFailNumber`
        }).then(res=>{
          resolve(res.data)
        })
      })
    },


    trendDataOne(params){
      return new Promise((resolve,reject)=>{
        axios({
          method:'GET',
          url:`/easy-mock/getAllPv?type=${params.type}&detailDate=${params.detailDate}`
        }).then(res=>{
          resolve(res.data)
        })
      })
    },
  trendDataTwo(params){
    return new Promise((resolve,reject)=>{
      axios({
        method:'GET',
        url:`/easy-mock/getPagePv?type=${params.type}&detailDate=${params.detailDate}&page=${params.page}`
      }).then(res=>{
        resolve(res.data)
      })
    })
  },
  trendDataThree(params){
    return new Promise((resolve,reject)=>{
      axios({
        method:'GET',
        url:`/easy-mock/getClientFailPvNum?type=${params.type}&detailDate=${params.detailDate}`
      }).then(res=>{
        resolve(res.data)
      })
    })
  },
  trendDataFour(params){
    return new Promise((resolve,reject)=>{
      axios({
        method:'GET',
        url:`/easy-mock/getServiceFailPvNum?type=${params.type}&detailDate=${params.detailDate}`
      }).then(res=>{
        resolve(res.data)
      })
    })
  },
  trendDataFive(params){
    return new Promise((resolve,reject)=>{
      axios({
        method:'GET',
        url:`/easy-mock/getSpiderPvNum?type=${params.type}&detailDate=${params.detailDate}`
      }).then(res=>{
        resolve(res.data)
      })
    })
  },
}

export default actions;
