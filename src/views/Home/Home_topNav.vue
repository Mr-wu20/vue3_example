<template>
  <div class="nav_list">
    <li v-for="(list, index) in listData" :key="index">
      <a href=":javascript">
        <img :src="list.icon" alt="" />
        <span>{{ list.text }}</span>
      </a>
    </li>
  </div>
</template>

<script setup>
const listData = [
  { icon: '/src/assets/images/home_topNav_icon/caitu.png', text: '裁图' },
  { icon: '/src/assets/images/home_topNav_icon/bianji.png', text: '编辑' },
  { icon: '/src/assets/images/home_topNav_icon/font.png', text: '字体' },
  { icon: '/src/assets/images/home_topNav_icon/phone.png', text: '手机' }
]
</script>

<style scoped>
.nav_list {
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center; /*如果flex-direction：row；代表垂直居中 ；如果flex-direction：column；则代表水平居中*/
  justify-content: center; /*如果flex-direction：row；代表水平居中；如果flex-direction：column；则代表垂直居中*/
  background-color: rgb(248, 249, 252);
  height: 50px;
}
li {
  list-style-type: none;
  float: left;
  text-align: center;

  padding-right: 10px;
}
a {
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
  font-size: 14px;
  height: 100%;
}
img {
  height: 20px;
  width: 20px;
}
span {
  padding-left: 5px;
}
</style>
