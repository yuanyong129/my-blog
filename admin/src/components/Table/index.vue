<template>
  <div class="wrap">
    <el-table
      class="m-table box-shadow"
      align="center"
      border
      stripe
      :row-key="rowKey"
      :data="tableData"
      :tree-props="treeProps"
    >
      <el-table-column
        v-for="(item, index) in tableColumns"
        :key="index"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
        align="center">
        <template slot-scope="scope">
          <span v-if="item.render" :style="`color:${item.color ? item.color(scope.row) : 'black'}`">{{ item.render(scope.row) }}</span>
          <span v-else>{{ scope.row[item.prop] }}</span>
        </template>
      </el-table-column>
      <el-table-column
        v-if="tableOptions.label"
        :fixed="tableOptions.fixed"
        :label="tableOptions.label"
        :width="tableOptions.width"
        align="center">
        <template slot-scope="{ row }">
          <el-button
            v-for="(item ,index) in tableOptions.options"
            :type="item.type"
            size="mini"
            :key="index"
            @click="click(item.method, row)">
            {{ item.text }}</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      v-if="showPaging"
      :current-page="page"
      :page-count="size"
      @size-change="sizeChange"
      @current-change="pageChange"
      layout="prev, pager, next"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    tableData: {
      type: Array,
      default: () => []
    },
    tableColumns: {
      type: Array,
      default: () => []
    },
    tableOptions: {
      type: Object,
      default: () => { return {} }
    },
    treeProps: {
      type: Object,
      default: () => { return {} }
    },
    rowKey: {
      type: String,
      default: ''
    },  
    total: {
      type: Number,
      default: 0
    },
    page: {
      type: Number,
      default: 1
    },
    size: {
      type: Number,
      default: 10
    },
    showPaging: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    click(method, row) {
      this.$emit('clickButton', method, row)
    },
    sizeChange(size) {
      this.$emit('sizeChange', size)
    },
    pageChange(page) {
      this.$emit('pageChange', page)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.m-table{
  width: 98%;
  margin: 0 auto;
}
.el-pagination{
  margin: 15px auto;
  text-align: center;
}
</style>
