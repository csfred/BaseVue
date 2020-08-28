import axios from 'axios'

// 设置基准路径
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'
// 添加请求拦截器
// 拦截器的本质并不是发起请求,而是对请求报文进行处理
axios.interceptors.request.use(function (config) {
// 在发送请求之前先获取token,设置请求头
// 1.获取token
  let mytoken = localStorage.getItem('itcast_manager_35_token')
  if (mytoken) {
    // 2.设置请求头:config.headers是一个对象.里面包含着当前请求头的设置
    //  console.log(config)
    config.headers.Authorization = mytoken
  }
  return config
}, function (error) {
// 请求错误是要做什么
// Promise.reject(error) :中止本次请求
  return Promise.reject(error)
})
// 返回一个默认对象,这种默认对象在被其他文件引入时只会返回一个默认对象,不再使用{}解析接受
// 在这个文件中只是对axios进行加工,其他文件所需要的是整个axios对象,所以输出整个axios对象
export default axios
