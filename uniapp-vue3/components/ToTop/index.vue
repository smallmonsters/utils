<template>
  <view :style="style" class="to-top-icon" @tap="emits('handleUpperBtn')" v-if="props.showUpperBtn">
    <image src="/static/images/icon_zd.png" class="to-top"></image>
  </view>
</template>

<script setup>
const props = defineProps({
  showUpperBtn: {
    type: Boolean,
    default: true
  },
  style: {
    type: Object,
    default: () => ({})
  }
})

const emits = defineEmits(['handleUpperBtn'])

</script>

<style scoped lang="scss">

.to-top-icon {
  position: fixed;
  bottom: 56rpx;
  right: 27rpx;
}

.to-top-icon image {
  width: 96rpx;
  height: 96rpx;
}

</style>
