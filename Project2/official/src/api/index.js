import request from '@/util/request';

// 获取车系详情
export let getSerialInfo = id=>{
    return request({
        url: `/v2-car-getInfoAndListById.html?SerialID=${id}`
    })
}