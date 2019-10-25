import axios from 'axios'
// 设置基地址和超时
let options = {
  baseURL: 'http://localhost:3301',
  timeout: 5000
}
//导出axios实例,并把设置项传递过去
export default axios.create(options)
