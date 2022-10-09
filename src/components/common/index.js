import FmNav from './FmNav'
import FmNavItem from './FmNavItem'

const component = {
  install: function(Vue) {
    Vue.component('FmNav', FmNav)
    Vue.component('FmNavItem', FmNavItem)
  }
}
export default component
