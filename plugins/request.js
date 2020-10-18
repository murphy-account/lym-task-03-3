/***
 * 基于axios封装的请求模块
 */

import axios from 'axios'
// 创建请求对象
export const request = axios.create({
    baseURL: 'https://conduit.productionready.io'
})
// 通过插件机制获取到上下文对象比如store，然后导出
export default ({store}) => {
    // console.log(context)
    // 请求拦截器,任何请求都要经过拦截器，这里做一些公共的业务处理，例如统一设置token
    // Add a request interceptor
    request.interceptors.request.use(function (config) {
        // Do something before request is sent
        // 正确的话，请求会经过这里
        console.log('经过了请求拦截器')
        const {user} = store.state
        if(user && user.token){
            config.headers.Authorization = `Token ${user.token}`
        }
        // 返回config请求配置对象
        return config;
    }, function (error) {
        // 如果请求失败，此时请求没有发出去，就会进入这里
        // Do something with request error
        return Promise.reject(error);
    });

}
