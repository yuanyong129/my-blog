<template>
  <div class="login-wrap flex-row">
    <div class="bg"></div>
    <div class="form box-shadow">
      <div class="title text-black">注册</div>
      <el-form ref="form" :model="form" :rules="rules" label-position="top" size="medium" aria-autocomplete="off">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
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
    register() {
      this.$refs.form.validate(async valid => {
        if (valid) {
          const res = this.$http.post(usersUrl,this.form)
          if(res.state === 200) {
            this.$message.success('注册成功')
          }
        }
      })
      
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
  justify-content: center;
  align-items: center;
  &::after{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('~@/assets/bg.jpg') no-repeat center center;
    background-size: 100% 100%;
    opacity: 0.2;
    z-index: -1;
    filter: grayscale(70%);
  }
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