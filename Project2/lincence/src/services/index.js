import JSBridge from '../utils/api-2.0';

export function uploadFile(type, cb){
  JSBridge.invoke('device', 'chooseImage', {
    type: type,
    chooseCallbackName: cb
  })
};
