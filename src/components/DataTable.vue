<template>
  <el-table
    ref="multipleTable"
    :data="tableData"
    border
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column v-if="isSingleSelect" width="55">
      <template scope="scope">
        <el-radio class="radio" v-model="index" :label="scope.$index">备选项</el-radio>
      </template>
    </el-table-column>
    <el-table-column
      v-if="isMultipleSelect"
      type="selection"
      width="55"
      >
    </el-table-column>
    <el-table-column
      label="日期"
      width="120"
      >
      <template scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
      >
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
          multipleSelection: [],
          index:0
        }
      },
      methods: {
          handleSelectionChange(val) {
              console.log(val)
          },
          cellClick(row ,column,cell,event) {
              console.log(row);
              console.log(column);
              console.log(cell);
              console.log(event);

          }
       },
      props:{
          tableData:{
              type:Array
          },
          isSingleSelect:{
              type:Boolean
          },
          isMultipleSelect:{
              type:Boolean
          }
      }
    }
  </script>
  <style>

  </style>

