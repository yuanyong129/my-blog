<template>
  <div class="wrap" @click="toggleCollapsed">
    <i style="font-size: 24px" :class=" collapsed? 'el-icon-s-fold': 'el-icon-s-unfold'"></i>
  </div>
</template>

<script>
export default {
  computed: {
    collapsed() {
      return this.$store.state.app.isCollapsed
    }
  },
  methods: {
    toggleCollapsed() {
      this.$store.dispatch('app/setCollapsed', !this.collapsed)
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap{
  height: 100%;
  cursor: pointer;
}
</style>