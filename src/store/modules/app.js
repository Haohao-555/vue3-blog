export default {
  namespaced: true,
  state: () => ({
    showAside: false
  }),
  mutations: {
    changeAsideShow (state, flag) {
      state.showAside = flag
    }
  }
}
