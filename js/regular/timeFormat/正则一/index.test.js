const { reg } = require("./index")

test("1h1m1s", () => {
  expect(reg.test("1h1m1s")).toBe(false)
})
// test("测试4-1", () => {
//   expect(minus(4, 1)).toBe(3)
// })
// test("测试对象", () => {
//   var foo = { a: 1 };
//   var bar = { a: 1 };
//   expect(foo).toEqual(bar)
// })