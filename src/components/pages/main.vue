<template>
  <div>
    <header-extends class="header" :class="{to_wide:isCollapse,to_narrow:!isCollapse}">
            <span slot="menu-btn" class="fa fa-bars f-csp" style="margin-left:10px;color:white;line-height:inherit" @click="toggleMenu"></span>
        </header-extends>
        <side-menu class="menu" :isCollapse="isCollapse" :class="{menu_hide:isCollapse,menu_show:!isCollapse}" />
        <Container class="f-cb content" :class="{to_wide:isCollapse,to_narrow:!isCollapse}">
            <router-view>
            </router-view>
        </Container>
  </div>
</template>

<script>
// import { HeaderExtends, SideMenu } from 'components';
import HeaderExtends from '../HeaderExtends';
import SideMenu from '../SideMenu';
// import Page1 from 'components/pages/page1';
import { Container } from 'components/basic';
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
    Container,
    // Page1
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
      return this.isCollapse ? 23 : 20;
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
.menu {
  position: fixed;
  top: 0;
  bottom: 0;
  background-color: #2c3e50
  /*overflow-y: auto;*/
  /*overflow-x:hidden;*/
}

.header,
.content {
  margin-left: 200px
}

.to_wide {
  margin-left: 0;
  transition: 0.4s;
}

.to_narrow {
  margin-left: 200px;
  transition: 0.4s;
}

.menu_hide {
  margin-left: -200px;
  transition: 0.4s;
}

.menu_show {
  margin-left: 0;
  transition: 0.4s;
}

@keyframes to_naroow {
  from {
    margin-left: 200px;
  }
  to {
    margin-left: 200px;
  }
}
</style>