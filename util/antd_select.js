// 将对象转换为枚举
const enumObj = (obj) => {
  if (typeof obj !== "object" || obj === null) {
    throw new TypeError(`参数类型是${typeof obj}，期望得到类型 object。`)
  }
  return new Proxy(obj, {
    get(target, propKey) {
      debugger
      if (target[propKey]) return target[propKey]
      let value
      for (const key in obj) {
        if (obj[key] === propKey) {
          value = key
          break;
        }
      }
      return value
    },
  })
}

// 将对象转换为antd select的option,obj的key=option的value,obj的value==>option的label
export const objToOption = (obj) => {
  if (typeof obj !== "object" || obj === null) {
    throw new TypeError(`参数类型是${typeof obj}，期望得到类型 object。`)
  }
  const option = []
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      option.push({
        value: key,
        label: obj[key]
      })
    }
  }
  return option
}
export const labelV1 = "v1"
export const valueV1 = "0"
export const labelV2c = "v2c"
export const valueV2c = "1"
export const labelV3 = "v3"
export const valueV2 = "2"

export const SNMPEnum = enumObj({
  [valueV1]: labelV1,
  [labelV2c]: valueV2c,
  [labelV3]: valueV2,
})
//
export const labelStatus = objToOption(SNMPEnum)

// 将对象转换为pro table 的valueEnum格式,
// valueEnum: {
//   '1': { text: '全部', status: 'default' },
//   '2': { text: '关闭', status: 'success' },
// },
export const objToValue = (obj, getStatus) => {
  const valueEnum = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      valueEnum[key] = { text: obj[key], };
      getStatus && (valueEnum[key].status = getStatus(key))
    }
  }

  return valueEnum;
};