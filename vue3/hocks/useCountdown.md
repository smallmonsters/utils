# useCountdown 使用

```vue
<template>
  <view class="code-btn" v-if="!finish">倒计时{{ countTime }}s</view>
</template>
<script>
import {onMounted} from "vue";
// setTimeout 案例
const {finish, onTimeStart} = useCountdown(5, countdownTypes.timeout)
onMounted(() => {
  onTimeStart(setTime)
})
const setTime = (time) => {
  if (finish.value) {
    //   倒计时结束
  } else {
    console.log(time)
  }
}
// setInterval 案例
const {countTime, finish, onTimeStart, onReset} = useCountdown()
onTimeStart()
</script>

```
