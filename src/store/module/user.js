const state = {
  userName: 'Lison'
}

const getters = {
  firstLetter: (state) => {
    return state.userName.substr(0, 1)
  }
}
const mutations = {
  SET_USER_NAME (state, params) {
    state.userName = params
  }
}

const actions = {

}

export default {
  namespaced: true,
  getters,
  state,
  mutations,
  actions
}
