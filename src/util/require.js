// 请求封装
import axios from 'axios'
const service = axios.create({
  baseURL: '/vue3-blogapi'
})
// 请求接口拦截
service.interceptors.request.use(
  config => {
    return config
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    const { errno, data } = response.data
    if (errno === 0) {
      return Promise.resolve(data)
    } else {
      return Promise.reject(errno)
    }
  },
  error => {
    return Promise.reject(error)
  }
)
export default service
