<script lang="ts" setup>
import { onBeforeMount } from 'vue'
import { getPostsApi } from '@/api'

onBeforeMount(() => {
  getPosts()
})

const getPosts = async () => {
  try {
    const res = await getPostsApi({ page: 1, size: 10 })
    window.$message.success(res.code)
    console.log(res)
  } catch (err) {
    console.log(err)
  }
}
</script>

<template>
博客
</template>