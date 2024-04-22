const options = {
  hasAll: true,
  value: "value",
  name: "label"
}

// 将定义的枚举转换为对象
export const onConvertEnum = (enumObj, option = {}) => {
  option = Object.assign(options, option);
  const list = Object.keys(enumObj).map(v => {
    return {
      [option.name]: enumObj[v].name,
      [option.value]: enumObj[v].id
    }
  })
  return option.hasAll ? [
    {label: '全部', value: ""},
    ...list
  ] : list
}

// 根据唯一值获取枚举项
export const getEnumItemById = (enumObj, id) => enumObj[Object.keys(enumObj).find(v => enumObj[v].id == id)]

