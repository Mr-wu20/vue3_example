<template>
  <el-card>
    <div class="wrap">
      <div>后台管理系统</div>
      <div>
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            Dropdown List<el-icon class="el-icon--right"><arrow-down /></el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item :icon="Plus">Action 1</el-dropdown-item>
              <el-dropdown-item :icon="CirclePlusFilled"> Action 2 </el-dropdown-item>
              <el-dropdown-item :icon="CirclePlus">Action 3</el-dropdown-item>
              <el-dropdown-item :icon="Check">Action 4</el-dropdown-item>
              <el-dropdown-item :icon="CircleCheck">Action 5</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {}
</script>

<style scoped>
.wrap {
  display: flex;
  justify-content: space-between;
}
</style>
