import request from '../utils/request';

export function query() {
  return request('/api/users');
}

// 获取用户列表
export async function fetchUser(){
  let data = await request('/api/users')
  return data
}
