<template>
  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="college" label="所属院系"></el-table-column>
    <el-table-column prop="no" label="教师编号"></el-table-column>
    <el-table-column prop="name" label="姓名"></el-table-column>
    <el-table-column prop="lessonNo" label="课程编号"></el-table-column>
    <el-table-column prop="lesson" label="课程名称"></el-table-column>
    <el-table-column prop="date" label="上课学期"></el-table-column>
    <el-table-column prop="rate" label="操作" fixed="right">
      <template slot-scope="scope">
        <el-rate v-if="scope.row.rate != 0" v-model="scope.row.rate" show-text disabled></el-rate>
        <el-rate v-else v-model="scope.row.rate" show-text @change="changeRate(scope.row)"></el-rate>
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
          date: "2018-2019第二学期",
          rate: 0
        },
        {
          no: "1101",
          college: "软件",
          name: "王小虎",
          lessonNo: "111101",
          lesson: "XXX课",
          date: "2018-2019第二学期",
          rate: 0
        },
        {
          no: "1101",
          college: "软件",
          name: "王小虎",
          lessonNo: "111101",
          lesson: "XXX课",
          date: "2018-2019第二学期",
          rate: 0
        },
        {
          no: "1101",
          college: "软件",
          name: "王小虎",
          lessonNo: "111101",
          lesson: "XXX课",
          date: "2018-2019第二学期",
          rate: 0
        },
        {
          no: "1101",
          college: "软件",
          name: "王小虎",
          lessonNo: "111101",
          lesson: "XXX课",
          date: "2018-2019第二学期",
          rate: 0
        },
        {
          no: "1101",
          college: "软件",
          name: "王小虎",
          lessonNo: "111101",
          lesson: "XXX课",
          date: "2018-2019第二学期",
          rate: 0
        },
        {
          no: "1101",
          college: "软件",
          name: "王小虎",
          lessonNo: "111101",
          lesson: "XXX课",
          date: "2018-2019第二学期",
          rate: 0
        }
      ]
    };
  },
  methods: {
    changeRate (row) {
      console.log(row)
    }
  }
};
</script>