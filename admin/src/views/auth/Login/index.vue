<script lang="ts" setup>
import { ref } from 'vue'
import { NForm, NFormItem, NInput, NButton, FormInst, useMessage } from 'naive-ui'

const formValue = {
  username: '',
  password: ''
}
const formRef = ref<FormInst | null>(null)
const rules = {}
const message = useMessage()
const handleValidateClick = () => {
  
  console.log(message)
  message.success('success')
}
</script>

<template>
<n-form
    ref="formRef"
    :label-width="80"
    :model="formValue"
    :rules="rules"
    size="medium"
  >
    <n-form-item label="姓名" path="username">
      <n-input v-model:value="formValue.username" placeholder="输入姓名" />
    </n-form-item>
    <n-form-item label="年龄" path="password">
      <n-input v-model:value="formValue.password" placeholder="输入年龄" />
    </n-form-item>
    <n-form-item>
      <n-button attr-type="button" @click="handleValidateClick">
        验证
      </n-button>
    </n-form-item>
  </n-form>
  
</template>