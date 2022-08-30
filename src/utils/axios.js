import Axios from 'axios'

import { ElMessage } from 'element-plus'
import router from '../router'
// const router = useRouter()

let baseURL
if (import.meta.env.ENV === 'development') {
  baseURL = import.meta.env.VITE_APP_APIBASE
} else if (import.meta.env.ENV === 'production') {
  baseURL = import.meta.env.VITE_APP_APIBASE
}
const axios = Axios.create({
  baseURL,
  timeout: 20000 // 请求超时 20s
})

// 前置拦截器（发起请求之前的拦截）
axios.interceptors.request.use(
  (response) => {
    /**
     * 根据你的项目实际情况来对 config 做处理
     * 这里对 config 不做任何处理，直接返回
     */
    const token = localStorage.getItem('token')
    if (token) {
      response.headers.Authorization = token
    }
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 后置拦截器（获取到响应时的拦截）
axios.interceptors.response.use(
  (response) => {
    /**
     * 根据你的项目实际情况来对 response 和 error 做处理
     * 这里对 response 和 error 不做任何处理，直接返回
     */
    const { code } = response.data
    if (code === 4003) {
      localStorage.removeItem('token')
      router.replace('/login')
      // this.$router.push('/login')
      // Notification.error({
      //     title: response.data.message
      //   })
    } else if (response.data.code === 4001) {
      ElMessage.error({
        title: response.data.message
      })
    }
    return response.data
  },
  (error) => {
    if (error.response && error.response.data) {
      const code = error.response.status
      const msg = error.response.data.message
      ElMessage.error(`Code: ${code}, Message: ${msg}`)
    } else {
      ElMessage.error(`${error}`)
    }
    return Promise.reject(error)
  }
)

export default axios
