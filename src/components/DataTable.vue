<template>
  <el-table
    ref="multipleTable"
    :data="tableData"
    border
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      label="日期"
      width="120">
      <template scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      show-overflow-tooltip>
    </el-table-column>
  </el-table>
</template>


  <script>
    export default {
      data() {
        return {
          multipleSelection: []
        }
      },
      computed:{
        tableData() {
          return this.$store.state.tableList.listData;
        }
      },
    }
  </script>
  <style>
    .el-table__body-wrapper {
      overflow: hidden;
    }
    .el-table__body-wrapper:hover {
      overflow: auto;
      transition:0.2s;
    }
  </style>
  
  