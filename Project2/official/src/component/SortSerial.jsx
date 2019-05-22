import React from 'react';

export default props=>{
    // 给车型排序
    props.list.sort((a, b)=>{
        // 排量升序
        if (a.exhaust != b.exhaust){
            return a.exhaust - b.exhaust
        }else{
            // 发动机功率升序
            if (a.max_power != b.max_power){
                return a.max_power - b.max_power
            }else{
                // 吸气方式
                if (a.inhale_type != b.inhale_type){
                    if (a.inhale_type < b.inhale_type){
                        return -1;
                    }else{
                        return 1;
                    }
                }else{
                    // 年份降序
                    return b.market_attribute.year - a.market_attribute.year
                }
            }
        }
    })
    console.log('props...', props.list);
    // 拼接车型参数
    props.list.forEach(item=>{
        item.type = `${item.exhaust_str}/${item.max_power_str} ${item.inhale_type}`
    })

    // 合并参数相同的车型
    let newList = [];

    // [{
    //     type: '',
    //     list: []
    // }]
    props.list.forEach(item=>{
        let index = newList.findIndex(value=>value.type == item.type);
        if (index == -1){
            newList.push({
                type: item.type,
                list: [item]
            })
        }else{
            newList[index].list.push(item);
        }
    })

    console.log('newList...', newList);
    return <div>{
        newList.map((item, index)=>{
            return <div key={index}>
                <p>{item.type}</p>
                <ul>{
                    item.list.map((value, key)=>{
                        return <li key={key}>
                            <p>{`${value.market_attribute.year}款 ${value.car_name}`}</p>
                            <p>{`${value.horse_power}马力${value.gear_num}档${value.trans_type}`}</p>
                            <p>{`指导价${value.market_attribute.official_refer_price} ${value.market_attribute.dealer_price_min}起`}</p>
                            <button>询问底价</button>
                        </li>
                    })
                }</ul>
            </div>
        })
    }</div>
}