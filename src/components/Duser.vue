<template>
  <el-table
    :data="stuTableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%"
  >
    <el-table-column label="学院" prop="college"></el-table-column>
    <el-table-column label="编号" prop="no"></el-table-column>
    <el-table-column label="姓名" prop="name"></el-table-column>
    <el-table-column label="课程编号" prop="lessonNo"></el-table-column>
    <el-table-column label="课程名称" prop="lesson"></el-table-column>
    <el-table-column label="学期" prop="date"></el-table-column>

    <el-table-column align="right">
      <template slot="header"></template>
      <template slot-scope="scope">
        <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
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
    'handleDelete'
  ]),
  computed: mapGetters(["stuTableData"])
};
</script>