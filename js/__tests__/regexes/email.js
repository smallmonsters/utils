import {moneyFormat} from "../../src/moneyFormat";
import {regexes} from "../../src/regexes";

describe('输入正确的邮箱邮箱', () => {
  test('用例: 13657618888@163.com', () => {
    expect(regexes.email.test("13657618888@163.com")).toBe(true)
  })
  test('用例: 1365_07618888@163.com', () => {
    expect(regexes.email.test("13657618888@163.com")).toBe(true)
  })
  test('用例: 1365_07618888@qq.com', () => {
    expect(regexes.email.test("13657618888@qq.com")).toBe(true)
  })
  test('用例: lasjflka@gmail.com', () => {
    expect(regexes.email.test("13657618888@qq.com")).toBe(true)
  })
  test('用例: 13657618888@163.', () => {
    expect(regexes.email.test("13657618888@163.")).toBe(false)
  })
  test('用例: 1365_07618888@163.', () => {
    expect(regexes.email.test("13657618888@163.")).toBe(false)
  })

})
