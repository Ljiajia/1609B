import React from 'react'
// 引入品牌组件
import BrandList from '@/component/BrandList'

// export default props=>{
//     function goDetail(){
//         props.history.push('/detail?id=4597');
//     }
//     return <div style={{height: '100%'}}>
//         <BrandList/>
//         <button onClick={goDetail}>去奥迪A4L的详情页</button>    
//     </div>
// }


export default class Home extends React.PureComponent{
    constructor(){
        super();
        this.state = {
            list: []
        }
    }

    goDetail(){
        this.props.history.push('/detail?id=4597');
    }

    componentDidMount(){
        setInterval(()=>{
            this.state.list.push(this.state.list.length+1)
            this.setState({
                list: this.state.list
            })
        }, 1000);
    }

    render(){
        return <div style={{height: '100%'}}>
            {this.state.list.length}
            <BrandList/>
            <button onClick={()=>this.goDetail()}>去奥迪A4L的详情页</button>    
        </div>
    }
}