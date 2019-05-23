import request from '@/util/request';

// 获取品牌数据
export let getBrandList = ()=>{
    return request({
        url: '/v2-car-getMasterBrandList.html'
    })
}
// 获取车系详情
export let getSerialInfo = id=>{
    return request({
        url: `/v2-car-getInfoAndListById.html?SerialID=${id}`
    })
}