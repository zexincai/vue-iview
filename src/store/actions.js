import { getAppName } from '@/api/app.js'
const actions = {
  async updateAppName ({ commit, dispatch }) {
    // getAppName().then(res => {
    //   const { info } = res
    //   commit('SET_APP_NAME', info)
    // }).catch(res => {
    //   console.log(res)
    // })
    try {
      const { info } = await getAppName()
      commit('SET_APP_NAME', info)
    } catch (error) {

    }
  }
}

export default actions
