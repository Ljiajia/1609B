import React from 'react';
import './App.css';
import { inject, observer } from 'mobx-react';
import WithLoading from '@/component/WithLoading.js';

// 获取根组件注入的数据，如果有多个，把模块的名字追加在后面
// export default
@inject('count', 'index')
@observer
@WithLoading
class App extends React.Component{
  constructor(){
    super();
    this.state = {
      loading: true,
    }

    setInterval(()=>{
      this.setState({
        loading: !this.state.loading
      });
    }, 1000);
  }

  render(){
    console.log('this.props...', this.props);
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={()=>this.props.count.autoAdd()}>+</button>
          <p>{this.props.count.count}</p>
          <button>-</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}


// export default WithLoading(App);
export default App;
