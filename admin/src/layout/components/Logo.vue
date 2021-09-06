<template>
  <div class="logo-wrap flex-row">
    <div :class="isCollapse ?'logo-close': 'logo-open' ">
      {{ isCollapse ? 'SORA\nSUMI' : 'SORASUMI' }}
    </div>
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
  color: skyblue;
  text-align: center;
  
  // background: url('../../assets/logo.png') no-repeat center center;
  // background-size: 100% 100%;
  transition: width .3s ease;
}
.logo-close{
  @include logo();
  font-size: 15px;
  line-height: calc( #{$headerHeight} / 2 );
}
.logo-open{
  @include logo();
  font-size: 30px;
  line-height: $headerHeight;
}
</style>