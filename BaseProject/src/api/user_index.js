// 1。引入封装好的axios
import axios from '@/utils/myaxios.js'

// 1.获取所有用户数据
export const getAllUsers = (params) => {
  return axios({
    url: 'users',
    params
  })
}
// 数据添加
export const addUser = (data) => {
  return axios({
    url: 'users',
    method: 'post',
    data
  })
}
// 数据编辑
export const editUser = (data) => {
  return axios({
    url: `users/${data.id}`,
    method: 'put',
    data
  })
}

// 4.实现用户角色的分配
export const grantUserRole = (data) => {
  return axios({
    url: `users/${data.id}/role`,
    method: 'put',
    data: { rid: data.rid }
  })
}

// 6.实现用户状态设置
export const updateUserState = (uid, type) => {
  return axios({
    url: `users/${uid}/state/${type}`,
    method: 'put'
  })
}

// 5.实现用户数据的删除
export const delUserById = (id) => {
  return axios({
    url: `users/${id}`,
    method: 'delete'
  })
}

