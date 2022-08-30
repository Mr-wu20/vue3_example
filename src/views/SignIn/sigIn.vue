<template>
  <div class="main">
    <el-card shadow="always">
      <h3>后台管理系统</h3>
      <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules">
        <el-form-item label="账号" prop="email">
          <el-input placeholder="请输入账号" v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" placeholder="请输入密码" v-model="ruleForm.password"></el-input>
        </el-form-item>
      </el-form>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
        <el-button @click="resetForm(ruleFormRef)">重置</el-button>
      </el-form-item>
    </el-card>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

import axios from '../../utils/axios'

const router = useRouter()

// import axios from '../../utils/axios'
// import type { FormInstance, FormRules } from 'element-plus'
const ruleFormRef = ref()
const rules = reactive({
  email: [
    { required: true, message: '账号不能为空', trigger: 'blur' }
    // { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '密码不能为空', trigger: 'blur' }
    // { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
  ]
})
const ruleForm = reactive({
  email: '',
  password: ''
})

const submitForm = async (formEl) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      axios
        .post('api/users/login', {
          user_name: ruleForm.email,
          password: ruleForm.password
        })
        .then((res) => {
          console.log(res)
          if (res.code === 2000) {
            localStorage.setItem('token', res.data.token)
            router.replace('/')
            ElMessage({
              center: true,
              type: 'success',
              message: res.msg
            })
          } else {
            ElMessage({
              center: true,
              type: 'error',
              message: res.msg
            })
          }
        })
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<style scoped>
.main {
  /* height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25%; */
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.main >>> .el-form-item__content {
  justify-content: center;
}
h3 {
  display: flex;
  justify-content: center;
}
</style>
