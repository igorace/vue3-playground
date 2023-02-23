<script setup lang="ts">
import LoginForm from "@/components/LoginForm.vue";
import type UserInfo from "@/types/User";

const login = (userInfo: UserInfo) => {
  alert(userInfo.username);
};
</script>

<template>
  <h1>Login Page</h1>
  <login-form @@login="login($event)" />
</template>

<style module></style>
