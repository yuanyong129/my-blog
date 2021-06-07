const state = {
  isCollapsed: false
}

const mutations = {
  SET_COLLAPSED: (state, val) => {
    state.isCollapsed = val
  }
}

const actions = {
  setCollapsed({ commit }, val) {
    commit('SET_COLLAPSED', val)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}