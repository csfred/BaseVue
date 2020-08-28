// 1。引入封装好的axios
import axios from '@/utils/myaxios.js'

// 1.获取所有用户数据
export const getAllRoleList = () => {
  return axios({
    url: 'roles'
  })
}
