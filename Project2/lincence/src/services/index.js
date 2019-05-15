import JSBridge from '../utils/api-2.0';



// 唤起登陆
export function doLogin(cb){
  JSBridge.invoke('app', 'login', {
    loginCallBackName: cb
  })
};


// 图片上传
export function uploadFile(type, cb){
  JSBridge.invoke('device', 'chooseImage', {
    type: type,
    chooseCallbackName: cb
  })
};

// 身份证正面拍照
export function takeCertificatePicture(cb){
  JSBridge.invoke('device', 'takeCertificatePicture', {
    type: 2,
    isFront:1,
    takeCertificateCallBackName: cb
  })
};


// 调起客户端支付
export function pay(channels, cb){
  JSBridge.invoke('app', 'pay', {
    price: '398.00',
    orderNum: '6534241179423946753',
    serial_number: '6534241179423946753',
    channels,
    callbackUrl: 'http://www.baidu.com',
    payCallback: cb
  })
}


// 调起微信分享
export function share(to){
  JSBridge.invoke('ui', 'shareMessage', {
    to
  })
}
