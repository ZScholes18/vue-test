<template>
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo menu" @open="handleOpen" @close="handleClose">
        <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-message"></i>
                <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
                <span slot="title">分组一</span>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
                <span slot="title">选项4</span>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
        </el-submenu>
        <el-menu-item v-if="isShow" index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3">
            <i class="el-icon-setting"></i>
            <span slot="title">导航三</span>
        </el-menu-item>
    </el-menu>
</template>



<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
}
.menu {
    background:#fff;
    box-shadow: 1px 1px 5px #888888;
}
</style>

<script>
export default {
    data() {
        return {
            isShow:false
        }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    },
    props:["isCollapse"]
}
</script>
