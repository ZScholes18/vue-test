<template>
    <el-col :span="8">
        <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" @theme="dark" v-for="item in menuData">
            <el-menu-item v-if="!item.children" index="item.name">{{item.name}}</el-menu-item>
            <el-submenu v-else="item.chldren.length>0" index="item.name">
    
            </el-submenu>
            <el-submenu index="1">
                <template slot="title">导航一</template>
                <el-menu-item-group title="分组一">
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                    <el-submenu index="1-4-2">
                        <template slot="title">选项5</template>
                    </el-submenu>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="2">导航二</el-menu-item>
            <el-menu-item index="3">导航三</el-menu-item>
        </el-menu>
    </el-col>
</template>
<script>
export default {
    data() {
        return {
            menuData: [
                {
                    name: "1",
                    children: [
                        {
                            name: "1-1"
                        },
                        {
                            name: "1-2",
                            children: [
                                {
                                    name: "1-2-1"
                                }
                            ]
                        }
                    ]
                }
            ]
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
};
</script>