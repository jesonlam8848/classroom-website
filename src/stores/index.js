import { defineStore } from "pinia";

export const useUserStore = defineStore("userInfo", {
  state: () => {
    return { nickname: 'jeson' };
  },
  actions: {
    changeNickname(arg) {
      this.nickname = arg
    },
  },
});
