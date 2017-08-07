<template>
  <div id="app">
    <HeaderExtends class="header" message="message" />
    <el-row>
      <el-col :span="24">
        <page1/>
      </el-col>
    </el-row>
    <data-table>
  </div>
</template>

<script>
import { HeaderExtends,SiderMenu } from './components';
import Page1 from './components/page1';
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
    Page1
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
