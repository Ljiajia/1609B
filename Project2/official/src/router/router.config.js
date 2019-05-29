
import Loadable from 'react-loadable';
// import Loading from './my-loading-component';
 
const Home = Loadable({
  loader: () => import('@/views/Home/Index'),
  loading: ()=>null
});
const Detail = Loadable({
    loader: () => import('@/views/Detail/Index'),
    loading: ()=>null
});
// 引入首页
// import Home from '@/views/Home/Index'
// import Detail from '@/views/Detail/Index'

export default {
    routes: [{
        path: '/home',
        component: Home
    }, {
        path: '/detail',
        component: Detail
    }, {
        path: '*',
        redirect: '/home'
    }]
}