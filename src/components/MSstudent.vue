<template>
  <el-table :data="rateTableData" stripe style="width: 100%">
    <el-table-column prop="college" label="所属院系"></el-table-column>
    <el-table-column prop="no" label="教师编号"></el-table-column>
    <el-table-column prop="name" label="姓名"></el-table-column>
    <el-table-column prop="lessonNo" label="课程编号"></el-table-column>
    <el-table-column prop="lesson" label="课程名称"></el-table-column>
    <el-table-column prop="date" label="上课学期"></el-table-column>
    <el-table-column prop="rate" label="操作" fixed="right">
      <template slot-scope="scope">
        <el-rate v-model="scope.row.rate" show-text disabled></el-rate>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Student",
  data() {
    return {
    };
  },
  computed: mapGetters(["rateTableData"])
};
</script>