<template>
  <div>
    <n-card title="订单信息" :segmented="{
      content: true,
      footer: 'soft'
    }">
      <template #header-extra>
        <n-button>联系客服</n-button>
      </template>
      <n-result title="暂无订单信息" description="这里真的可以：一直白嫖~">
        <template #icon>
          <i style="font-size: 100px;font-style: normal;">🔮</i>
        </template>
        <template #footer>
          <n-button type="info" @click="returnHomepage">返回首页</n-button>
        </template>
      </n-result>
    </n-card>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const router = useRouter()
    return {
      returnHomepage() {
        router.push({
          name: 'myClass',
        })
      }
    }

  }
});
</script>

<style scoped></style>