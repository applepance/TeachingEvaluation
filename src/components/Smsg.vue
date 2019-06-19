<template>
  <div class="all">
    <el-table
      :data="rateTableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%"
      stripe
    >
      <el-table-column prop="college" label="所属院系"></el-table-column>
      <el-table-column prop="no" label="教师编号"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="lessonNo" label="课程编号"></el-table-column>
      <el-table-column prop="lesson" label="课程名称"></el-table-column>
      <el-table-column prop="date" label="上课学期"></el-table-column>
    </el-table>
    <el-input v-model="search" placeholder="输入姓名关键字搜索" size="large" class="topRight"></el-input>
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
  computed: mapGetters(["rateTableData"]),
  methods: {}
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
