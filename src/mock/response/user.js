import Mock from 'mockjs'

const Random = Mock.Random

export const getUserInfo = (options) => {
  const template = {
    'str|2-4': 'lison',
    'name|5': 'lison',
    'age|+2': 18,
    'num|4-10': 0,
    'float|4-10.2-5': 0,
    'bool|1': true,
    'bool2|1-9': true,
    'obj|2': {
      a: 'aa',
      b: 'bb'
    },
    'func': () => {
      return 'hahah'
    },
    'reg': /[1-9][a-z]/,
    // 'email': Random.email()
    'email': Mock.mock('@color')
  }
  return Mock.mock(template)
}
