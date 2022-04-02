<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Login from './views/auth/Login/index.vue'
import { NMessageProvider } from 'naive-ui'
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <n-message-provider>
    <Login />
  </n-message-provider>
  
</template>

<style lang="scss">
@import '@/styles/index.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
}
</style>
