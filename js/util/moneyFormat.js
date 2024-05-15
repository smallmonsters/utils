//  输入金额格式化, 默认保留两位小数，不允许负数
export const moneyFormat = (value, num = 2) => {
  const regexp = new RegExp(`^\\d*(\\.?\\d{0,${num}})`, "g")
  const money = value.match(regexp)[0].replace(/^0+(?=\d)/, '')
  return num == 0 ? money.replace(".", "") :money
}
