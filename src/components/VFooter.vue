<template>
  <div class="content">
    <n-space justify="space-between">
      <n-space justify="space-around" size="large">
        <n-button text>关于我们</n-button>
        <n-button text>老师入住</n-button>
        <n-button text>机构合作</n-button>
      </n-space>
      <div>
        <a href="https://beian.miit.gov.cn/" :style="{ 'text-decoration': textDecoration }" style="color: #666;"
          @mouseenter="hoverLink()" @mouseleave="leaveLink()">陕ICP备2023004511号-2</a>
      </div>
    </n-space>
    <n-divider />
    <text style="color: #666;">Copyright © 2008 ~ 2022 ShangKe.chat All Right Reserved.</text>
  </div>
</template>

<script setup>
import { ref } from 'vue'
let textDecoration = ref('none')
function hoverLink() {
  this.textDecoration = 'underline'
}
function leaveLink() {
  this.textDecoration = 'none'
}
</script>

<style scoped>
.content {
  height: 129px;
  padding: 30px 0;
  box-sizing: border-box;
}
</style>