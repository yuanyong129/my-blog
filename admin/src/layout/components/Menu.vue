<script lang="ts" setup>
import { h } from 'vue'
import { NMenu, useMessage, MenuOption } from 'naive-ui'
import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon
} from '@vicons/ionicons5'
import { renderIcon } from '@/utils'
import { RouterLink } from 'vue-router';

const message  = useMessage()

const menuOptions: MenuOption[] = [
  {
    label: () => h(RouterLink, { to: { path: '/index' } }, { default: () => '首页' }),
    key: 'index',
    icon: renderIcon(BookIcon)
  },
  {
    label: () => h(RouterLink, { to: {path: '/post'} }, { default: () => '我的博客' }),
    key: 'post',
    icon: renderIcon(BookIcon)
  }
]
const defaultExpandedKeys = ['', 'food']
const handleUpdateExpandedKeys = (keys: string[]) => {
  message.info('[onUpdate:expandedKeys]: ' + JSON.stringify(keys))
}
</script>

<template>
  <n-menu
    :options="menuOptions"
    :collapsed-width="64"
    :default-expanded-keys="defaultExpandedKeys"
    @update:expanded-keys="handleUpdateExpandedKeys"
  />
</template>