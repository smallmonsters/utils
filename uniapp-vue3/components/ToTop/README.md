# 使用
需要结合 [useToTop](useToTop.js)

```vue
<!--父组件-->
<template>
  <view bindscroll="onPageScroll">
    <ToTop :showUpperBtn="showUpperBtn" @handleUpperBtn="handleUpperBtn"/>
  </view>
</template>

<script setup>
import ToTop from "@/components/ToTop"
import {useToTop} from "@/hock/useToTop";
import {onPageScroll} from "@dcloudio/uni-app"

// config 见代码 hock/useToTop.js
const {showUpperBtn, handleUpperBtn, onPageScrollFn} = useToTop(config)

// 需要滚动到某一位置显示放回顶部按钮才写
onPageScroll(onPageScrollFn)
</script>

```
