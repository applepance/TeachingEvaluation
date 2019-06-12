<template>
  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="college" label="所属院系"></el-table-column>
    <el-table-column prop="no" label="教师编号"></el-table-column>
    <el-table-column prop="name" label="姓名"></el-table-column>
    <el-table-column prop="lessonNo" label="课程编号"></el-table-column>
    <el-table-column prop="lesson" label="课程名称"></el-table-column>
    <el-table-column prop="date" label="上课学期"></el-table-column>
    <el-table-column label="操作" width="100" fixed="right">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">评测</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      tableData: [
        {
          no: "1101",
          college: "软件",
          name: "王小虎",
          lessonNo: "111101",
          lesson: "XXX课",
          date: "2018-2019第二学期"
        },
        {
          no: "1101",
          college: "软件",
          name: "王小虎",
          lessonNo: "111101",
          lesson: "XXX课",
          date: "2018-2019第二学期"
        },
        {
          no: "1101",
          college: "软件",
          name: "王小虎",
          lessonNo: "111101",
          lesson: "XXX课",
          date: "2018-2019第二学期"
        },
        {
          no: "1101",
          college: "软件",
          name: "王小虎",
          lessonNo: "111101",
          lesson: "XXX课",
          date: "2018-2019第二学期"
        },
        {
          no: "1101",
          college: "软件",
          name: "王小虎",
          lessonNo: "111101",
          lesson: "XXX课",
          date: "2018-2019第二学期"
        },
        {
          no: "1101",
          college: "软件",
          name: "王小虎",
          lessonNo: "111101",
          lesson: "XXX课",
          date: "2018-2019第二学期"
        },
        {
          no: "1101",
          college: "软件",
          name: "王小虎",
          lessonNo: "111101",
          lesson: "XXX课",
          date: "2018-2019第二学期"
        }
      ]
    };
  },
  methods: {
    handleClick(row) {
      console.log(row)
    }
  }
};
</script>