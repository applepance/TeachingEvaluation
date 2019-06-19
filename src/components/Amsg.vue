<template>
  <el-table :data="rateTableData" style="width: 100%" stripe>
    <el-table-column prop="college" label="所属院系"></el-table-column>
    <el-table-column prop="no" label="教师编号"></el-table-column>
    <el-table-column prop="name" label="姓名"></el-table-column>
    <el-table-column prop="lessonNo" label="课程编号"></el-table-column>
    <el-table-column prop="lesson" label="课程名称"></el-table-column>
    <el-table-column prop="date" label="上课学期"></el-table-column>
    <el-table-column fixed="right" label="操作" width="100">
      <template slot-scope="scope">
        <el-button type="text" size="small" @click="addRate(scope.row)">添加信息</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  methods: {},
  data() {
    return {
    };
  },
  computed: mapGetters(["rateTableData"]),
  methods: mapActions([
    'addRate'
  ])
};
</script>