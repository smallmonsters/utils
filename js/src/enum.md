# enum 使用

```js
// 定义一个枚举对象
const timeEnum = {
  day: {
    id: 1,
    name: "今日",
  },
  week: {
    id: 2,
    name: "近7天",
  },
  month: {
    id: 3,
    name: "本月",
  }
}
// [{ "label": "全部", "value": ""},{ "label": "今日", "value": 1}...]
 onConvertEnum(timeEnum)
//{"id": 3, "name": "本月"}
getEnumItemById(timeEnum,3)
```
