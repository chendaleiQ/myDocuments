import axios from 'axios'
import { showMessage } from '@/utils'
const ins = axios.create() //创建axios实例
ins.interceptors.response.use(function(resp) {
  if (resp.data.code !== 0) {
    showMessage({
      content: 'fashengcuowu',
      duration: 2000,
      type: 'error',
    })
    return null
  }
  return resp.data.data
})

export default ins
