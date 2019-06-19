<template>
  <el-table
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">
    <!-- <Student></Student> -->
    <el-table-column prop="college" label="所属院系"></el-table-column>
    <el-table-column prop="no" label="教师编号"></el-table-column>
    <el-table-column prop="name" label="姓名"></el-table-column>
    <el-table-column prop="lessonNo" label="课程编号"></el-table-column>
    <el-table-column prop="lesson" label="课程名称"></el-table-column>
    <el-table-column prop="date" label="上课学期"></el-table-column>
    <el-table-column align="right">
      <template slot="header">
      </template>
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="danger"
          @click.native.prevent="handleDelete(scope.$index, tableData)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import Student from '@/components/Student'
  export default {
    data() {
      return {
      search:'',
      tableData: [
        {
          no: "1101",
          college: "软件",
          name: "王小虎",
          lessonNo: "111101",
          lesson: "JAVA",
          date: "2018-2019第二学期",
          adress:'',
          age:'',
          marriage:''
        },
        {
          no: "1102",
          college: "软件",
          name: "李强",
          lessonNo: "111102",
          lesson: "算法",
          date: "2018-2019第二学期",
        },
        {
          no: "1103",
          college: "软件",
          name: "于大宝",
          lessonNo: "111103",
          lesson: "c++",
          date: "2018-2019第二学期",
        },
        {
          no: "1104",
          college: "软件",
          name: "何惧",
          lessonNo: "111104",
          lesson: "c",
          date: "2018-2019第二学期",
        },
        {
          no: "1105",
          college: "软件",
          name: "史蒂芬",
          lessonNo: "111105",
          lesson: "英语",
          date: "2018-2019第二学期",
        },
        {
          no: "1106",
          college: "软件",
          name: "尔特",
          lessonNo: "111106",
          lesson: "语文",
          date: "2018-2019第二学期",
        },
        {
          no: "1107",
          college: "软件",
          name: "暖阳",
          lessonNo: "111107",
          lesson: "数学",
          date: "2018-2019第二学期",

        }
      ]
    };
    },
    methods: {
      handleDelete (index, rows) {
        rows.splice(index, 1);
      }
    },
    components:{
      Student
    }
  }
</script>