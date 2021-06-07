<template>
  <compage>
    <div class="option-area flex-row">
      <div class="left"></div>
      <div class="right">
        <el-button size="medium" type="primary" @click="addDefault">添加</el-button>
      </div>
    </div>
    <el-divider></el-divider>
    <!-- 表格 -->
    <m-table 
      :table-data="tableData"
      :table-columns="tableColumns"
      :table-options="tableOptions"
      :treeProps="{children: 'children', hasChildren: 'hasChildren'}"
      :show-paging="false"
      row-key="_id"
    />
    <!-- 表单 -->
    <el-dialog
      :title="formOptions.title"
      :visible.sync="formVisible"
      width="60%"
    >
      <el-form class="grid-form" label-position="top" :model="form" :rules="rules" size="small">
        <el-form-item label="菜单名称" prop="meta.name">
          <el-input v-model="form.meta.name" :disabled="formOptions.disabled" placeholder="请输入菜单名称"></el-input>
        </el-form-item>
        <el-form-item label="菜单图标" prop="meta.icon">
          <el-input v-model="form.meta.icon" :disabled="formOptions.disabled" placeholder="请输入菜单图标"></el-input>
        </el-form-item>
         <el-form-item label="路径" prop="path">
          <el-input v-model="form.path" :disabled="formOptions.disabled" placeholder="请输入路径"></el-input>
        </el-form-item>
        <el-form-item label="组件" prop="component">
          <el-input v-model="form.component" :disabled="formOptions.disabled" placeholder="请输入组件"></el-input>
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
import { menusUrl } from '@/api'
export default {
  data() {
    return {
      tableData: [],
      tableColumns: [
        { label: '菜单名称', render({ meta }){  return meta.title } },
        { label: '路径', prop: 'path' },
        { label: '菜单图标', render({ meta }){  return meta.icon } }
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
      form: { meta: {} },
      rules: {
        'meta.name': [{ required: true, message: '请输入菜单名称', trigger: 'blur' }],
        component: [{ required: true, message: '请输入组件', trigger: 'blur' }],
        path: [{ required: true, message: '请输入路径', trigger: 'blur' }]
      },
      formVisible: false,
      formOptions: {}
    }
  },
  created() {
    this.init()
  },
  methods: {
    async init() {
      const { data } = await this.$http.get(menusUrl)
      this.tableData = data 
    },
    addDefault() {
      this.formVisible = true
      this.formOptions = this.$setForm('ADD')
      this.form = { meta: {} }
    },
    updDefault() {},
    getInfo() {},
    del(){}
  }
}
</script>

<style lang="scss" scoped>

</style>