<template>
  <div class="login_block">
    <h1>嘿哈！</h1>
    <el-input placeholder="请输入用户名"/>
    <el-input class="l-mt" placeholder="请输入密码" type='password'/>
    <el-button type="primary" class="button l-mt" @click="submit">登录</el-button>
  </div>
</template>

<script>
export default { 
  name:'login',
  methods: {
    submit() {
      this.$router.push('main');
    }
  }
}
</script>

<style scoped>
  .login_block {
    width:160px;
    margin:100px auto;
    text-align:center
  }
  .l-mt {
    margin-top:10px;
  }
  .button {
    width:100%
  }
</style>

