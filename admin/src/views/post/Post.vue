<script lang="ts" setup>
import { onBeforeMount, reactive, ref } from 'vue';
import { PaginationProps, TableColumnData, Message } from '@arco-design/web-vue';
import { IconPlus, IconDelete } from '@arco-design/web-vue/es/icon';
import { getPostsApi } from '@/api'
import { IPost } from '@/types'

onBeforeMount(() => {
  getPosts()
})

const search = ref({});

const columns: TableColumnData[] = [
  {
    title: '标题',
    dataIndex: 'title',
    align: 'center',
  },
  {
    title: '内容',
    dataIndex: 'content',
    align: 'center'
  },
  {
    title: '操作',
    slotName: 'option',
    fixed: 'right',
    align: 'center',
    width: 200,
  }
]

const pagination = reactive<PaginationProps>({
  current: 1,
  pageSize: 10,
  total: 0,
})

const data = ref<IPost[]>([])

/** 获取帖子列表 */
const getPosts = async () => {
  try {
    const res = await getPostsApi({ page: pagination.current, size: pagination.pageSize })
    if(res.code === 200) {
      data.value = res.data.list;
      pagination.total = res.data.total;
    } else {
      Message.success(res.msg)
    }
  } catch (err) {
    console.log(err)
  }
}
</script>

<template>
  <a-card>
    <a-form :model="search" layout="inline">
        <a-form-item label="标题">
          <a-input />
        </a-form-item>
        <a-form-item>
          <a-space>
            <a-button type="primary">搜 索</a-button>
            <a-button>重 置</a-button>
          </a-space>
        </a-form-item>
    </a-form>
    <a-space style="margin-bottom: 12px;">
      <a-button type="primary">
        <template #icon> <icon-plus /> </template>
        新增
      </a-button>
      <a-button type="outline" status="danger">
        <template #icon> <icon-delete /> </template>
        批量删除
      </a-button>
    </a-space>
    <a-table
      :bordered="{ cell: true }"
      :columns="columns"
      :data="data"
      :pagination="pagination"
    >
      <template #option>
        <a-space>
          <a-button type="text">编 辑</a-button>
          <a-button type="text">删 除</a-button>
        </a-space>
      </template>
    </a-table>
  </a-card>
</template>