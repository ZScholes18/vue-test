<template>
    <div id="app">
        <HeaderExtends class="header" :class="{to_wide:isCollapse,to_narrow:!isCollapse}">
            <span slot="menu-btn" class="fa fa-bars f-csp" style="margin-left:10px;color:white;line-height:inherit" @click="toggleMenu"></span>
        </HeaderExtends>
        <side-menu class="menu" :isCollapse="isCollapse" :class="{menu_hide:isCollapse,menu_show:!isCollapse}" />
        <Container class="f-cb content" :class="{to_wide:isCollapse,to_narrow:!isCollapse}">
            <page1 v-if="showPage"/>
        </Container>
    </div>
</template>

<script>
import { HeaderExtends, SideMenu } from './components';
import { Container } from './components/basic';
export default {
    name: 'app',
    data: function () {
        return {
            count: 0,
            isCollapse: false,
            showPage:true,
        }
    },
    components: {
        HeaderExtends,
        SideMenu,
        Container,
        page1(resolve) {
            require(['./components/pages/page1'],resolve);
        }
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
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    /*margin-top: 60px;*/
    margin: 0;
}

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
