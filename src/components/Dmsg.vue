<template>
  <el-table
    :data="rateTableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%"
  >
    <el-table-column prop="college" label="所属院系"></el-table-column>
    <el-table-column prop="no" label="教师编号"></el-table-column>
    <el-table-column prop="name" label="姓名"></el-table-column>
    <el-table-column prop="lessonNo" label="课程编号"></el-table-column>
    <el-table-column prop="lesson" label="课程名称"></el-table-column>
    <el-table-column prop="date" label="上课学期"></el-table-column>
    <el-table-column align="right">
      <template slot="header"></template>
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="danger"
          @click="msgDelete(scope.row)"
        >删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      search: ""
    };
  },
  methods: mapActions([
    'msgDelete'
  ]),
  computed: mapGetters(["rateTableData"]),
};
</script>