import axios from "axios";

// 封装axios构造函数请求 
// 1.先是自定义一个方法名
// 2.然后获取头部token值
// 3.延长器设不设置都可以
const instance = axios.create({
  baseURL: 'https://devapi.qweather.com',
  headers: {
    // X-Litemall-Token这个名称就固定这个
    'X-Litemall-Token' : localStorage.getItem("X-Litemall-Token")
  }
})
  
// 请求拦截器
// 1.请求拦截器，在发请求之前，请求拦截器可以检测到发起请求之前需要做什么事情，把需要做的事情，放在请求拦截器之前
axios.interceptors.request.use(config => {
  // 1.这里我设置了，在请求之前，先开始进度条的动画
  // 2.返回请求数据
  if(localStorage.setItem['X-Litemall-Token'] !== null ) {
    console.headers.common['X-Litemall-Token'] = localStorage.getItem('X-Litemall-Token')
  }
  return config
 
})
// 响应拦截器
// 1.相应上面的请求拦截器的需求
// 2.把上面的请求拦截器的需求全部做到
axios.interceptors.response.use(res => {
  return res.data
}, () => {
  return Promise.reject(new Error('faile'))
})

// 对外暴露前面创建的构造方法
export default instance
