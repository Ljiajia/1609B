import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

class IndexPage extends React.Component{
  componentDidMount(){
    this.props.fetchUser();
  }

  render(){
    return null;
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
