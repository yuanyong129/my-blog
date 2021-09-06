<template>
  <compage>
    <div class="option-area flex-row">
      <div class="left flex-row">
        <div style="width: 60px; margin-right: 20px">搜索</div>
        <el-input style="margin-right: 20px" v-model="searchParams.title" size="medium" placeholder="请输入帖子名称"></el-input>
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
      :total="tableTotal"
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
      <el-form label-position="top" :model="form" :rules="rules" size="medium">
        <el-form-item label="标题" prop="title">
          <el-input v-model="form.title" :disabled="formOptions.disabled" placeholder="请输入标题"></el-input>
        </el-form-item>
        <el-form-item label="分类" prop="type">
          <el-select style="width: 100%" v-model="form.type" :disabled="formOptions.disabled" placeholder="请选择分类">
            <el-option 
              v-for="item in selectTypes" 
              :key="item._id"
              :label="item.title"
              :value="item._id"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="标签" prop="tags">
          <el-select style="width: 100%" v-model="form.tags" multiple :disabled="formOptions.disabled" placeholder="请选择分类">
            <el-option 
              v-for="item in selectTags" 
              :key="item._id"
              :label="item.title"
              :value="item._id"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="内容" prop="content">
          <mavon-editor v-model="form.content" placeholder="请输入内容"></mavon-editor>
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
import { getPost, updPost, delPost, addPost, getParam, getPostById } from '@/api'
import { mavonEditor } from 'mavon-editor'
import { ParamOptions } from '@/utils'
import 'mavon-editor/dist/css/index.css'
export default {
  components: { mavonEditor },
  data() {
    return {
      searchParams: {
        title: '',
        page: 1,
        size: 10
      },
      tableData: [],
      tableColumns: [
        { label: '标题', prop: 'title' },
        { label: '分类', render: ({ type }) => {
          return type ? type.title : ''
        }},
        { label: '内容', prop: 'content' }
      ],
      tableOptions: {
        label: '操作',
        width: '250px',
        options: [
          { type: 'primary', text: '修改', method: 'updDefault' },
          { type: 'danger', text: '删除', method: 'del' }
        ]
      },
      tableTotal: 0,
      formOptions: {},
      form: {},
      rules: {},
      formVisible: false,

      selectTypes: [],
      selectTags: []
    }
  },
  created() {
    this.init()
    this.getSelectData()
  },
  methods: {
    search() {
      this.searchParams.page = 1
      this.init()
    },
    // 初始化
    async init() {
      try {
        const { data: { list, total }} = await getPost(this.searchParams)
        this.tableData = list
        this.tableTotal = total
      } catch (error) {
        console.log('获取帖子失败', error) 
      }
    },
    async getSelectData() {
      try {
        const { data: { list: types }} = await getParam( { typeId: ParamOptions.CATEGORY_ID, page: 1, size: 100 } )
        const { data: { list: tags }} = await getParam( { typeId: ParamOptions.TAG_ID, page: 1, size: 100 } )
        this.selectTags = tags
        this.selectTypes = types
      } catch (error) {
        console.log('获取下拉框数据失败', '')
      }
    },
    // 添加表单初始化
    addDefault() {
      this.formVisible = true
      this.formOptions = this.$setForm('ADD')
      this.form = {}
    },
    // 修改表单初始化
    async updDefault({ _id }) {
      this.formVisible = true
      this.formOptions = this.$setForm('UPD')
      const { data } = await getPostById(_id)
      this.form = data
    },
    // 添加
    async add() {
      const {state, message } = await addPost(this.form)
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
      const {state, message } = await updPost(this.form)
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
    async del({ _id, title }) {
      this.$confirm(`确认删除${title}?`, '提示',{
        confirmText: '确认',
        cancelText: '取消'
      }).then(async() => {
        const { message } = await delPost(_id)
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