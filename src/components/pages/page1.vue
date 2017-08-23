<template>
  <div>
    <handle-container>
        <anch-button class="f-fl" href="#" text="xinjian" @click="newEdit" />
        <SearchBar class="f-fr searchbar" placeholder="请输入名字" mutationName='resetListData' :callback="callback" @searchClick="searchClick"/>
    </handle-container>
    <data-table class="datatable"/>
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

