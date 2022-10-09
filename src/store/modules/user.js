import {
  getToken,
  setToken,
  removeToken
} from '@/utils/token'
import {
  resetRouter
} from '@/router'

const getDefaultState = () => {
  return {
    token: getToken(),
    userinfo: {}
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_USER_INFO: (state, userinfo) => {
    state.userinfo = userinfo
  }
}

const actions = {
  // user login
  login({
    commit
  }, userInfo) {
    const {
      username,
      password
    } = userInfo
    return new Promise((resolve, reject) => {
      if (username === 'admin' && password === '123456') {
        commit('SET_TOKEN', 'DSsdsdsdsdsdsdsdsdsdsdsdsdsdsdFgdfg')
        setToken('DSsdsdsdsdsdsdsdsdsdsdsdsdsdsdFgdfg')
        resolve()
      } else {
        // eslint-disable-next-line no-undef
        reject(error)
      }
    })
  },
  resetToken({
    commit
  }) {
    return new Promise(resolve => {
      removeToken()
      resetRouter()
      commit('RESET_STATE')
      commit('permission/RESET_ROUTES', '', {
        root: true
      })
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
