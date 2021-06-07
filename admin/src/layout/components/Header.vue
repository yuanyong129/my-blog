<template>
  <div class="wrap flex-row">
    <div class="left">
      <hamburger />
    </div>
    <div class="right">
      <div class="logout" @click="logout">退出登录</div>
    </div>
  </div>
</template>

<script>
import Hamburger from '@/components/Hamburger'
import { clearAll } from '@/utils/auth'
export default {
  components: { Hamburger },
  methods: {
    logout() {
      clearAll()
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap{
  justify-content: space-between;
}
.logout{
  font-size: 14px;
  cursor: pointer;
}
</style>
