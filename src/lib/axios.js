import axios from 'axios'
import { baseURL } from '@/config'
class HttpRequset {
  constructor(baseUrl = baseURL) {
    this.baseUrl = baseUrl
    this.queue = {}
  }
  getInsideConfig() {
    return {
      baseURL: this.baseUrl,
      headers: {}
    }
  }
  interceptors(instance) {
    instance.interceptors.request.use(config => {
      console.log(config)
      config.headers['X-Request-with'] = 'app-vs'
      return config
    }, err => {
      return Promise.reject(err)
    })
    instance.interceptors.response.use(res => {
      console.log(res)
      const { data, status } = res
      return { data, status }
    }, err => {
      return Promise.reject(err)
    })
  }
  request(options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance)
    return instance(options)
  }
}

export default HttpRequset
