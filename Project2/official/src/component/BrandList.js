import React,{useState, useEffect} from 'react';
import {getBrandList} from '@/api/index';
import styles from './BrandList.scss';
import Img from '@/assets/1px.jpg';
import LazyLoad from '@/util/lazyLoad.js';

// import LazyLoad from '@/component/LazyLoad';

let BrandList = props=>{
    let [brandList, setBrandList] = useState([]);

    useEffect(()=>{
        getBrandList().then(res=>{
            let brandList = [];
            res.forEach(item=>{
                let letter = item.Spelling[0];
                let index = brandList.findIndex(value=>value.letter==letter);
                if (index == -1){
                    brandList.push({
                        letter,
                        list: [item]
                    })
                }else{
                    brandList[index].list.push(item);
                }
            })
            setBrandList(brandList);
            new LazyLoad('#wrap');
        })
    }, [])

    return <div id="wrap" className={styles.wrap}>{
        brandList.map((item, index)=>{
            return <div key={index}>
                <p>{item.letter}</p>
                <ul>{
                    item.list.map((value, key)=>{
                        return <li key={key}>
                            <img src={Img} data-src={value.CoverPhoto}/>
                            <span>{value.Name}</span>
                        </li>
                    })
                }</ul>
            </div>
        })
    }</div>;
}

// export default LazyLoad(BrandList)
export default BrandList;