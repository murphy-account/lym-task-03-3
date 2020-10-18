/***
 * 基于axios封装的请求模块
 */

 import axios from 'axios'

 const request = axios.create({
     baseURL:'https://conduit.productionready.io'
 })

 // 请求拦截器,任何请求都要经过拦截器，这里做一些公共的业务处理，例如统一设置token
//  // Add a request interceptor
// request.interceptors.request.use(function (config) {
//     // Do something before request is sent
//     // 正确的话，请求会经过这里
//     config.headers.Authorization = `Token 用户token`
//     // 返回config请求配置对象
//     return config;
//   }, function (error) {
//       // 如果请求失败，此时请求没有发出去，就会进入这里
//     // Do something with request error
//     return Promise.reject(error);
//   });
 // 响应拦截器
 export default request