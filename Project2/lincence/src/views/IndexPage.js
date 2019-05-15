import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.scss';
import {uploadFile, takeCertificatePicture, doLogin, pay, share} from '../services/index';
import {isLogin} from '@/utils/index';

class IndexPage extends React.Component{
  constructor(){
    super();
    this.state = {
      isLogin: isLogin()
    }
    this.uploadFile = this.uploadFile.bind(this);
  }

  componentDidMount(){
    // this.props.fetchUser();
    // 插入客服代码
 // 插入客服代码
    (function (a, h, c, b, f, g) {
      a["UdeskApiObject"] = f;
      a[f] = a[f] || function () {
        (a[f].d = a[f].d || []).push(arguments)
      };
      g = h.createElement(c);
      g.async = 1;
      g.src = b;
      c = h.getElementsByTagName(c)[0];
      c.parentNode.insertBefore(g, c)
    })(window, document, "script", "//weizhang.udesk.cn/im_client/js/udeskApi.js?_t=1475044663008", "ud");
    window.ud({
      code: "gigdb0a",
      targetSelector: "#cc",
      link: "//weizhang.udesk.cn/im_client",
      "isInvite": true,
      "mode": "inner",
      "color": "#307AE8",
      "pos_flag": "crb",
      "language": "en-us", //语言-英文
      "onlineText": "联系客服，在线咨询",
      "offlineText": "客服下班，请留言",
      "mobile": { //为响应式布局，提供pc、mobile自定制
        "mode": "blank",
        "color": "#307AE8",
        "pos_flag": "crb",
        "onlineText": "联系客服，在线咨询",
        "offlineText": "客服下班，请留言",
        "pop": {
            "direction": "top",
            "arrow": {
                "top": 0,
                "left": "70%"
            }
        }
      }
    });
  }

  uploadFile(type, cb){
    cb = function(res){
      console.log('res...', res);
    }
    uploadFile(type, cb);
  }

  takeCertificatePicture(){
    takeCertificatePicture(res=>{
      console.log('rs...', res);
    })
  }

  doLogin(){
    doLogin(res=>{
      console.log('login res...', res);
      window.location.reload();
    })
  }

  pay(channel){
    pay(channel, res=>{
      console.log('pay res...', res);
    })
  }

  // 分享到朋友圈
  shareTimeline(){
    window['CHELUN_SHARE_DATA_WXTIMELINE'] = {
      // imgUrl: 'https://github.githubassets.com/favicon.ico', //分享图标
      imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558510705&di=8dbb8ec626653e27233146eaaa37a2aa&imgtype=jpg&er=1&src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201205%2F03%2F01400598djmyeczcskh2yr.jpg',
      title: '分享标题',  //标题
      link: 'http://www.baidu.com', //链接
      type: 'photo'
    };
    share('wxTimeline');
  }

  // 分享到微信好友
  shareWxMessage(){
    window['CHELUN_SHARE_DATA_WXMESSAGE'] = {
      imgUrl: 'https://github.githubassets.com/favicon.ico', //分享图标
      title: '分享到好友',  //标题
      desc: '分享描述分享描述分享描述分享描述分享描述分享描述分享描述分享描述',
      link: 'https://github.com/', //链接
      // type: 'photo'
    };
    share('wxMessage');
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

      <button onClick={()=>this.takeCertificatePicture()}>拍摄身份证</button>

      <button onClick={()=>this.doLogin()}>{this.state.isLogin?'已登陆':'未登陆'}</button>

      <button onClick={()=>this.pay('weixin')}>微信支付</button>

      <button onClick={()=>this.pay('alipay')}>支付宝支付</button>

      <button id="cc">唤起客服</button>

      <button onClick={()=>this.shareTimeline()}>分享到微信朋友圈</button>

      <button onClick={()=>this.shareWxMessage()}>分享到微信好友</button>

      <a href="./problem.html">常见问题</a>
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
