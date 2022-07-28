<script lang="ts" setup>
import { onBeforeMount, reactive, ref } from 'vue'
import { getPostsApi } from '@/api'
import { Post } from '@/types'
import { NDataTable, DataTableColumns, PaginationProps } from 'naive-ui';

onBeforeMount(() => {
  getPosts()
})

const columns: DataTableColumns<Post> = [
  {
    title: '标题',
    key: 'title',
    align: 'center'
  },
  {
    title: '内容',
    key: 'content',
    align: 'center'
  }
]

const pagination = reactive<PaginationProps>({
  page: 1,
  pageSize: 10,
  itemCount: 100,
  pageCount: 10,
  onUpdatePage: (page) => {
    console.log(page, 'page ====>')
  },
  onUpdatePageSize: (size) => {
    console.log(size, 'pageSize===>')
  }
})

const data = ref<Post[]>([])

/** 获取帖子列表 */
const getPosts = async () => {
  try {
    const res = await getPostsApi({ page: pagination.page, size: pagination.pageSize })
    if(res.code === 200) {
      data.value = res.data.list
    } else {
      window.$message.success(res.msg)
    }
  } catch (err) {
    console.log(err)
  }
}
</script>

<template>
  <n-data-table
    bordered
    :columns="columns"
    :data="data"
    :pagination="pagination"
  />
</template>