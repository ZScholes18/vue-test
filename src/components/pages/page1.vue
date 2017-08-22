<template>
  <div>
    <div class="f-cb">
      <SearchBar class="f-fr " placeholder="请输入名字" mutationName='resetListData' :callback="callback" @searchClick='searchHandle' />
    </div>
    <data-table class="datatable"/>
  </div>
</template>
<script>
// import { Container, SearchBar, DataTable } from './index';

import SearchBar from '../basic/SearchBar';
import DataTable from '../DataTable';
import api from '../../api';

export default {
  name: 'page1',
  data: function () {
    return {
      count: 0
    }
  },
  components: {
    SearchBar,
    DataTable
  },
  methods: {
    callback(responseData) {
      this.$store.commit('resetListData', responseData);
    },
    searchHandle(condition) {
        api.searchTest(condition,this.callback);
    }
  }
};
</script>
<style scoped>
.datatable {
  margin-top: 10px;
}
</style>

