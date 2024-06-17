import {regexes} from "../../src/regexes";

describe('微信号验证', () => {
  test('用例: _1234567', () => {
    expect(regexes.wx.test("_1234567")).toBe(true)
  })
  test('用例: a1234567', () => {
    expect(regexes.wx.test("a1234567")).toBe(true)
  })
  test('用例: a_1234567-_', () => {
    expect(regexes.wx.test("a_1234567-_")).toBe(true)
  })
  test('用例: 1234567', () => {
    expect(regexes.wx.test("1234567")).toBe(false)
  })
  test('用例: a12.34567', () => {
    expect(regexes.wx.test("12.34567")).toBe(false)
  })
  test('用例: a17', () => {
    expect(regexes.wx.test("a17")).toBe(false)
  })
  test('用例: a123456712345671234567', () => {
    expect(regexes.wx.test("a123456712345671234567")).toBe(false)
  })
 
})
