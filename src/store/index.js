import { createStore } from 'vuex'
import app from './modules/app'
import theme from './modules/theme'
import getters from './getters'
export default createStore({
  getters,
  modules: {
    app,
    theme
  }
})
