<template>
  <div>
    <n-card title="Tokens" :segmented="{
      content: true,
      footer: 'soft'
    }">
      <n-space vertical>
        <n-alert title="Plus 专业版" type="success">
          <template #icon>
            <n-icon>
              <cloud-done-outlined />
            </n-icon>
          </template>
          <n-statistic label="Tokens 使用">
            <template #prefix>
              <n-icon>
                <TokenRound />
              </n-icon>
            </template>
            <template #suffix>
              <text>已使用 1,982,041 / 总额 100,000,000</text>
            </template>
          </n-statistic>
        </n-alert>

        <n-data-table :columns="columns" :data="tableData" />

        <n-alert title="同学你好">
          <template #icon>
            <n-icon>
              <shield-dismiss16-regular />
            </n-icon>
          </template>
          <p>1) 消耗tokens数量在1,000,000以内, 可以继续使用教学环境</p>
          <p>2) 在{{ nowDate }}之前, 如果消耗tokens超过 1,000,000 , 统一按照1,000,000计算, 无需补交费用, 后续继续使用则需要开始充值;</p>
          <p>3) 同学优惠充值价格为: 20元 / 1,000,000 tokens。</p>
          <p>4) 请注意, 已充值费用, 不接受退费和转增, 请避免单次大额充值;</p>
          <p>5) 充值完成后的10分钟内, 对应的tokens将到账, 祝你使用愉快!</p>
        </n-alert>
      </n-space>
    </n-card>
  </div>
  <n-modal v-model:show="showModal" preset="dialog" :show-icon="false">
    <template #header>
      <div style="display:flex;justify-content: center;align-items: center;flex-direction: column; width: 100%;">
        <div style="font-weight: bolder;">购买 Tokens</div>
        <n-space align="center" justify="center">
          <Icon style="margin-top: 7px;" color="green">
            <ShieldAlt />
          </Icon>
          <div style="color: gray;font-size:14px;">安全支付已开启</div>
        </n-space>
      </div>
    </template>
    <n-space vertical style="background-color: #fafafa;padding: 16px;">
      <div style="font-weight: bolder;">支付方式</div>
      <n-button style="width: 100%;">
        <n-space>
          <Icon color="green">
            <WechatFilled />
          </Icon>
          <div>微信支付</div>
        </n-space>
      </n-button>
      <n-space vertical justify="center" align="center">
        <n-space>
          <div>支付金额</div>
          <div style="color: blue; font-weight: bolder;">￥ 20</div>
        </n-space>
        <div>
          <img width="100" height="100" src="../../assets/payment-code.png" alt="" style="background-color: #ffffffe6;" />
        </div>
      </n-space>
      <n-space justify="center" align="center">
        <div>请使用 微信支付 支付</div>
        <n-button type="primary">我已支付</n-button>
      </n-space>
      <n-space justify="center">
        <div style="color:gray">剩余支付时间:</div>
        <div class="time"> {{ min }}分钟 {{ sec }}秒 </div>

      </n-space>
    </n-space>
  </n-modal>
</template>

<script >
import { Icon } from '@vicons/utils'
import { CloudDoneOutlined, TokenRound, WechatFilled } from "@vicons/material";
import { ShieldDismiss16Regular } from "@vicons/fluent";
import { ShieldAlt } from "@vicons/fa";
import { h, defineComponent, ref, onMounted } from "vue";
import { NTag, NButton } from "naive-ui";
import axios from 'axios'


/**n-data-table组件的colums */
const createColumns = ({ renew }) => {
  return [
    {
      title: "方案",
      key: "scheme",
      render(row) {
        const tags = row.tags.map((tagKey) => {
          return h(
            NTag,
            {
              style: {
                marginRight: "6px"
              },
              type: "success",
              bordered: false
            },
            {
              default: () => tagKey
            }
          );
        });
        return tags;
      }
    },
    {
      title: "描述",
      key: "description"
    },
    {
      title: "操作",
      key: "operation",
      render(row) {
        return h(
          NButton,
          {
            strong: true,
            tag: "a",
            text: true,
            type: "info",
            size: "small",
            onClick: () => renew(row)
          },
          { default: () => "续费 100w tokens" }
        );
      }
    },
  ];
};
/**n-data-table组件的data */
const tableData = [
  { scheme: 3, description: "仅用于教学用途, 不支持大量商用和其他非教学用途", operation: "续费 100w tokens", tags: ["Plus 专业版"] },
];

export default defineComponent({
  components: {
    Icon,
    TokenRound,
    CloudDoneOutlined,
    ShieldDismiss16Regular,
    ShieldAlt,
    WechatFilled
  },
  setup() {
    let nowDate = ref('nowDate')
    let showModal = ref(false)
    let min = ref('')
    let sec = ref('')
    //倒计时
    function countdown() {
      // console.log('countdown')
      const end = Date.parse(new Date('2023-06-23 00:00:00'))
      const now = Date.parse(new Date())
      const msec = end - now

      if (msec < 0) return;
      min.value = parseInt(msec / 1000 / 60 % 60) > 9 ? parseInt(msec / 1000 / 60 % 60) : '0' + parseInt(msec / 1000 / 60 % 60)
      sec.value = parseInt(msec / 1000 % 60) > 9 ? parseInt(msec / 1000 % 60) : '0' + parseInt(msec / 1000 % 60)
      if (min.value >= 0 && sec.value >= 0) {
        //倒计时结束
        if (min.value == 0 && sec.value == 0) {
          return
        }
        setTimeout(function () {
          countdown()
        }, 1000)
      }
    }

    onMounted(() => {
      countdown()
    })

    axios
      .get("http://localhost:3000")
      .then((res) => {
        console.log("res", res)
        nowDate.value = res.data
      })
      .catch((err) => {
        console.log(err);
      });
    return {
      tableData,
      columns: createColumns({
        /**续费 */
        renew() {
          console.log("renew", showModal.value)
          showModal.value = true
        }
      }),
      nowDate,
      showModal,
      countdown,
      min,
      sec
    }
  }
})
</script>

<style scoped></style>