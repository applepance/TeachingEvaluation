<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column prop="college" label="所属院系"></el-table-column>
    <el-table-column prop="no" label="教师编号"></el-table-column>
    <el-table-column prop="name" label="姓名"></el-table-column>
    <el-table-column prop="lessonNo" label="课程编号"></el-table-column>
    <el-table-column prop="lesson" label="课程名称"></el-table-column>
    <el-table-column prop="date" label="上课学期"></el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template >
        <el-button type="text" size="small">添加信息</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    methods: {
      
    },
    data() {
      return {
      tableData: [
        {
          no: "1101",
          college: "软件",
          name: "王小虎",
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
          name: "王小虎",
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
          name: "王小虎",
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
          name: "王小虎",
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
          name: "王小虎",
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
          name: "王小虎",
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
          name: "王小虎",
          lessonNo: "111101",
          lesson: "数学",
          date: "2018-2019",
          adress:'',
          age:'',
          marriage:''
        }
      ]
    };
    }
  }
</script>