<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter, Router } from 'vue-router';
import { FieldRule, Message } from '@arco-design/web-vue';
import { setToken } from '@/utils';
import { ILoginForm } from '@/types';
import { login } from '@/api';

const router: Router = useRouter();

const loginForm = ref<ILoginForm>({
  username: '',
  password: ''
});

const formRef = ref<any>(null);
const rules = ref<Record<string, FieldRule | FieldRule[]>>({
  username: { required: true, message: '请输入用户名', },
  password: { required: true, min: 6, message: '请输入密码' },
});

const handleValidateClick = async () => {
  try {
    const valid = await formRef?.value.validate();
    if(!valid) {
      const { code, data, msg } = await login(loginForm.value);
      if(code === 200) {
        setToken(data);
        router.push('/');
      } else {
        Message.error(msg);
      }
    }
  } catch (err) {
    console.log('登录失败', err);
  }
}

const handleReset = () => {
  loginForm.value.username = '';
  loginForm.value.password = '';
}
</script>

<template>
  <div class="login-page">
    <a-card>
      <div style="text-align: center; padding: 10px; font-size: 24px;">空澄博客管理系统</div>
      <a-divider margin="0" />
      <a-form
        class="login-form"
        ref="formRef"
        :model="loginForm"
        :rules="rules"
        size="medium"
      >
        <a-form-item label="用户名" field="username" :validate-trigger="['blur']">
          <a-input v-model="loginForm.username" placeholder="请输入用户名" />
        </a-form-item>
        <a-form-item label="密码" field="password" :validate-trigger="['blur']">
          <a-input v-model="loginForm.password" placeholder="请输入密码" />
        </a-form-item>
      </a-form>
      <a-divider margin="10" />
      <div class="login-btns">
        <a-space>
          <a-button type="primary" secondary attr-type="button" @click="handleValidateClick">
            登录
          </a-button>
          <a-button @click="handleReset">重置</a-button>
        </a-space>
      </div>
    </a-card>
  </div>
</template>

<style lang="scss" scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  .login-form {
    width: 500px;
    padding: 40px 30px 0px;
    box-sizing: border-box;
  }

  .login-btns {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
