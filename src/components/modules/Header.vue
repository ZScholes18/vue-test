<template>
    <el-menu theme="dark" class="el-menu-demo ccnav f-cb" mode="horizontal">
        <div class="f-fl f-cb lh">    
            <slot name="menu-btn"></slot>
        </div>
        <div class="f-fl lh title">欢迎来到实况8的游戏世界！！</div>
    
    </el-menu>
</template>
<script>
export default {
    name: "Header",
    methods: {
        click: function () {
            alert(this.message);
        }
    },
    props: ['message']
}
</script>
<style>
.ccnav {
    height: 60px;
    background: linear-gradient(to top right, #408080,#52a3a3)

}
.lh {
    line-height: 60px;
}
.title {    
    color:white;
    margin-left:10px;
}
</style>

