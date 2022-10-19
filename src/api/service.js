import axios from 'axios'
import { get } from 'lodash'
import router from '@/router'

/**
 * @description 创建请求实例
 */
function createService() {
  // 创建一个 axios 实例
  const service = axios.create()
  // 请求拦截
  service.interceptors.request.use(
    config => config,
    error => {
      // 发送失败
      console.log(error)
      return Promise.reject(error)
    }
  )

  function errorCreate(error) {
    // 打印到控制台
    if (process.env.NODE_ENV === 'development') {
      console.log(error)
    }
    // 显示提示
    // eslint-disable-next-line no-undef
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
  }

  // 响应拦截
  service.interceptors.response.use(
    response => {
      // dataAxios 是 axios 返回数据中的 data
      const dataAxios = response.data
      // 这个状态码是和后端约定的
      const { code } = dataAxios
      // 根据 code 进行判断
      if (code === undefined) {
        // 如果没有 code 代表这不是项目后端开发的接口 比如可能是 D2Admin 请求最新版本
        return dataAxios
      } else {
        // 有 code 代表这是一个后端接口 可以进行进一步的判断
        switch (code) {
          case 200:
            // [ 示例 ] code === 0 代表没有错误
            return dataAxios.data
          case 500:
            // [ 示例 ] 其它和后台约定的 code
            errorCreate(`[ code: 500 ] ${dataAxios.msg}: ${response.config.url}`)
            break
          case 400:
            // [ 示例 ] 其它和后台约定的 code
            errorCreate(`[ code: 400 ] ${dataAxios.message}: ${response.config.url}`)
            break
          case 403:
            // [ 示例 ] 其它和后台约定的 code
            errorCreate(`[ code: 403 ] ${dataAxios.message}: ${response.config.url}`)
            break
          case 501:
            // [ 示例 ] 其它和后台约定的 code
            errorCreate(`[ code: 501 ] ${dataAxios.msg}: ${response.config.url}`)
            break
          case 502:
            // [ 示例 ] 其它和后台约定的 code
            errorCreate(`[ code: 502 ] ${dataAxios.msg}: ${response.config.url}`)
            break
          case 503:
            // [ 示例 ] 其它和后台约定的 code
            errorCreate(`[ code: 503 ] ${dataAxios.msg}: ${response.config.url}`)
            break
          case 504:
            // [ 示例 ] 其它和后台约定的 code
            errorCreate(`[ code: 504 ] ${dataAxios.msg}: ${response.config.url}`)
            break
          case 505:
            // [ 示例 ] 其它和后台约定的 code
            errorCreate(`[ code: 505 ] ${dataAxios.msg}: ${response.config.url}`)
            break
          default:
            // 不是正确的 code
            errorCreate(`${dataAxios.msg}: ${response.config.url}`)
            break
        }
      }
    },
    error => {
      const status = get(error, 'response.status')
      switch (status) {
        case 400:
          error.message = '请求错误'
          break
        case 401:
          error.message = '未授权，请登录'
          break
        case 403:
          error.message = '无权限，重新登录'
          router.push({ name: 'login' })
          break
        case 404:
          error.message = `请求地址出错: ${error.response.config.url}`
          // eslint-disable-next-line no-fallthrough
        case 408:
          error.message = '请求超时'
          break
        case 500:
          error.message = '服务器内部错误'
          break
        case 501:
          error.message = '服务未实现'
          break
        case 502:
          error.message = '网关错误'
          break
        case 503:
          error.message = '服务不可用'
          break
        case 504:
          error.message = '网关超时'
          break
        case 505:
          error.message = 'HTTP版本不受支持'
          break
        default:
          break
      }
      return Promise.reject(error)
    }
  )
  return service
}

/**
 * @description 创建请求方法
 * @param {Object} service axios 实例
 */
function createRequestFunction(service) {
  return function(config) {
    // const token = util.cookies.get('token')
    const configDefault = {
      headers: {
        // Authorization: token,
        'Content-Type': get(config, 'headers.Content-Type', 'application/json')
      },
      timeout: 10000,
      baseURL: 'http://121.5.129.126:8010',
      data: {}
    }
    return service(Object.assign(configDefault, config))
  }
}

// 用于真实网络请求的实例和请求方法
export const service = createService()
export const request = createRequestFunction(service)

// 用于模拟网络请求的实例和请求方法
export const serviceForMock = createService()
export const requestForMock = createRequestFunction(serviceForMock)

