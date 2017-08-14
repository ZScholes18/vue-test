<template>
  <el-menu theme="dark" class="el-menu-demo ccnav" mode="horizontal">
  </el-menu>
</template>
<script>
export default {
  name:"Header",
  methods:{
      click:function(){
          alert(this.message);
      }
  },
  props:['message']
}
</script>
<style>
    .ccnav {
        height:60px;
    }
</style>

