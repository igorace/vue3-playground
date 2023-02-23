import { ref, computed } from "vue";

export default function usePaginator() {
  const currentPage = ref(1);
  const totalItems = ref(0);
  const itemsPerPage = ref(10);

  const setCurrentPage = (page: number) => (currentPage.value = page);
  const setItemsPerPage = (count: number) => (itemsPerPage.value = count);
  const setTotalItems = (count: number) => (totalItems.value = count);
  const prevPage = () => {
    if (currentPage.value > 1) {
      currentPage.value--;
    }
  };
  const nextPage = () => {
    if (currentPage.value < _getLastPage()) {
      currentPage.value++;
    }
  };

  const isFirstPage = computed(() => currentPage.value === 1);
  const isLastPage = computed(() => currentPage.value === _getLastPage());

  const _getLastPage = () => Math.ceil(totalItems.value / itemsPerPage.value);

  return {
    currentPage,
    totalItems,
    itemsPerPage,
    setCurrentPage,
    setItemsPerPage,
    setTotalItems,
    prevPage,
    nextPage,
    isFirstPage,
    isLastPage,
  };
}
