import React from 'react'


export default props=>{
    function goDetail(){
        props.history.push('/detail?id=2593');
    }
    return <button onClick={goDetail}>去奥迪A4L的详情页</button>
}