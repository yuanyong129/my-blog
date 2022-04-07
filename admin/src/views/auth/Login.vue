<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter, Router } from 'vue-router'
import { NForm, NFormItem, NInput, NButton, FormInst, useMessage } from 'naive-ui'
import { setToken } from '@/utils'

const router: Router = useRouter()

const loginForm = ref({
  username: '',
  password: ''
})

const formRef = ref<FormInst | null>(null)
const rules = {}
const message = useMessage()
const handleValidateClick = () => {
  console.log(loginForm.value)
  message.success('success')
  setToken('aaaa')
  router.push('/')
}
</script>

<template>
<div style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100vh;">
  <n-form
    class="fluent-card"
    style="width: 500px; padding: 30px; box-sizing: border-box;"
    ref="formRef"
    :model="loginForm"
    :rules="rules"
    size="medium"
  >
    <div style="text-align: center; padding: 10px; font-size: 24px;">空澄博客管理系统</div>
    <n-form-item label="用户名" path="username">
      <n-input v-model:value="loginForm.username" placeholder="请输入用户名" />
    </n-form-item>
    <n-form-item label="密码" path="password">
      <n-input v-model:value="loginForm.password" placeholder="请输入密码" />
    </n-form-item>
    <div style="text-align: right;">
      <n-button type="primary" secondary attr-type="button" @click="handleValidateClick">
        登录
      </n-button>
    </div>
  </n-form>
</div>
</template>