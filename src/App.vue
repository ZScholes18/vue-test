<template>
  <div id="app">
    <HeaderExtends class="header" message="message" />
    <el-row>
      <el-col :span="24">
        <container class="f-cb">
          <search-bar class="f-fr" placeholder="请输入名字" mutationName='resetListData' :callback="callback"/>
        </container>
      </el-col>
    </el-row>
    <data-table>
  </div>
</template>

<script>
import { HeaderExtends,Container,DataTable } from './components';
import SearchBar from './components/SearchBar';
export default {
  name: 'app',
  data:function() {
    return {
      count:0,
      callback:function(responseData) {
        alert('after');
        this.$store.commit('resetListData', responseData);
      }
    }
  },
  components: {
    HeaderExtends,
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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}

</style>
