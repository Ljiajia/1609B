import React, {useEffect} from 'react';

export default props=>{

    // 初始化地图
    useEffect(()=>{
        var BMap = window.BMap;
        // 显示一块地图
        var map = new BMap.Map("container");          // 创建地图实例  
      
        // ip地址定位
        function myFun(result){
            var cityName = result.name;
            map.setCenter(cityName);
            var point = new BMap.Point(result.center.lng, result.center.lat);  // 创建点坐标  
            map.centerAndZoom(point, 15);       
            map.enableScrollWheelZoom(true);

            // 创建标注对象并添加到地图   
            var marker = new BMap.Marker(point);  // 创建标注
            map.addOverlay(marker);               // 将标注添加到地图中
            marker.setAnimation(window.BMAP_ANIMATION_BOUNCE); //跳动的动画

            // 添加自定义图形
            var myIcon = new BMap.Icon("http://lbsyun.baidu.com/jsdemo/img/fox.gif", new BMap.Size(300,157));
            map.addOverlay(new BMap.Marker(point, {icon:myIcon}))
        }
        var myCity = new BMap.LocalCity();
        myCity.get(myFun);
        
        // 加个定位图片
        var myIcon = new BMap.Icon("/location.png", new BMap.Size(23, 25), {    
            // 指定定位位置。   
            // 当标注显示在地图上时，其所指向的地理位置距离图标左上    
            // 角各偏移10像素和25像素。您可以看到在本例中该位置即是   
            // 图标中央下端的尖角位置。    
            anchor: new BMap.Size(10, 25),    
            // 设置图片偏移。   
            // 当您需要从一幅较大的图片中截取某部分作为标注图标时，您   
            // 需要指定大图的偏移位置，此做法与css sprites技术类似。    
            // imageOffset: new BMap.Size(0, 0 - 1 * 25)   // 设置图片偏移    
        });     
        
        // 规划从八维去三元桥阿里巴巴面试公交路线
        // var driving = new BMap.TransitRoute(map, { 
        //     renderOptions: { 
        //         map: map, 
        //         autoViewport: true 
        // } 
        // });
        // var start = new BMap.Point(116.306744,40.047403);
        // var end = new BMap.Point(116.461337,39.963386);
        // driving.search(start, end);

        // 规划从八维去三亚旅游自驾路线
        var driving = new BMap.DrivingRoute(map, { 
            renderOptions: { 
                map: map, 
                autoViewport: true,
                panel: "result"
            }
        });
        var start = new BMap.Point(116.306744,40.047403);
        var end = new BMap.Point(109.359883,18.299107);
        driving.search(start, end);
    }, []);

    return <div>
        <div id="container" style={{width:'100%',height: '80%'}}></div>
        <div id="result" style={{width:'100%',height: '20%'}}></div>
    </div>
}