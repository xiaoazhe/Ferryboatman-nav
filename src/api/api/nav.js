import { request } from '@/api/service.js'

export function NAV_TYPE_LIST() {
  // 接口请求
  return request({
    url: `/nav/findAll`,
    method: 'post'
  })
}
