import {regexes} from "./regexes";

export const isNumber = (value) => {
  if (value === null || value === undefined || value === "" || value === 'null' || value === "undefined" || isNaN(value)) return false
  return true
}

// 是否是 整数 ===> 正、负和零
export const isInteger = (value) => {
  if (!isNumber(value)) return false
  // 处理代符号的字符串 '+123、-123'
  value = Number(value)
  return regexes.integerAndZero.test(value)
}

// 是否是 正整数 和 零
export const isPositiveIntegerAndZero = (value) => {
  if (isInteger(value)) {
    return value == 0 || Number(value) > 0
  }
  return false
}

// 是否是 正整数
export const isPositiveInteger = (value) => {
  return isPositiveIntegerAndZero(value) && Number(value) !== 0
}

// 是否是 负整数 和 零
export const isNegativeIntegerAndZero = (value) => {
  if (isInteger(value)) {
    return value == 0 || Number(value) < 0
  }
  return false
}
// 是否是 负整数
export const isNegativeInteger = (value) => {
  return isNegativeIntegerAndZero(value) && Number(value) !== 0
}





