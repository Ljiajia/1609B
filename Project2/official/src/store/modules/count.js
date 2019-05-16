import { observable, action } from "mobx";

export default class Count{ 
    @observable count;

    // 初始化
    constructor(){
        this.count = 1000;
    }

    // @action changeCount(type){
    //     type=='+'? this.count++: this.count--;
    // }

    delay(){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve();
            }, 5000);
        })
    }

    @action async autoAdd() {
        await this.delay();
        this.count += 2;
    }
}   