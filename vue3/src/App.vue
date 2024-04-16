<template>
  <div class="test">12312</div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style lang="scss" scoped>
@import "../../scss/glabol.scss";
.test{
  @extend %flex-center;
  width: 100px;
}
</style>
