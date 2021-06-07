<template>
  <el-container>
    <el-aside :width="isCollapsed? variables.sideClose: variables.sideOpen">
      <logo :isCollapse="isCollapsed"/>
      <el-scrollbar :style="`height: calc(100% - ${variables.headerHeight} )`">
        <menu-list :isCollapse="isCollapsed"/>
      </el-scrollbar>
    </el-aside>
    <el-container>
      <el-header :style="`height: ${variables.headerHeight};`">
        <m-header />
      </el-header>
      <el-main>
        <transition name="slide-fade" mode="out-in">
          <router-view />
        </transition>
      </el-main>
      <el-footer :style="`height: ${variables.footerHeight};`">copyright © yuany 2021</el-footer>
    </el-container>
  </el-container>
</template>

<script>
import Logo from './components/Logo'
import MenuList from './components/MenuList'
import MHeader from './components/Header'
import variables  from '../styles/variable.scss';
export default {
  name:'Layout',
  components:{ Logo, MenuList, MHeader },
  computed: {
    isCollapsed() {
      return this.$store.state.app.isCollapsed
    }
  },
  data() {
    return {
      variables
    }
  },
  created (){}
}
</script>

<style lang="scss" scoped>
.el-aside {
  background-color: #D3DCE6;
  color: #333;
  height: 100vh;
  transition: width .3s ease;
}
  
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all .8s ease;
}

.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
