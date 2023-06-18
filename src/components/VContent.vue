<template>
  <div>
    <n-grid x-gap="24" :cols="24">
      <n-gi :span="5">
        <n-card>
          <n-menu :options="options" style="width: 180px" default-value="4" />
        </n-card>
      </n-gi>
      <n-gi :span="19">
        <router-view></router-view>
      </n-gi>
    </n-grid>
  </div>
</template>

<script>
import { defineComponent, h } from "vue";
import { RouterLink } from "vue-router";

export default defineComponent({
  setup() {
    const options = [
      {
        label: () => h(
          RouterLink,
          {
            to: {
              name: "myClass",
            }
          },
          { default: () => "我的课程" }
        ),
        key: "1"
      },
      {
        label: () => h(
          RouterLink,
          {
            to: {
              name: "settings",
            }
          },
          { default: () => "账号设置" }
        ),
        key: "2"
      },
      {
        label: () => h(
          RouterLink,
          {
            to: {
              name: "orderInfo",
            }
          },
          { default: () => "订单信息" }
        ),
        key: "3"
      },
      {
        label: () => h(
          RouterLink,
          {
            to: {
              name: "tokens",
            }
          },
          { default: () => "Tokens" }
        ),
        key: "4"
      },
    ];
    return {
      options
    };
  }
});
</script>

<style scoped>
.light-green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.12);
}
.green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.24);
}
</style>