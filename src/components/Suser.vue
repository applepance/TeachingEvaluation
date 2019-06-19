<template>
<div class="all">
  <el-table
    :data="stuTableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%"
    stripe
  >
    <el-table-column label="学院" prop="college"></el-table-column>
    <el-table-column label="用户编号" prop="no"></el-table-column>
    <el-table-column label="姓名" prop="name"></el-table-column>
    <el-table-column label="课程编号" prop="lessonNo"></el-table-column>
    <el-table-column label="课程名称" prop="lesson"></el-table-column>
    <el-table-column label="学期" prop="date"></el-table-column>
  </el-table>

  <el-input v-model="search" size="large" class="topRight" placeholder="输入关键字搜索"/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      search: ""
    };
  },
  computed: mapGetters(["stuTableData"]),
};
</script>

<style scoped>
.all {
  height: 100%;
  width: 100%;
}
.topRight {
  width: 70%;
  padding: 1rem;
}
</style>