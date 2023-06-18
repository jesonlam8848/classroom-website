<template>
  <n-affix style="position: fixed; z-index: 10000; background-color: #fff; width: 100%; box-shadow: 0 2px 6px #00000014;">
    <n-space justify="space-between" align="center" size="large" style="height: 64px;" class="content">
      <!-- 左侧 -->
      <div class="logo" style="display: flex; align-items: center;">
        <img width="37" height="37" src="../assets/shangke-Logo.png" alt="" style="background-color: #ffffffe6;">
        <text style="font-size: 30px; font-weight: bolder; position: relative;" @mouseenter="hoverLogo()"
          @mouseleave="leaveLogo()">
          <text :style="{ 'opacity': isLogoActive }" style=" transition: all .3s linear;">上课网</text>
          <text :style="{ 'opacity': isLogoActive == 0 ? 1 : 0 }"
            style="position: absolute;left: 0; transition: all .3s linear;">ShangKe.chat</text>
        </text>
      </div>
      <!-- 右侧 -->
      <div style="display: flex; align-items: center;">
        <n-button id="liveBtn">
          <img width="14" height="14" src="../assets/living.svg" alt="">
          <text style="padding-left: 5px;">
            ChatGPT
          </text>
        </n-button>

        <n-popover placement="bottom-end" trigger="hover" :show-arrow="false">
          <template #trigger>
            <n-button quaternary>
              <n-space justify="sapce-between" align="center">
                <img width="37" height="37" src="../assets/Avatar.webp">
                <text>{{ nickname }}</text>
                <Icon style="font-size: 25px;">
                  <KeyboardArrowDownFilled />
                </Icon>
              </n-space>

            </n-button>
          </template>
          <span>
            <n-button quaternary>
              <Icon>
                <LogOutFilled />
              </Icon>
              退出登录
            </n-button>
          </span>
        </n-popover>
      </div>
    </n-space>
  </n-affix>
</template>

<script>
import { LogOutFilled, KeyboardArrowDownFilled } from '@vicons/material'
import { Icon } from '@vicons/utils'

import { defineComponent, h, ref, toRefs } from "vue";
import { useUserStore } from '../stores/index'
const userStore = useUserStore()
let { nickname } = toRefs(userStore)
/**鼠标是否经过Logo */
let isLogoActive = ref(1)
export default defineComponent({
  components: {
    Icon,
    LogOutFilled,
    KeyboardArrowDownFilled,
  },
  setup() {
    return {
      isLogoActive,
      nickname,
      hoverLogo() {
        this.isLogoActive = 0
      },
      leaveLogo() {
        this.isLogoActive = 1
      }
    }
  },
})
</script>

<style scoped>
#liveBtn {
  background: #fff;
}

#liveBtn:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  margin: -1px;
  border-radius: inherit;
  background: linear-gradient(90deg, #0000ff, #00d500);
}
</style>