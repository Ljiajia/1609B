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
