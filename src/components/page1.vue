<template>
  <div>
    <el-row>
      <el-col :span="24">
        <container class="f-cb">
          <SearchBar class="f-fr" placeholder="请输入名字" mutationName='resetListData' :callback="callback" />
        </container>
      </el-col>
    </el-row>
    <data-table/>
  </div>
</template>
<script>
import { Container, SearchBar, DataTable } from './index';
// import Container from './container';
// import SearchBar from './SearchBar';
// import DataTable from './DataTable';

export default {
  name: 'page1',
  data: function () {
    return {
      count: 0
    }
  },
  components: {
    SearchBar,
    Container,
    DataTable
  },
  methods: {
    callback(responseData) {
      this.$store.commit('resetListData', responseData);
    }
  }
};
</script>
