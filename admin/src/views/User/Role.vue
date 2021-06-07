<template>
  <compage>
    <div class="option-area flex-row">
      <div class="left flex-row">
        <!-- <div style="width: 60px; margin-right: 20px">搜索</div>
        <el-input style="margin-right: 20px" v-model="searchParams.name" size="medium" placeholder="请输入用户名"></el-input>
        <el-button size="medium" type="primary" @click="search">搜索</el-button> -->
      </div>
      <div class="right">
        <el-button size="medium" type="primary" @click="addDefault">添加</el-button>
      </div>
    </div>
    <el-divider></el-divider>
    <m-table
      :table-data="tableData"
      :table-columns="tableColumns"
      :table-options="tableOptions"
      :total="total"
      :page="searchParams.page"
      :size="searchParams.size"
      @clickButton="clickButton"
      @pageChange="pageChange"
      @sizeCchange="sizeChange"
    />

    <el-dialog
      :title="formOptions.title"
      :visible.sync="formVisible"
      width="600px"
    >
      <el-form label-position="top" :model="form" :rules="rules" size="small">
        <el-form-item label="角色名称" prop="name">
          <el-input v-model="form.name" :disabled="formOptions.disabled" placeholder="请输入角色名称"></el-input>
        </el-form-item>
        <el-form-item label="角色描述" prop="description">
          <el-input v-model="form.description" :disabled="formOptions.disabled" placeholder="请输入角色描述"></el-input>
        </el-form-item>
        <el-form-item label="权限菜单">
          <el-tree
            ref="menuTree"
            :data="menus"
            show-checkbox
            node-key="_id"
          >
          </el-tree>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button size="small" type="primary" @click="formOptions.type === 'ADD' ? add(): update() ">确 定</el-button>
        <el-button size="small" @click="formVisible = false">取 消</el-button>
      </span>
    </el-dialog>
  </compage>
</template>

<script>
import { rolesUrl, menusUrl }  from '@/api'
export default {
  data() {
    return {
      searchParams: {
        page: 1,
        size: 10
      },
      tableData: [],
      tableColumns: [
        { label: '角色名称', prop: 'name' },
        { label: '角色描述', prop: 'description' }
      ],
      tableOptions: {
        label: '操作',
        width: '250px',
        options: [
          {
            type: 'primary',
            text: '修改',
            method: 'updDefault'
          },
          {
            type: 'danger',
            text: '删除',
            method: 'del'
          }
        ]
      },
      total: 0,
      menus: [],
      form: {},
      rules: {
        name: [
          { required: true, message: '请输入角色名称', trigger: 'blur' }
        ]
      },
      formVisible: false,
      formOptions: {}
    }
  },
  created() {
    this.init()
    this.getMenu()
  },
  methods: {
    // 初始化
    async init() {
      const { data } = await this.$http.get(rolesUrl)
      this.tableData = data
    },
    async getMenu() {
      const { data } = await this.$http.get(menusUrl)
      this.menus = this.formatMenu(data)
    },
    formatMenu(menus) {
      return menus.map(item => {
        item.label = item.meta.title
        if(item.children && item.children.length > 0) {
          item.children = this.formatMenu(item.children)
        }
        return item
      })
    },
    addDefault() {
      this.formOptions = this.$setForm('ADD')
      this.form = {}
      this.formVisible = true
    },
    updDefault(row) {
      console.log('tag', row)
    },
    add () {
      this.form.menuId = this.$refs.menuTree.getCheckedNodes(false, true).map(item => item._id)
      console.log('add', this.form)
    },
    del({ name, _id }) {
      this.$confirm(`确定删除${name}?`, '警告',{
        type: 'warning'
      }).then(() => {
        console.log('_id', _id)
      }).catch(() => {})
      
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