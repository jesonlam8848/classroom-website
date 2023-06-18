<template>
  <div>
    <n-card title="账号设置" :segmented="{
      content: true,
      footer: 'soft'
    }">

      <n-form label-width="230" label-placement="left" size="large">
        <n-form-item size="large" label="学院头像" label-style="margin-top:20px;margin-right:20px">
          <n-badge @mouseenter="hoverAvatar" @mouseleave="leaveAvatar">
            <div>
              <img width="80" height="80" src="../../assets/Avatar.webp" alt="" style="background-color: #ffffffe6;" />
            </div>
            <div class="hover" :style="{ display: avatarHoverStyle }">
              <span class="n-text" style="position: absolute;left: 15px;top: 30px;">点击更改</span>
            </div>
          </n-badge>
        </n-form-item>
        <n-form-item label-style="margin-right:20px" size="large" label="学院昵称">
          <n-space justify="space-between" align="center" v-if="!isEditing">
            <text>{{ nickname }}</text>
            <n-button text :render-icon="editIcon" @click="editNickname">
            </n-button>
          </n-space>
          <n-input-group v-if="isEditing">
            <n-input :style="{ width: '50%' }" v-model:value="nickname" />
            <n-button type="primary" quaternary @click="changeNickname">
              <n-icon size="40">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41L9 16.17z" fill="currentColor" />
                </svg>
              </n-icon>
            </n-button>
            <n-button type="error" quaternary @click="abandonChangeNickname">
              <n-icon size="40">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
                  <path
                    d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z"
                    fill="currentColor" />
                </svg>
              </n-icon>
            </n-button>
          </n-input-group>
        </n-form-item>
        <n-form-item label-style="margin-right:20px" size="large" label="注册手机">
          <n-space justify="space-between" align="center">
            <div>134****9021</div>
            <n-button quaternary type="primary">
              更换
            </n-button>
            <n-button quaternary type="warning">
              设置密码
            </n-button>
          </n-space>
        </n-form-item>
        <n-form-item label-style="margin-right:20px" size="large" label="学员ID">
          <n-space>
            <n-input-group>
              <n-input :style="{ width: '90%' }" value="648c3d4cb096d40d68296909" readonly />
              <n-button ghost>
                复制
              </n-button>
            </n-input-group>
          </n-space>
        </n-form-item>
        <n-form-item label-style="margin-right:20px" size="large" label="贴号标签">
          <n-space>
            <n-tag type="success">
              学员
            </n-tag>
          </n-space>
        </n-form-item>
        <n-form-item label-style="margin-right:20px" size="large" label="绑定微信">
          <n-space justify="space-between" align="center">
            <text style="color: gray;">已绑定</text>
            <n-button type="info" text :render-icon="renderIcon">
              更改/更新
            </n-button>
          </n-space>
        </n-form-item>
      </n-form>

    </n-card>
  </div>
</template>

<script>
import { defineComponent, h, ref } from "vue";
import { NIcon } from "naive-ui";
import { WechatFilled } from "@vicons/material";
import { Edit } from "@vicons/fa";

import { useUserStore } from '../../stores/index'
const userStore = useUserStore()
let nickname = ref(userStore.nickname)
/**鼠标经过头像样式 */
let avatarHoverStyle = ref('none')
export default defineComponent({
  components: {
    NIcon,
    WechatFilled,
    Edit
  },
  setup() {
    let isEditing = ref(false)

    function editNickname() {
      console.log('editN', isEditing.value)
      isEditing.value = true
    }
    return {
      nickname,
      isEditing,
      avatarHoverStyle,
      renderIcon() {
        return h(NIcon, null, {
          default: () => h(WechatFilled)
        });
      },
      editIcon() {
        return h(NIcon, null, {
          default: () => h(Edit)
        });
      },
      editNickname,
      changeNickname() {
        console.log("changeNickname", nickname.value)
        userStore.changeNickname(nickname.value)
        isEditing.value = false
      },
      abandonChangeNickname() {
        console.log("abandonChangeNickname")
        isEditing.value = false
        nickname.value = userStore.nickname
      },
      hoverAvatar() {
        avatarHoverStyle.value = 'block'
      },
      leaveAvatar() {
        avatarHoverStyle.value = 'none'
      }
    };
  }
});
</script>

<style scoped>
.hover {
  width: 100%;
  height: 0px;
  padding-bottom: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #00000080;
  overflow: hidden;
  border-radius: 50%;
  text-align: center;
  font-size: 12px;
  color: #fff;
  justify-content: center;
  align-items: center;
}
</style>