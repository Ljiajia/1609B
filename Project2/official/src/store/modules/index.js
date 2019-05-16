import { observable, action } from "mobx";

export default class Index{ 
    // 所有state用@observabel观察，一旦改变就会触发引用组件的更新
    @observable count;

    // 初始化
    constructor(){
        this.count = 1000;
    }

    // 所有行为用@action修饰，在这里修改state
    @action changeCount(type){
        type=='+'? this.count++: this.count--;
    }

    @action autoAdd() {
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                this.count++;
                resolve(this.count);
            }, 1000);
        })
    }
}   