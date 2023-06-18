<template>
  <div>
    <n-card title="我的课程" :segmented="{
      content: true,
      footer: 'soft'
    }">
      <n-result title="如何好像还没有任何课程" description="要不去首页看看">
        <template #icon>
          <i style="font-size: 100px;font-style: normal;">🤷🏻‍♀️</i>
        </template>
        <template #footer>
          <n-button type="info">返回首页</n-button>
        </template>
      </n-result>
    </n-card>
  </div>
</template>

<script></script>

<style scoped></style>