<template>
  <compage>
    <div class="option-area flex-row">
      <div class="left flex-row">
        <div style="width: 60px; margin-right: 20px">搜索</div>
        <el-input style="margin-right: 20px" v-model="searchParams.name" size="medium" placeholder="请输入用户名"></el-input>
        <el-button size="medium" type="primary" @click="search">搜索</el-button>
      </div>
      <div class="right">
        <el-button size="medium" type="primary" @click="addDefault">添加</el-button>
      </div>
    </div>
    <el-divider></el-divider>
    <m-table
      :tableData="tableData"
      :tableColumns="tableColumns"
      :tableOptions="tableOptions"
      :total="total"
      :page="searchParams.page"
      :size="searchParams.size"
      @clickButton="clickButton"
      @pageChange="pageChange"
      @sizeChange="sizeChange"
    />

    <el-dialog
      :title="formOptions.title"
      :visible.sync="formVisible"
      width="70%"
    >
      <el-form class="grid-form" label-position="top" :model="form" :rules="rules" size="small">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username" :disabled="formOptions.disabled" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item v-if="formOptions.type === 'ADD'" label="密码" prop="password">
          <el-input v-model="form.password" :disabled="formOptions.disabled" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="昵称" prop="nickname">
          <el-input v-model="form.nickname" :disabled="formOptions.disabled" placeholder="请输入昵称"></el-input>
        </el-form-item>
        <el-form-item label="角色">
          <el-select style="width: 100%" v-model="form.roleId" :disabled="formOptions.disabled" placeholder="请选择角色">
            <el-option
              v-for="(role, index) in roles"
              :key="index"
              :label="role.name"
              :value="role._id"
            />
          </el-select>
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
import { usersUrl, rolesUrl } from '@/api'
export default {
  data() {
    return {
      searchParams: {
        name: '',
        page: 1,
        size: 10
      },
      tableData: [
        {
          name: '张三',
          age: 12
        },
        {
          name: '李四',
          age: 16
        }
      ],
      tableColumns: [
        { label: '用户名', prop: 'username' },
        { label: '昵称', prop: 'nickname' }
      ],
      tableOptions: {
        label: '操作',
        width: '250px',
        options: [
          { type: 'info', text: '查看', method: 'getInfo' },
          { type: 'primary', text: '修改', method: 'updDefault' },
          { type: 'danger', text: '删除', method: 'del' }
        ]
      },
      total: 0,
      formOptions: {},
      form: {},
      rules: {},
      formVisible: false,
      roles: []
    }
  },
  created() {
    this.init()
    this.getRoles()
  },
  methods: {
    search() {
      this.searchParams.page = 1
      this.init()
    },
    // 初始化
    async init() {
      const { data } = await this.$http.get(usersUrl, {params: this.searchParams})
      this.tableData = data
    },
    // 获取所有角色
    async getRoles() {
      const { data } = await this.$http.get(rolesUrl)
      this.roles = data
    },
    // 添加表单初始化
    addDefault() {
      this.formVisible = true
      this.formOptions = this.$setForm('ADD')
      this.form = {}
    },
    // 修改表单初始化
    updDefault(row) {
      this.formVisible = true
      this.formOptions = this.$setForm('UPD')
      this.form = Object.assign({}, row)
    },
    // 查看表单
    getInfo(row) {
      this.formVisible = true
      this.formOptions = this.$setForm('GET')
      this.form = row
    },
    // 添加
    async add() {
      const {state, message } = await this.$http.post(usersUrl, this.form)
      if (state === 200) {
        this.$message({
          message,
          type: 'success'
        })
        this.formVisible = false
        this.searchParams.page = 1
        this.init()
      }
    },
    // 修改
    async update() {
      const {state, message } = await this.$http.put(usersUrl, this.form)
      if (state === 200) {
        this.$message({
          message,
          type: 'success'
        })
        this.formVisible = false
        this.searchParams.page = 1
        this.init()
      }
    },
    // 删除
    async del({ _id, username }) {
      this.$confirm(`确认删除${username}?`, '提示',{
        confirmText: '确认',
        cancelText: '取消'
      }).then(async() => {
        const { message } = await this.$http.delete(usersUrl + '/' +_id)
        this.$message({
          message,
          type: 'success'
        })
        this.searchParams.page = 1
        this.init()
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