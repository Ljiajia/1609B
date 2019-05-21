import axios from 'axios'

// create an axios instance
const service = axios.create({
  baseURL: 'http://baojia.chelun.com',
  // withCredentials: true, // 跨域请求时发送 cookies
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
   response => {
    const res = response.data
    if (res.code == 1){
        return res.data;
    }else{
        alert(res.msg);
    }
    return res;
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
