<template>
  <div class="login-wrap flex-row">
    <div class="form">
      <div class="title text-white">管理模板</div>
      <el-form>
        <el-form-item label="用户名">
          <el-input v-model="form.username" prefix-icon="el-icon-user" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" prefix-icon="el-icon-lock" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
      </el-form>
      <el-button class="button" type="primary" @click="login" >登录</el-button>
      <div style="text-align: center; margin-top: 10px">
        没有账号？<span style="cursor: pointer" class="text-skyblue" @click="gotoRegister">立即注册</span>
      </div>
    </div>
  </div>
</template>

<script>
import { loginUrl } from '@/api'
import { setToken } from '@/utils/auth'
export default {
  data() {
    return {
      form: {}
    }
  },
  methods: {
    gotoRegister() {
      this.$router.push('/register')
    },
    async login() {
      const { token } = await this.$http.post(loginUrl, this.form)
      if (token) {
        setToken(token)
        this.$router.push('/')
      } 
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