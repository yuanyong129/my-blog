<template>
  <div class="login-wrap flex-row">
    <div class="form">
      <div class="title text-white">空澄的个人空间管理端</div>
      <el-form ref="form" :model="form" :rules="rules" label-position="top" size="medium">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username" prefix-icon="el-icon-user" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password" prefix-icon="el-icon-lock" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
      </el-form>
      <el-button size="medium" class="button" type="primary" @click="login" >登录</el-button>
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
      form: {},
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    gotoRegister() {
      this.$router.push('/register')
    },
    async login() {
      this.$refs.form.validate(async valid => {
        if (valid) {
          const { token } = await this.$http.post(loginUrl, this.form)
          if (token) {
            setToken(token)
            this.$router.push('/')
          } 
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-wrap{
  width: 100vw;
  height: 100vh;
  background: url('~@/assets/bg.jpg') no-repeat center center;
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
  padding: 10px 0;
}
.button{
  width: 100%;
}
</style>