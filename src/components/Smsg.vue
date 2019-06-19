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
    <el-table-column prop="adress" label="居住地"></el-table-column>
    <el-table-column prop="age" label="年龄"></el-table-column>
    <el-table-column prop="marriage" label="婚否"></el-table-column>
    <el-table-column align="right">
      <template slot="header">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import Student from '@/components/Student'
  export default {
    data() {
      return {
      tableData: [
        {
          no: "1101",
          college: "软件",
          name: "李大夫",
          lessonNo: "111101",
          lesson: "JAVA",
          date: "2018-2019",
          adress:'',
          age:'',
          marriage:''
        },
        {
          no: "1101",
          college: "软件",
          name: "王欧文",
          lessonNo: "111101",
          lesson: "JSP",
          date: "2018-2019",
          adress:'',
          age:'',
          marriage:''
        },
        {
          no: "1101",
          college: "软件",
          name: "于大宝",
          lessonNo: "111101",
          lesson: "c++",
          date: "2018-2019",
          adress:'',
          age:'',
          marriage:''
        },
        {
          no: "1101",
          college: "软件",
          name: "何惧",
          lessonNo: "111101",
          lesson: "c",
          date: "2018-2019",
          adress:'',
          age:'',
          marriage:''
        },
        {
          no: "1101",
          college: "软件",
          name: "史蒂芬",
          lessonNo: "111101",
          lesson: "英语",
          date: "2018-2019",
          adress:'',
          age:'',
          marriage:''
        },
        {
          no: "1101",
          college: "软件",
          name: "尔特",
          lessonNo: "111101",
          lesson: "语文",
          date: "2018-2019",
          adress:'',
          age:'',
          marriage:''
        },
        {
          no: "1101",
          college: "软件",
          name: "暖阳",
          lessonNo: "111101",
          lesson: "数学",
          date: "2018-2019",
          adress:'',
          age:'',
          marriage:''
        }
      ]
    };
    },
    methods: {
      
    },
    components:{
      Student
    }
  }
</script>