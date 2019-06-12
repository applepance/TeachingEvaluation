<template>
  <div class="sidebar">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#eeeeee"
      router
    >
      <el-menu-item index="/main/admin">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>评测信息管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/main/admin/amsg">添加信息</el-menu-item>
          <el-menu-item index="/main/admin/smsg">查询信息</el-menu-item>
          <el-menu-item index="/main/admin/umsg">更新信息</el-menu-item>
          <el-menu-item index="/main/admin/dmsg">删除信息</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-user-solid"></i>
          <span>用户信息管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/main/admin/auser">添加用户</el-menu-item>
          <el-menu-item index="/main/admin/suser">查询用户</el-menu-item>
          <el-menu-item index="/main/admin/uuser">更新用户</el-menu-item>
          <el-menu-item index="/main/admin/duser">删除用户</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'SlideOfAdm',
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
