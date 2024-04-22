# usePreRoute hock 使用

页面A没有登录，跳转到登录页面，登录成功后，返回页面A。

```vue

<script>
const {preRoute, query} = usePreRoute()
const onLogin = async () => {
  switchTab({
    url: preRoute.value || routerMap.mine,
    query,
    fail: () => {
      redirectTo({
        url: preRoute.value || routerMap.mine,
        query,
      })
    }
  })
}
</script>
```

## 返回参数

| 参数       | 类型                | 描述        |
|----------|-------------------|-----------|
| preRoute | vue.ref\<String\> | 需要返回的路由   |
| query    | vue.ref\<Object\> | 需要返回的路由参数 |
