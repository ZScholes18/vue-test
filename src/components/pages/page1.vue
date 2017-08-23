<template>
  <div>
    <handle-container>
        <anch-button class="f-fl" href="#" text="新建" @click="newEdit" />
        <SearchBar class="f-fr searchbar" placeholder="请输入名字" mutationName='resetListData' :callback="callback" @searchClick="searchClick"/>
    </handle-container>
    <data-table :isMultipleSelect="true"  :tableData="tableData" class="datatable"/>
  </div>
</template>
<script>
// import { Container, SearchBar, DataTable } from './index';

import { SearchBar , HandleContainer,AnchButton } from 'components/basic';
import DataTable from 'components/DataTable';
import api from 'api';

export default {
  name: 'page1',
  data: function () {
    return {
      count: 0
    }
  },
  computed: {
        tableData() {
            return this.$store.state.tableList.listData;
        }
  },
  components: {
    SearchBar,
    DataTable,
    HandleContainer,
    AnchButton
  },
  methods: {
    callback(responseData) {
        this.$store.commit('resetListData', responseData);
    },
    searchClick(condition) {
        api.searchTest(condition,this.callback);
    },
    newEdit() {
        alert("new");
    }
  }
};
</script>
<style scoped>
.searchbar {
    width:200px;
}
.datatable {
  margin-top: 10px;
}
</style>

