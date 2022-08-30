<template>
  <div class="header">
    <a href="/">
      <img :src="logPath" alt="" />
    </a>
    <div class="btn">
      <button @click="test">注册/登录</button>
    </div>
  </div>
</template>

<script setup>
import axios from '../../utils/axios'

const logPath = '/src/assets/images/log/logo.png'

const test = () => {
  axios.post('/api/user/test').then((value) => {
    console.log(value)
  })
}
</script>

<style scoped>
.header {
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}
img {
  height: 36px;
  width: auto;
  vertical-align: middle;
}
button {
  cursor: pointer;
  border: none;
  border-radius: 4px;
  background: #66cc66;
  color: #fff;
  margin-right: 6px;
  padding: 4px 16px;
  font-size: 12px;
}
</style>
