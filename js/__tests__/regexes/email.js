import {regexes} from "../../src/regexes";

const testBaseData = [
  {arg: "13657618888@163.com", res: true, msg: '用例: 13657618888@163.com'},
  {arg: "1365_07618888@qq.com", res: true, msg: '用例: 1365_07618888@qq.com'},
  {arg: "lasjflka@gmail.com", res: true, msg: '用例: lasjflka@gmail.com'},
  {arg: "13657618888@163.", res: false, msg: '用例: 1365_07618888@163.'},
  {arg: "13657618888@163123comhk", res: false, msg: '用例: 13657618888@163123comhk'},
  {arg: "13657618888@.com", res: false, msg: '用例: 113657618888@.com'},
]

describe.each([
  ...testBaseData,
  {arg: "13657618888@163.cn123", res: true, msg: '用例: 13657618888@163.cn123'},
  {arg: "13657618888@163.123.com", res: true, msg: '用例: 13657618888@163.123.com'},
  {arg: "13657618888@163.123.com.hk", res: true, msg: '用例: 13657618888@163.123.com.hk'},
  
])('不以com结尾输入正确的邮箱邮箱', ({arg, res, msg}) => {
  test(msg, () => {
    expect(regexes.email.test(arg)).toBe(res)
  })
})

describe.each([
  ...testBaseData,
  {arg: "13657618888@163.cn123", res: false, msg: '用例: 13657618888@163.cn123'},
  {arg: "13657618888@163.123.com", res: true, msg: '用例: 13657618888@163.123.com'},
  
])('以com结尾输入正确的邮箱邮箱', ({arg, res, msg}) => {
  test(msg, () => {
    expect(regexes.emailEndWithCom.test(arg)).toBe(res)
  })
})
