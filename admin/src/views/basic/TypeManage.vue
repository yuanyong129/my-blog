<template>
  <compage>
    <div style="height: 30px"></div>
    <m-table
      :show-paging="false"
      :tableData="tableData"
      :tableColumns="tableColumns"
      :tableOptions="tableOptions"
      @clickButton="clickButton"
    />
  </compage>
</template>

<script>
import { TypeCategory } from '@/utils'
export default {
  data() {
    return {
      tableData: TypeCategory,
      tableColumns: [
        { label: '唯一标识', prop: 'typeId' },
        { label: '标题', prop: 'title' },
        { label: '内容', prop: 'remark' }
      ],
      tableOptions: {
        label: '操作',
        width: '250px',
        options: [
          { type: 'success', text: '管理内容', method: 'gotoParams' }
        ]
      }
    }
  },
  methods: {
    search() {
      this.searchParams.page = 1
      this.init()
    },
    // 初始化
    // async init() {
    //   try {
    //     const { data } = await getType(this.searchParams)
    //     this.tableData = data
    //   } catch (error) {
    //     console.log('获取帖子失败', error) 
    //   }
    // },
    // 添加表单初始化
    // addDefault() {
    //   this.formVisible = true
    //   this.formOptions = this.$setForm('ADD')
    //   this.form = {}
    // },
    // 修改表单初始化
    // updDefault(row) {
    //   this.formVisible = true
    //   this.formOptions = this.$setForm('UPD')
    //   this.form = Object.assign({}, row)
    // },
    // 添加
    // async add() {
    //   const {state, message } = await addType(this.form)
    //   if (state === 200) {
    //     this.$message({
    //       message,
    //       type: 'success'
    //     })
    //     this.formVisible = false
    //     this.searchParams.page = 1
    //     this.init()
    //   }
    // },
    // 修改
    // async update() {
    //   const {state, message } = await updType(this.form)
    //   if (state === 200) {
    //     this.$message({
    //       message,
    //       type: 'success'
    //     })
    //     this.formVisible = false
    //     this.searchParams.page = 1
    //     this.init()
    //   }
    // },
    // 删除
    // async del({ _id, title }) {
    //   this.$confirm(`确认删除${title}?`, '提示',{
    //     confirmText: '确认',
    //     cancelText: '取消'
    //   }).then(async() => {
    //     const { message } = await delType(_id)
    //     this.$message({
    //       message,
    //       type: 'success'
    //     })
    //     this.searchParams.page = 1
    //     this.init()
    //   }).catch(() => {})
    // },
    gotoParams({ typeId }) {
      this.$router.push(`/basic/param?_id=${typeId}`)
    },
    clickButton(method, row){
      this[method](row)
    },
    // 页码改变事件
    pageChange(page) {
      this.searchParams.page = page
      this.init()
    },
    // pageSize改变事件
    sizeChange(size) {
      this.searchParams.size = size
      this.init()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>