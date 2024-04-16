// 更新Reactive对象
export const upDateReactive = (oldVal, newVal) => {
  for (let key in newVal) {
    oldVal[key] = newVal[key]
  }
}
