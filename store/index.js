const cookieparser = process.server ? require('cookieparser') : undefined
//这里用函数返回数据对象是防止数据冲突，和vue中data的return一个对象是一个意思
export const state = () =>{
    return {
        //当前登录用户的登录状态
        user:null
    }
}

export const mutations = {
    setUser(state,data){
        state.user = data
    }
}

export const actions = {
    //这个方法会在服务端渲染期间自动调用
    nuxtServerInit({commit},{req}){
        let user = null 
        //如果请求头中有cookie
        if(req.headers.cookie){
            // 这个cookieparser作用是把cookie字符串转为js对象
            const parsed = cookieparser.parse(req.headers.cookie)
            try{
                user = JSON.parse(parsed.user)
            } catch (err){
                // No valid cookie found
            }
        }

        //提交mutation修改state状态
        commit('setUser',user)
    }
}