import { defineStore } from "pinia";

export const usePaginator = defineStore("Paginator", {
  state: () => {
    return {
      currentPage: 1,
      totalItems: 0,
      itemsPerPage: 10,
    };
  },
  getters: {},
  actions: {
    setCurrentPage(page: number) {
      this.currentPage = page;
    },
    setItemsPerPage(count: number) {
      this.itemsPerPage = count;
    },
    setTotalItems(count: number) {
      this.totalItems = count;
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      const lastPage = Math.ceil(this.totalItems / this.itemsPerPage);
      if (this.currentPage < lastPage) {
        this.currentPage++;
      }
    },
  },
});
