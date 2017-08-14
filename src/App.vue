<template>
  <div id="app" style="position:absolute;bottom:0;top:0;right:0;left:0">
    <HeaderExtends class="header" message="message" />
    <el-row class="f-cb">
      <el-col :span="menuWidth">
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <side-menu :isCollapse="isCollapse" />
      </el-col>
      <transition name="bounce">
      <el-col :span="contentWidth">
        <page1/>
      </el-col>
      </transition>
    </el-row>
  </div>
</template>

<script>
import { HeaderExtends, SideMenu } from './components';
import Page1 from './components/pages/page1';
export default {
  name: 'app',
  data: function () {
    return {
      count: 0,
      isCollapse: true
    }
  },
  components: {
    HeaderExtends,
    SideMenu,
    Page1
  },
  computed: {
        menuWidth() {
            if (this.isCollapse) {
                return 1;
            }
            else {
                return 4;
            }
        },
        contentWidth() {
            return this.isCollapse?23:20;
        }
    },
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
