<template>
  <div class="login-wrap flex-row">
    <div class="form">
      <div class="title text-white">注册</div>
      <el-form aria-autocomplete="off">
        <el-form-item label="用户名">
          <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="昵称">
          <el-input v-model="form.nickname" placeholder="请输入昵称"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="form.phone" placeholder="请输入手机号"></el-input>
        </el-form-item>
      </el-form>
      <el-button class="button" type="primary" @click="register">注册</el-button>
      <div style="text-align: center;margin-top: 10px">
        已有账号？<span style="cursor: pointer" class="text-skyblue" @click="backLogin">返回登录</span>
      </div>
    </div>
  </div>
</template>

<script>
import { usersUrl } from '@/api'
export default {
  data() {
    return {
      form: {}
    }
  },
  methods: {
    register() {
      this.$http.post(usersUrl,this.form)
    },
    backLogin() {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
.login-wrap{
  width: 100vw;
  height: 100vh;
  background: url('../../static/imgs/bg.jpg') no-repeat center center;
  background-size: 100% 100%;
  justify-content: center;
  align-items: center;
}
.form{
  padding: 10px 10px 20px;
  width: 500px;
  border-radius: 10px;
  backdrop-filter: saturate(180%) blur(20px);
  background: rgba($color: #ffffff, $alpha: .5);
}
.title{
  text-align: center;
  font-size: 28px;
}
.button{
  width: 100%;
}
</style>