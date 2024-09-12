<script lang="ts" setup>
import { ref } from 'vue';
import { Message } from '@arco-design/web-vue'
import Menu from './components/Menu.vue';
import Logo from './components/Logo.vue';
import Navi from './components/Navi.vue';
import Breadcrumb from './components/Breadcrumb.vue';

const collapsed = ref<boolean>(false)

const onCollapsed = (value: boolean) => {
  collapsed.value = !collapsed.value
}

</script>

<template>
  <a-layout class="layout">
    <a-layout-sider
      collapsible 
      :collapsed="collapsed"
      :width="240"
      @collapse="onCollapsed">
      <Logo :collapsed="collapsed" />
      <Menu :collapsed="collapsed"></Menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="layout-header">
        <Navi @click="onCollapsed" />
      </a-layout-header>
      <a-layout>
        <Breadcrumb />
        <a-layout-content class="layout-content">
          <router-view />
        </a-layout-content>
        <a-layout-footer class="layout-footer">
          copyright © yuany 2021~Now
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
  .layout-header {
    height: 64px;
  }
  .layout-content {
    height: calc(100vh - 101px);
    padding: 0px 10px 10px;
    box-sizing: border-box;
  }
  .layout-footer {
    height: 36px;
    line-height: 36px;
    text-align: center;
    background-color: var(--color-bg-3);
  }
}
</style>