import { createStore } from 'vuex'
import modile from './module/modile'
import getters from './getters'
export default createStore({
  getters,
  modules: {
    modile
  }
})
