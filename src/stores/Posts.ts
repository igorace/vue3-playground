import { defineStore } from "pinia";
import { useFetch } from "@vueuse/core";
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const usePosts = defineStore("Posts", {
  state: () => {
    return {
      data: [] as Post[],
    };
  },
  getters: {
    totalItems(): number {
      return this.data.length;
    },
    paginatedItems: (state) => (from: number, to: number) =>
      state.data.slice(from, to),
  },
  actions: {
    async loadData() {
      const { data } = await useFetch(
        "https://jsonplaceholder.typicode.com/posts"
      )
        .get()
        .json<Post[]>();
      if (data.value) {
        this.data = data.value;
      }
    },
  },
});
