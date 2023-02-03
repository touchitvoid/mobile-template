import axios from "axios"
import { showToast } from "vant"

const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 50000
})

request.interceptors.request.use(config => {
  config.headers['CLIENT-TOKEN'] = localStorage.getItem('PACKET_TOKEN');
  config.headers['Client-Plat'] = 'xxqy'
  return config
})

request.interceptors.response.use(result => {
  const data = result.data
  if (data.code) {
    showToast(data.msg)
    return Promise.reject(data.msg)
  }
  return data
})

export default request
