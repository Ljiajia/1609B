import React from 'react'

export default Component=>{
    return class extends React.Component{
        scroll(e){
            console.log('e...', e);
        }

        componentDidMount(){
            console.log('this.scrollRef...', this.scrollRef);
        }

        render(){
            return <div>
                <Component {...this.props} ref={scroll=>this.scrollRef=scroll} onScroll={e=>this.scroll(e)}></Component>
            </div>
        }
    }
}