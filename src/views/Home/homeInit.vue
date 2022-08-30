<template>
  <div class="mian">
    <HomeTopNav />
    <HomeLogAndLogin />
    <div class="wrap">
      <HomeLeftList />
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import HomeLeftList from './Home_leftList.vue'
import HomeTopNav from './Home_topNav.vue'
import HomeLogAndLogin from './Home_logAndLogin.vue'
</script>

<style scoped>
.mian {
  margin: 0;
  padding: 0;
}
.wrap {
  display: flex;
  align-items: center;
  padding-right: 10px;
}
</style>
