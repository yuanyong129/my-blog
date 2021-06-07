<template>
  <div class="logo-wrap">
    <div :class="isCollapse ?'logo-close': 'logo-open' "></div>
  </div>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/variable.scss';

@mixin logo{
  width: 100%;
  height: $headerHeight;
  background: url('../../assets/logo.png') no-repeat center center;
  background-size: 100% 100%;
  transition: width .3s ease;
}
.logo-close{
  @include logo();
}
.logo-open{
  @include logo();
}
</style>