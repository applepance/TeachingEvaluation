<template>
  <el-table
    :data="tableData"
    style="width: 100%" stripe='true'>
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
          lesson: "软件工程",
          date: "2018-2019第二学期"
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
          name: "阿水",
          lessonNo: "111103",
          lesson: "数据结构",
          date: "2018-2019第二学期" 
        }
      ]
    };
    }
  }
</script>