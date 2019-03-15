import axios from 'axios'

const actions={
    statisticalDataOne({commit},params){
      return new Promise((resolve,reject)=>{
        axios({
          method:'GET',
          url:`/api/reqMethodNum`
        }).then(res=>{
          resolve(res);
        })
      })
    },
    statisticalDataTwo({commit},params){
      return new Promise((resolve,reject)=>{
        axios({
          method:'GET',
          url: `/api/clientBrowserOs`,
        }).then(res=>{
          resolve(res)
        })
      })
    },
    statisticalDataThree({commit},params){
      return new Promise((resolve,reject)=>{
        axios({
          method:'GET',
          url: `/api/ipByProvinceNum`,
        }).then(res=>{
          resolve(res)
        })
      })
    },
    statisticalDataFour({commit},params){
      return new Promise((resolve,reject)=>{
        axios({
          method:'GET',
          url: `/api/httpStatusNum`,
        }).then(res=>{
          resolve(res)
        })
      })
    },
    statisticalDataFive({commit},type){
      return new Promise((resolve,reject)=>{
        axios({
          method:'GET',
          url: `/api/failLoadPageMost?type=${type}`,
        }).then(res=>{
          resolve(res)
        })
      })
    },
    statisticalDataSix({commit},params){
      return new Promise((resolve,reject)=>{
        axios({
          method:'GET',
          url: `/api/mostPopularPage`,
        }).then(res=>{
          resolve(res)
        })
      })
    },
    trendDataOne({commit},params){
      return new Promise((resolve,reject)=>{
        axios({
          method:'GET',
          url:`/api/pvNum?type=${params.type}&interval=${params.interval}`
        }).then(res=>{
          resolve(res)
        })
      })
    },
  trendDataTwo({commit},params){
    return new Promise((resolve,reject)=>{
      axios({
        method:'GET',
        url:`/api/pagePvNum?type=${params.type}&interval=${params.interval}&page=${params.page}`
      }).then(res=>{
        resolve(res)
      })
    })
  },
  trendDataThree({commit},params){
    return new Promise((resolve,reject)=>{
      axios({
        method:'GET',
        url:`/api/clientFailPvNum?type=${params.type}&interval=${params.interval}`
      }).then(res=>{
        resolve(res)
      })
    })
  },
  trendDataFour({commit},params){
    return new Promise((resolve,reject)=>{
      axios({
        method:'GET',
        url:`/api/serviceFailPvNum?type=${params.type}&interval=${params.interval}`
      }).then(res=>{
        resolve(res)
      })
    })
  },
  trendDataFive({commit},params){
    return new Promise((resolve,reject)=>{
      axios({
        method:'GET',
        url:`/api/spiderPvNum?type=${params.type}&interval=${params.interval}`
      }).then(res=>{
        resolve(res)
      })
    })
  },
}

export default actions;
