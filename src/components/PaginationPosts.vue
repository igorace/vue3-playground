<script setup lang="ts">
import usePaginator from "@/composables/Paginator";
import { usePosts } from "@/stores/Posts";
import { useLocalStorage } from "@vueuse/core";
import { computed, watch } from "vue";

const postsStore = usePosts();
const paginator = usePaginator();
postsStore.loadData();
watch(postsStore, () => {
  paginator.setTotalItems(postsStore.totalItems);
});
const paginatedItems = computed(() => {
  const startIndex =
    (paginator.currentPage.value - 1) * paginator.itemsPerPage.value;
  const endIndex = startIndex + paginator.itemsPerPage.value;
  return postsStore.paginatedItems(startIndex, endIndex);
});

paginator.setCurrentPage(
  useLocalStorage("posts-current-page", paginator.currentPage).value
);
</script>

<template>
  <ul>
    <li v-for="post in paginatedItems" :key="post.id">
      {{ post.title }}
    </li>
  </ul>
  <div>
    <button :disabled="paginator.isFirstPage.value" @click="paginator.prevPage">
      Prev
    </button>
    <span style="margin: 0 10px">{{ paginator.currentPage }}</span>
    <button :disabled="paginator.isLastPage.value" @click="paginator.nextPage">
      Next
    </button>
  </div>
</template>

<style module></style>
