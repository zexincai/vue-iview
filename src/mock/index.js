import Mock from 'mockjs'
import { getUserInfo } from './response/user'

Mock.mock(/\/getUseInfo/, 'post', getUserInfo)

Mock.setup({
  timeout: 1000
})
export default Mock
