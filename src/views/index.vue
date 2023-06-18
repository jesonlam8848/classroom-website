<script>
import VHeader from '../components/VHeader.vue'
import VContent from '../components/VContent.vue'
import VFooter from '../components/VFooter.vue'
import { Icon } from '@vicons/utils'
import { VerticalAlignTopFilled, HeadsetMicOutlined } from '@vicons/material'

export default {
  components: {
    VHeader,
    VContent,
    VFooter,
    Icon,
    VerticalAlignTopFilled,
    HeadsetMicOutlined
  }
}
</script>

<template>
  <div class="wrapper">
    <n-layout>
      <n-layout-header>
        <v-header></v-header>
      </n-layout-header>
      <n-layout-content class="content" content-style="padding-top: 84px; margin-bottom: 50px;">
        <v-content></v-content>
      </n-layout-content>
    </n-layout>
    <footer>
      <v-footer style="background-color: #fafafa;"></v-footer>
    </footer>
  </div>

  <n-back-top :bottom="130" :visibility-height="300"
    style="border-radius: 0; width: 64px; height: 64px; margin-top: 16px;">
    <n-space vertical align="center">
      <Icon style="font-size: 26px;">
        <VerticalAlignTopFilled />
      </Icon>
      <div>返回顶部</div>
    </n-space>
  </n-back-top>

  <n-button id="floatBtn">
    <n-space vertical>
      <Icon style="font-size: 26px;">
        <HeadsetMicOutlined />
      </Icon>
      <div>投诉举报</div>
    </n-space>
  </n-button>
</template>

<style scoped>
.wrapper {
  display: flex !important;
  flex-direction: column;
  min-height: 100%;
}

#floatBtn {
  position: fixed;
  right: 40px;
  bottom: 37px;
  display: block;
  width: 64px;
  height: 64px;
  margin-top: 16px;
  background: #ffffff;
  transition: all .2s ease-out;
  border-radius: 4px;
  border: 0;
  box-shadow: 0 2px 8px #0000001f;
  padding: 8px 0;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #000000a6;
  cursor: pointer;
  pointer-events: auto;
}

footer {
  width: 100%;
  background-color: #fafafa;
}
</style>
