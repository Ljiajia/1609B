import React,{useState, useEffect} from 'react'
import {getSerialInfo} from '@/api/index'
import styles from './Index.scss'
import SortSerial from '@/component/SortSerial'


export default props=>{
    // 创建一个info状态管理state
    let [info, updateInfo] = useState({});
    // 创建一个years管理年份
    let [years, updateYears] = useState([]);
    // 创建一个list管理当前tab的车
    let [list, updateList] = useState([]);

    useEffect(()=>{
        console.log('props...', props)
        let id = props.location.search.split('=')[1];
        getSerialInfo(id).then(res=>{
            // console.log('res...', res);
            updateInfo(res);
            // 获取年份
            let years = res.list.map(item=>item.market_attribute.year);
            updateYears(['全部',...new Set(years)]);
            // 初始化list
            updateList(res.list);
        });
        return ()=>{
            // 返回的函数只有当组件销毁的时候才会触发
        }
    }, [])

    // 年份切换
    function changeYear(year){
        if (year == '全部'){
            updateList(info.list);
        }else{
            updateList(info.list.filter(item=>item.market_attribute.year==year));
        }
    }

    console.log('list...', list);
    return <div>
        <header>
            <div>
                <img src={info.CoverPhoto}/>
                <span>7924张照片</span>
            </div>
            <div>
                <div>
                    <p>21.14万-29.8万</p>
                    <p>指导价:</p>
                </div>
                <button>询问底价</button>
            </div>
        </header>
            <div>{
                years.map((item, index)=>{
                    return <span key={index} onClick={()=>changeYear(item)}>{item}</span>
                })
            }</div>
            <SortSerial list={list}/>
        <section>

        </section>
    </div>
}