<template>
  <div class="sidebar">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#eeeeee"
      router
    >
      <el-menu-item index="/main/student">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>信息查询</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/main/student/ts">教师信息</el-menu-item>
          <el-menu-item index="/main/student/ms">评测信息</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'SlideOfStudent',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.sidebar{
  display: block;
  position: absolute;
  width: 200px;
  left: 0;
  top: 70px;
  bottom: 0;
  background: #2e363f;
}
.sidebar > ul {
  height: 100%;
}
</style>
