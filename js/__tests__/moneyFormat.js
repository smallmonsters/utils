import {moneyFormat} from "../src/moneyFormat";

describe('moneyFormat金钱格式化', () => {
  test('用例: 000', () => {
    expect(moneyFormat("000")).toBe("0")
  })
  test('用例: 0.0', () => {
    expect(moneyFormat("0.0")).toBe("0.0")
  })
  test('用例: -', () => {
    expect(moneyFormat("-")).toBe("")
  })
  test('用例: 1.567', () => {
    expect(moneyFormat("1.567")).toBe("1.56")
  })
  test('用例: 1.', () => {
    expect(moneyFormat("1.",0)).toBe("1")
  })
  test('用例: 1.1.2', () => {
    expect(moneyFormat("1.1.2")).toBe("1.1")
  })
  test('用例: 1.112.222', () => {
    expect(moneyFormat("1.112.222")).toBe("1.11")
  })
  test('用例:3-', () => {
    expect(moneyFormat("3-",0)).toBe("3")
  })
})
