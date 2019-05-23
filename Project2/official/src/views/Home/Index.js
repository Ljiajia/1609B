import React from 'react'
// 引入品牌组件
import BrandList from '@/component/BrandList'

export default props=>{
    function goDetail(){
        props.history.push('/detail?id=4597');
    }
    return <div style={{height: '100%'}}>
        <BrandList/>
        <button onClick={goDetail}>去奥迪A4L的详情页</button>    
    </div>
}