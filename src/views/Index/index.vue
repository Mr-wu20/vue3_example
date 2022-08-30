<template>
  <div>
    <top-nav></top-nav>
    <el-container>
      <el-aside width="200px">
        <left-aside></left-aside>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </div>
</template>

<script setup>
import topNav from './topNav.vue'
import leftAside from './leftAside.vue'
</script>

<style>
.el-container {
  margin-top: 10px;
}
</style>
