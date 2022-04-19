<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { MenuOutline } from '@vicons/ionicons5'
import { removeToken } from '@/utils'

const emit = defineEmits(['click'])

const router = useRouter()

const logout = () => {
  removeToken()
  router.push('/login')
}
</script>

<template>
<div style="display: flex; justify-content: space-between; align-items: center; height: var(--navbar-height); ">
  <div
    style="width: var(--navbar-height); height: var(--navbar-height); padding: 12px; cursor: pointer;"
    @click="emit('click')"  >
    <MenuOutline />
  </div>
  <div style="cursor: pointer; margin-right: 10px;" @click="logout">退出登录</div>
</div>
</template>