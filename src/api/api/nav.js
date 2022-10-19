import { request } from '@/api/service.js'

export function NAV_TYPE_LIST() {
  // 接口请求
  return request({
    url: `/web/nav/findAll`,
    method: 'post'
  })
}

export function NAV_LINK_LIST(data) {
  // 接口请求
  return request({
    url: `/link/findPage`,
    method: 'post',
    data
  })
}
