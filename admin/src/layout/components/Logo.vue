<script lang="ts" setup>
import { defineProps, CSSProperties } from 'vue'
import { variables } from '@/styles'
interface PropsType {
  collapsed: boolean
}

const { collapsed } = defineProps<PropsType>()

const logo_style: CSSProperties = {
  height: variables.navbarHeight,
  textAlign: 'center',
  lineHeight: variables.navbarHeight,
  fontSize: '36px',
  boxShadow: '.5px .5px 0 rgba(0, 0, 0, .2)'
}

</script>

<template>
  <div v-if="!collapsed" :style="logo_style"> open </div>
  <div v-else :style="logo_style"> close </div>
</template>