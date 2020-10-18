import {request} from '@/plugins/request'

//标签liebiao
export const getTags = data =>{
    return request({
        method:'GET',
        url:'/api/tags',
        data
    })
}