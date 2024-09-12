<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { removeToken } from '@/utils'

const emit = defineEmits(['click'])

const router = useRouter()

const logout = () => {
  removeToken()
  router.push('/login')
}
</script>

<template>
  <div class="navi">
    <!-- <div
      style="width: var(--navbar-height); height: var(--navbar-height); padding: 12px; cursor: pointer;"
      @click="emit('click')" >
    </div> -->
    <div></div>
    <div style="cursor: pointer; margin-right: 10px;" @click="logout">退出登录</div>
  </div>
</template>

<style lang="scss" scoped>
.navi {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--navbar-height);
  background: var(--color-bg-3);
}
</style>