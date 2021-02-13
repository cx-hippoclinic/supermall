import axios from 'axios'
export function request(config) {
//  定义回调函数
//   const instance1 = axios.create({
//     baseURL:'http://152.136.185.210:8000/api/z8',
//     timeout:5000
//   })
//   instance1(config.url).
//     then(res => {
//       config.success(res)
//   }).catch(err => {
//     config.failure(err)
//   })
  const instance1 = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/w6',
    timeout: 5000
  })
  return instance1(config)
}
// 自己封装promise

/*
  return new Promise((resolve,reject) => {
    const instance1 = axios.create({
      baseURL:'http://152.136.185.210:8000/api/z8',
      timeout:5000
    })
    instance1(config)
    .then(res=>{
    resolve(res);
    }).catch(err =>{
    reject(err)
    })
  })
}*/
