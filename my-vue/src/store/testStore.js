export default {
  namespaced: true,
  state: {
    count: 0,
    arr: [1, 2]
  },
  mutations: {
    changeCount(state) {
      state.count++
    }
  },
  actions: {
    handleCount(ctx) {

    }
  }
}