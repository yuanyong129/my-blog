<template>
  <el-menu
    :default-active="activeMenu"
    :collapse="isCollapse"
    :collapse-transition="false"
    :unique-opened="true"
    class="el-menu-wrap"
    router
    >
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>主页</span>
      </template>
      <el-menu-item index="/index">主页</el-menu-item>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>帖子中心</span>
      </template>
      <el-menu-item index="/post/index">帖子管理</el-menu-item>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span>用户中心</span>
      </template>
      <el-menu-item index="/user/index">
        <span slot="title">用户管理</span>
      </el-menu-item>
      <el-menu-item index="/user/role">
        <span slot="title">角色管理</span>
      </el-menu-item>
      <el-menu-item index="/user/menu">
        <span slot="title">菜单管理</span>
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    activeMenu() {
      return this.$route.path
    },
  },
  data() {
    return {
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>