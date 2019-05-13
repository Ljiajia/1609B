import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.scss';
import {uploadFile} from '../services/index';


class IndexPage extends React.Component{
  componentDidMount(){
    // this.props.fetchUser();
    this.uploadFile = this.uploadFile.bind(this);
  }

  uploadFile(type, cb){
    cb = function(res){
      console.log('res...', res);
    }
    uploadFile(type, cb);
  }

  render(){
    // return null;
    return <div>
      <p className="p1">第一个P标签</p>
      <p className={styles.p1}>第二个P标签</p>
      <p className="p3">第三个P标签</p>
      <p className="p4">第四个P标签</p>
      <button onClick={()=>this.uploadFile(0)}>拍照</button>
      <button onClick={()=>this.uploadFile(1)}>相册选择</button>
    </div>
  }
}

IndexPage.propTypes = {
};

const mapStateToProps = state=>{
  console.log('state...', state);
  return {

  }
}

const mapDispatchToProps = dispatch=>{
  return {
    fetchUser: ()=>{
      dispatch({
        type: 'example/fetch'
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
