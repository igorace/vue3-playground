import { defineStore } from "pinia";

export const useUser = defineStore("User", {
  state: () => {
    return {
      username: "igor.asymov",
    };
  },
  getters: {},
  actions: {},
});
