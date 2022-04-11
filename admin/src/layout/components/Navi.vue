<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { removeToken } from '@/utils'

const router = useRouter()

const logout = () => {
  removeToken()
  router.push('/login')
}
</script>

<template>
<div style="display: flex; justify-content: space-between; align-items: center; height: var(--navbar-height); ">
  <div></div>
  <div style="cursor: pointer; margin-right: 10px;" @click="logout">退出登录</div>
</div>
</template>