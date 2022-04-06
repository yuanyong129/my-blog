<script lang="ts" setup>
import { ref } from 'vue'
import { NLayout, NLayoutSider, NLayoutContent, NLayoutFooter, NLayoutHeader } from 'naive-ui'
import MyMenu from './components/Menu.vue'

const collapsed = ref<boolean>(false)

const onCollapsed = (value: boolean) => {
  collapsed.value = !collapsed.value
  // console.log('param', value, 'bind', collapsed.value)
}

</script>

<template>
<n-layout has-sider style="width: 100%; height: 100%; background-color: rgba(red, green, blue, 0.2);">
  <n-layout-sider
    :collapsed="collapsed"
    collapse-mode="width"
    :collapsed-width="50"
    :width="240"
    bordered
    show-trigger="arrow-circle"
    :native-scrollbar="false"
    content-style="height: 100%;"
    :on-update:collapsed="onCollapsed">
    <my-menu />
  </n-layout-sider>
  <n-layout>
    <n-layout-header bordered style="height: 64px;">这是导航条</n-layout-header>
    <n-layout-content style="height: calc(100vh - 101px);"  :native-scrollbar="false" content-style="padding: 24px;">
      <router-view />
    </n-layout-content>
    <n-layout-footer bordered style="height: 36px; line-height: 36px; text-align: center">copyright © yuany 2021~Now</n-layout-footer>
  </n-layout>
</n-layout>
</template>