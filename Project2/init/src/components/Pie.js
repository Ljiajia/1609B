import React, {useState, useEffect} from 'react';
import Echart from 'echarts';

export default props=>{
    
    useEffect(()=>{ 
        // 1.初始化echart实例
        let myChart = Echart.init(document.querySelector('#main'));
        
        // 2.组装数据
        let option =   {
            angleAxis: {
                type: 'category',
                data: ['其他资产', '房产', '交替运输工具', '土地使用权', '设备'],
                z: 10
            },
            tooltip: {
                trigger: 'item',
                // formatter: "{b} <br/>成交总数: {c}"
                formatter: params=>{
                    switch(params.data.name){
                        case '其他资产': return `其他资产 <br/>成交宗数:347宗`; break;
                        case '房产': return `房产 <br/>成交宗数:399宗`; break;
                        case '交替运输工具': return `交替运输工具 <br/>成交宗数:704宗`; break;
                        case '土地使用权': return `土地使用权 <br/>成交宗数:3宗`; break;
                        case '设备': return `设备 <br/>成交宗数:85宗`; break;
                        default: return ''
                    }
                }
            },
            radiusAxis: {
              
            },
            polar: {
            },
            color: ['#45ADE6', '#F78522'],
            series: [{
                name: 'A',
                stack: 'a',
                type: 'bar',
                data: [{
                    name: '其他资产',
                    value: 11
                }, {
                    name: '房产',
                    value: 12
                },{
                    name: '交替运输工具',
                    value: 11
                },{
                    name: '',
                    value: 0
                },{
                    name: '',
                    value: 0
                }],
                coordinateSystem: 'polar',
                animation: false,
                label: {
                    show: true,
                    normal: {
                        position: 'inner'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                }
            },{
                name: 'B',
                stack: 'a',
                type: 'bar',
                data: [{
                    name: '347宗',
                    value: 0
                }, {
                    name: '399宗',
                    value: 0
                },{
                    name: '704宗',
                    value: 0
                },{
                    name: '土地使用权',
                    value: 6
                },{
                    name: '设备',
                    value: 10
                }],
                coordinateSystem: 'polar',
                animation: false
            }]
        };
        

        // 3.更新echart
        myChart.setOption(option);
    }, []);
    return <div>
        <div id="main" style={{width: '100%',height:'80vw'}}></div>
    </div>
}