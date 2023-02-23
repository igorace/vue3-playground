<script setup lang="ts">
import type UserInfo from "@/types/User";
import { ref } from "vue";

const emits = defineEmits<{
  (e: "@login", userInfo: UserInfo): void;
}>();

const username = ref("");
const password = ref("");

const handleLogin = () => {
  emits("@login", { username: username.value, password: password.value });
};
</script>

<template>
  <form @submit.prevent="handleLogin">
    <label for="">
      Username:
      <input type="text" placeholder="Username" v-model="username" />
    </label>
    <label for="">
      Password:
      <input
        type="password"
        placeholder="Enter your password"
        v-model="password"
      />
    </label>
    <button @click.prevent="handleLogin">Login in</button>
  </form>
</template>

<style module></style>
