<script lang="ts" setup>
import {
  IconApps,
  IconBook
} from '@arco-design/web-vue/es/icon';
import router from '@/router';

interface IProps {
  collapsed?: boolean
}

withDefaults(defineProps<IProps>(), {
  collapsed: false,
})

const onMenuItemClick = (path: string) => {
  router.push('/' + path.split('-').join('/'));
}
</script>

<template>
  <a-menu
    :collapsed="collapsed"
    @menu-item-click="onMenuItemClick"
  >
    <a-menu-item key="index">
      <template #icon>
        <icon-apps></icon-apps>
      </template>
      首页
    </a-menu-item>
    <a-menu-item key="post">
      <template #icon>
        <icon-book></icon-book>
      </template>
      博客
    </a-menu-item>
  </a-menu>
</template>