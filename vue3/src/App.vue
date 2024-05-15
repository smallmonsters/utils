<template>
  <div class="test">12312{{test}}{{a}}</div>
</template>

<script setup>
import {defineOptions, ref} from "vue";


const test=ref('123')
const a="aa"

defineOptions({
  name: "my-component"
})
</script>

<style lang="scss" scoped>
@import "../../scss/glabol.scss";

.float {
  float: left;
}

.fl {
  @extend .float;

  div {
    @extend .float;
  }
}

.fr {
  @extend .float
}
</style>
