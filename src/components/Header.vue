<template>
  <el-card class="header">
    <!-- 折叠按钮 -->
    <div class="collapse-btn">
      <el-icon v-if="true"><Fold /></el-icon>
      <el-icon v-else><Expand /></el-icon>
    </div>
    <!-- 标题 -->
    <div class="logo">后台管理系统</div>
    <!-- 用户信息 -->
    <div class="header-right">
      <div class="header-user-con">
        <!-- 用户头像 -->
        <div class="user-avator">
          <img src="../assets/images/img.jpg" />
        </div>
        <!-- 用户名下拉菜单 -->
        <el-dropdown class="user-name" trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            {{ userName }}
            <i class="el-icon-caret-bottom"></i>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <a href="https://github.com/lin-xin/vue-manage-system" target="_blank">
                <el-dropdown-item>项目仓库</el-dropdown-item>
              </a>
              <el-dropdown-item command="user">个人中心</el-dropdown-item>
              <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </el-card>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from '../utils/axios'

const userName = ref()
function getUserInfo() {
  axios.get('/api/users/getUserInfo').then((res) => {
    if (res.code === 2000) {
      userName.value = res.data.user_name
    }
  })
}
onBeforeMount(() => {
  getUserInfo()
})
// 用户名下拉菜单选择事件
const router = useRouter()
const handleCommand = (command) => {
  if (command === 'loginout') {
    localStorage.removeItem('token')
    router.push('/login')
  } else if (command === 'user') {
    router.push('/user')
  }
}
</script>

<style scoped>
.el-card {
  --el-card-border-color: var(--el-border-color-light);
  --el-card-border-radius: 4px;
  --el-card-padding: 0;
  --el-card-bg-color: var(--el-fill-color-blank);
}
.header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 22px;
  color: #000;
}
.collapse-btn {
  float: left;
  padding: 0 21px;
  cursor: pointer;
  line-height: 75px;
}
.header .logo {
  float: left;
  width: 250px;
  line-height: 70px;
}
.header-right {
  float: right;
  padding-right: 50px;
}
.header-user-con {
  display: flex;
  height: 70px;
  align-items: center;
}
.btn-bell-badge {
  position: absolute;
  right: 0;
  top: -2px;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background: #f56c6c;
  color: #fff;
}
.btn-bell .el-icon-bell {
  color: #fff;
}

.user-name {
  margin-left: 10px;
}
.user-avator {
  margin-left: 20px;
}
.user-avator img {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.el-dropdown-link {
  color: #000;
  cursor: pointer;
}
</style>
