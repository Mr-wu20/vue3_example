<template>
  <div class="left_list">
    <div>
      <ul>
        <li v-for="(list, index) in listData" :key="index" :class="list.class">
          <router-link class="a" :to="list.router">{{ list.text }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const listData = [
  { text: '为我推荐', class: 'tj', router: '/' },
  { text: '模板中心', class: 'ds', router: 'template' },
  { text: '素材中心', class: 'gj', router: 'materia' },
  { text: '形状中心', class: 'gy', router: 'shapecenter' },
  { text: 'DIY定制', class: 'xingzhuang', router: 'diy' },
  { text: '其他工具', class: 'vip', router: 'tools' },
  { text: '视频教程', class: 'ht', router: 'video' },
  { text: 'VIP会员', class: 'video-icon', router: 'vip' },
  { text: '关于我们', class: 'sj', router: 'aboutus' },
  { text: 'APP下载', class: 'download', router: 'download' }
]

// const clickSelect = (index) => {}
</script>

<style scoped>
.left_list {
  width: 180px;
  height: auto;
}
ul {
  margin-top: 20px;
}
li {
  height: 30px;
  line-height: 30px;
  list-style-type: none;
  margin: 4px 0;
  font-size: 12px;
}
li:hover {
  background-color: #f4f4f6;
}
li .select {
  background: #e4f4ff;
  border-radius: 4px;
}
.tj {
  background: url(/src/assets/images/left_list_svg/tj.svg) no-repeat 15px 6px;
  background-size: 20px 20px;
}
.ds {
  background: url(/src/assets/images/left_list_svg/ds.svg) no-repeat 15px 6px;
  background-size: 20px 20px;
}
.gj {
  background: url(/src/assets/images/left_list_svg/gj.svg) no-repeat 15px 6px;
  background-size: 20px 20px;
}
.gy {
  background: url(/src/assets/images/left_list_svg/gy.svg) no-repeat 15px 6px;
  background-size: 20px 20px;
}
.xingzhuang {
  background: url(/src/assets/images/left_list_svg/xingzhuang.svg) no-repeat 15px 6px;
  background-size: 20px 20px;
}
.vip {
  background: url(/src/assets/images/left_list_svg/vip.svg) no-repeat 15px 6px;
  background-size: 20px 20px;
}
.ht {
  background: url(/src/assets/images/left_list_svg/ht.svg) no-repeat 15px 6px;
  background-size: 20px 20px;
}
.video-icon {
  background: url(/src/assets/images/left_list_svg/video-icon.svg) no-repeat 15px 6px;
  background-size: 20px 20px;
}
.sj {
  background: url(/src/assets/images/left_list_svg/sj.svg) no-repeat 15px 6px;
  background-size: 20px 20px;
}
.download {
  background: url(/src/assets/images/left_list_svg/download.svg) no-repeat 15px 6px;
  background-size: 20px 20px;
}
.a {
  padding-left: 55px;
  text-decoration: none;
  color: black;
}
</style>
