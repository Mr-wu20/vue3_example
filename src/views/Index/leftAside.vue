<template>
  <div>
    <el-menu default-active="0" class="el-menu-vertical-demo">
      <el-sub-menu v-for="item in menuData" :key="item.id" :index="item.id + ' '">
        <template #title>
          <span>{{ item.title }}</span>
        </template>
        <el-menu-item
          v-for="subItem in item.children"
          :key="subItem.id"
          :index="'/' + subItem.path"
          >{{ subItem.title }}</el-menu-item
        >
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup>
const menuData = [
  {
    title: '博客相关',
    id: 1,
    icon: 'location',
    children: [
      {
        title: '博客首页',
        path: 'one',
        id: 1 - 1
      }
    ]
  },
  {
    title: 'APP相关',
    icon: 'location',
    id: 2,
    children: [
      {
        title: 'APP首页',
        path: 'two',
        id: 2 - 1
      }
    ]
  },
  {
    title: '小程序相关',
    id: 3,
    icon: 'location',
    children: [
      {
        title: '小程序首页',
        path: 'three',
        id: 3 - 1
      }
    ]
  }
]
</script>

<style></style>
