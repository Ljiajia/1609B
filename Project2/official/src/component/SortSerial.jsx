import React from 'react';

export default props=>{
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

    return null
}