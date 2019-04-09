import axios from './index'

export const getUserInfo = ({ userId }) => {
  return axios.request(
    {
      url: '/getUseInfo',
      method: 'post',
      data: {
        userId
      }
    }
  )
}
