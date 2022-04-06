<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import Login from './views/auth/Login/index.vue'
import { NMessageProvider } from 'naive-ui'
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <n-message-provider>
    <router-view></router-view>
  </n-message-provider>
  
</template>

<style lang="scss">
@import '@/styles/index.scss';

</style>
