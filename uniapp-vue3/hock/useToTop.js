import {nextTick, onMounted, reactive, ref} from "vue";
import {upDateReactive} from "@/utils";

export const useToTop = (_config) => {
  const config = reactive({
    scroll: 0, // 滚动到什么位置，显示返回顶部按钮，
    //  uni.pageScrollTo 配置项
    pageScrollToConfig: {
      scrollTop: 0
    },
    style: {},
  })
  
  onMounted(() => {
    upDateReactive(config, _config)
    nextTick(() => {
      showUpperBtn.value = config.scroll === 0
    })
  })
  
  const showUpperBtn = ref(true)
// 点击回到顶部
  const handleUpperBtn = () => {
    if (uni.pageScrollTo) {
      uni.pageScrollTo(config.pageScrollToConfig);
    }
  }
  
  const onPageScrollFn = (e) => {
    if (config.scroll !== 0) {
      showUpperBtn.value = e.scrollTop > config.scroll
    }
  }
  
  return {
    showUpperBtn,
    handleUpperBtn,
    onPageScrollFn
  }
}
