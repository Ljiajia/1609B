// 定义自定义覆盖物的构造函数  
function SquareOverlay(center, length, color){
    this._center = center;
    his._length = length;
    this._color = color;
}
// 继承API的BMap.Overlay
SquareOverlay.prototype = new BMap.Overlay();