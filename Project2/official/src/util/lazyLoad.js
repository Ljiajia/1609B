export default function LazyLoad(selector){
    this.scrollEle = document.querySelector(selector);

    // 使用防抖
    let scroll = this.debounce(this.scroll.bind(this), 300);
    this.scrollEle.addEventListener('scroll', ()=>scroll());
    // 初次渲染
    scroll();
}

LazyLoad.prototype.scroll = function(){
    let imgs = [...this.scrollEle.querySelectorAll('img[data-src]')];
    imgs.forEach(item=>{
        if (item.src == item.dataset.src){
            return;
        }
        let rect = item.getBoundingClientRect();
        if (rect.top >=0 && rect.top <= window.innerHeight && rect.left >= 0 && rect.right >= 0){
            item.src = item.dataset.src;
        }
    })
}

LazyLoad.prototype.debounce = function(func, delay){
    let time = 0;

    return function(){
        clearTimeout(time);
        time = setTimeout(()=>{
            func();
        }, delay)
    }
}