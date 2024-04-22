import {computed, onUnmounted, ref} from "vue";
import {isFun} from "@/utils";

export const countdownTypes = {
  interval: "interval",
  timeout: "timeout"
}

export const useCountdown = (countdown = 120, type = countdownTypes.interval) => {
  const countTime = ref(countdown)// 倒计时
  const timer = ref(null)
  
  const finish = computed(() => type === countdownTypes.interval ? countTime.value === countdown : countTime.value === 0)
  
  onUnmounted(() => {
    clearTimer()
  })
  
  // 开始setInterval的倒计时
  const _onIntervalStarts = (callback) => {
    countTime.value -= 1
    clearTimer()
    let flag = isFun(callback)
    timer.value = setInterval(() => {
      if (countTime.value > 1) {
        countTime.value -= 1
        if (flag) callback(countTime.value)
      } else {
        clearInterval(timer.value);
        countTime.value = countdown
      }
    }, 1000);
  }
  
  // 开始setTimeout的倒计时
  const _onTimeoutStart = (callback) => {
    clearTimer()
    let flag = isFun(callback)
    const fn = () => {
      if (flag) callback(countTime.value)
      if (countTime.value !== 0) {
        countTime.value--
        timer.value = setTimeout(fn, 1000)
      }
    }
    fn()
  }
  
  const onTimeStart = (...arg) => type === countdownTypes.interval ? _onIntervalStarts(...arg) : _onTimeoutStart(...arg)
  
  // 重置
  const onReset = () => {
    countTime.value = countdown
    clearTimer()
  }
  
  // 清除定时器
  const clearTimer = () => type === countdownTypes.interval ? clearInterval(timer.value) : clearTimeout(timer.value)
  
  return {
    countTime,
    finish,
    onTimeStart,
    onReset
  }
}
