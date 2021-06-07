<template>
  <div class="com-warp">
    <div class="title">
      {{ text }}
    </div>
    <div class="content box-shadow">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: this.$route.meta.title
    }
  }
}
</script>

<style lang="scss" scoped>
.title{
  font-size: 28px;
  text-align: center;
  margin: 0  0 20px;
}
.content{
  min-height: 350px;
  background: white;
}
</style>
