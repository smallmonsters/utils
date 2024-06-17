// 一些常用正则
export const regexes = {
  integerAndZero: /^-?\d+$/, //正、负和零
  email:/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, //邮箱，不以com结尾
  emailEndWithCom: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*\.com$/, //邮箱，以com结尾
  wx: /^[a-zA-Z_][\w-]{5,19}$/, //微信号验证: 微信账号必须以字母或下划线开头，并且可以包含数字、字母、下划线、减号，总长度在6到20位之间
}
