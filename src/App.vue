<template>
  <div id="app">
    <HeaderExtends class="header" :class="{to_wide:isCollapse,to_narrow:!isCollapse}">
       <span slot="menu-btn" class="fa fa-bars f-csp" style="margin-left:10px;color:white" @click="toggleMenu"></span>
    </HeaderExtends>
    <side-menu class="menu" :isCollapse="isCollapse" />
    <div is="Content" class="f-cb content" :class="{to_wide:isCollapse,to_narrow:!isCollapse}">
        <page1/>
    </div>
  </div>
</template>

<script>
import { HeaderExtends, SideMenu } from './components';
import Page1 from './components/pages/page1';
import {Content} from './components/basic';
export default {
  name: 'app',
  data: function () {
    return {
      count: 0,
      isCollapse: false
    }
  },
  components: {
    HeaderExtends,
    SideMenu,
    Content,
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
    methods: {
      toggleMenu() {

        this.isCollapse = !this.isCollapse
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
  margin:0;
}
.menu {
  position:absolute;
  top:0;
  height:100%;
  background-color:#2c3e50
  /*overflow-y: auto;*/
  /*overflow-x:hidden;*/
}
.header,.content {
  margin-left:200px
}
.to_wide {
  margin-left:64px;
  transition: 0.4s; 
}
.to_narrow {
  margin-left:200px;
  transition:0.4s;
}
</style>
