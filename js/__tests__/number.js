import {
  isInteger,
  isNegativeInteger,
  isNegativeIntegerAndZero,
  isNumber,
  isPositiveInteger,
  isPositiveIntegerAndZero
} from "../../util";

const testZero = [
  {arg: 0, res: true, msg: '用例: 0'},
  {arg: +0, res: true, msg: '用例: +0'},
  {arg: -0, res: true, msg: '用例: -0'},
  {arg: "+0", res: true, msg: '用例: "+0"'},
  {arg: "-0", res: true, msg: '用例: "-0"'},
]

const testBaseData = [
  {arg: "null", res: false, msg: '用例: "null"'},
  {arg: null, res: false, msg: '用例: null'},
  {arg: "undefined", res: false, msg: '用例: "undefined"'},
  {arg: undefined, res: false, msg: '用例: undefined'},
  {arg: '', res: false, msg: '用例: ""'},
  {arg: "NaN", res: false, msg: '用例: "NaN"'},
  {arg: NaN, res: false, msg: '用例: NaN'},
]

const testIntegerDate = [
  ...testBaseData,
  {arg: 1.23, res: false, msg: '用例: 1.23'},
  {arg: "1.23", res: false, msg: '用例: "1.23"'},
  {arg: -1.23, res: false, msg: '用例: -1.23'},
  {arg: "-1.23", res: false, msg: '用例: "-1.23"'},
]

// 是否是 数字
describe.each([
  ...testZero,
  ...testBaseData,
  {arg: 1.23, res: true, msg: '用例: 1.23'},
  {arg: "1.23", res: true, msg: '用例: "1.23"'},
  {arg: -1.23, res: true, msg: '用例: -1.23'},
  {arg: "-1.23", res: true, msg: '用例: "-1.23"'}, ,
])('是否是 数字', ({arg, res, msg}) => {
  test(msg, () => {
    expect(isNumber(arg)).toBe(res)
  })
})


// 是否是 整数 ===> 正、负和零
describe.each([
  ...testZero,
  ...testIntegerDate,
  {arg: 10, res: true, msg: '用例: 10'},
  {arg: -10, res: true, msg: '用例: -10'},
  {arg: "+10", res: true, msg: '用例: "+10"'},
  {arg: "-10", res: true, msg: '用例: "-10"'},
])('是否是 整数 ===> 正、负和零', ({arg, res, msg}) => {
  test(msg, () => {
    expect(isInteger(arg)).toBe(res)
  })
})

// 是否是 正整数 和 零
describe.each([
  ...testZero,
  ...testIntegerDate,
  {arg: 10, res: true, msg: '用例: 10'},
  {arg: "+10", res: true, msg: '用例: "+10"'},
  {arg: +10, res: true, msg: '用例: +10'},
  {arg: "-10", res: false, msg: '用例: "-10"'},
  {arg: -10, res: false, msg: '用例: -10'},
])('是否是 正整数 和 零', ({arg, res, msg}) => {
  test(msg, () => {
    expect(isPositiveIntegerAndZero(arg)).toBe(res)
  })
})

// 是否是 正整数
describe.each([
  ...testIntegerDate,
  {arg: 10, res: true, msg: '用例: 10'},
  {arg: +10, res: true, msg: '用例: +10'},
  {arg: "+10", res: true, msg: '用例: "+10"'},
  {arg: -10, res: false, msg: '用例: -10'},
  {arg: "-10", res: false, msg: '用例: "-10"'},
])('是否是 正整数', ({arg, res, msg}) => {
  test(msg, () => {
    expect(isPositiveInteger(arg)).toBe(res)
  })
})


// 是否是 负整数
describe.each([
  ...testIntegerDate,
  {arg: 10, res: false, msg: '用例: 10'},
  {arg: "+10", res: false, msg: '用例: "+10"'},
  {arg: -10, res: true, msg: '用例: 10'},
  {arg: "-10", res: true, msg: '用例: "-10"'},
])('是否是 负整数 和 零', ({arg, res, msg}) => {
  test(msg, () => {
    expect(isNegativeInteger(arg)).toBe(res)
  })
})

// 是否是 负整数 和 零
describe.each([
  ...testZero,
  ...testIntegerDate,
  {arg: 10, res: false, msg: '用例: 10'},
  {arg: "+10", res: false, msg: '用例: "+10"'},
  {arg: -10, res: true, msg: '用例: 10'},
  {arg: "-10", res: true, msg: '用例: "-10"'},
])('是否是 负整数 和 零', ({arg, res, msg}) => {
  test(msg, () => {
    expect(isNegativeIntegerAndZero(arg)).toBe(res)
  })
})
