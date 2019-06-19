<template>
  <div class="app">
    <div v-for="(data,index) in list" :key="index">
      <div>{{data.date}}</div>
      <el-table :data="data.tableData" stripe style="width: 100%">
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
    </div>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      list: [
        {
          date: "大三第一学期",
          tableData: [
            {
              no: "1101",
              college: "软件",
              name: "王小虎",
              lessonNo: "111101",
              lesson: "软件工程",
              date: "2018-2019第一学期",
              rate: 5
            },
            {
              no: "1102",
              college: "软件",
              name: "李强",
              lessonNo: "111102",
              lesson: "算法",
              date: "2018-2019第一学期",
              rate: 4
            },
            {
              no: "1102",
              college: "软件",
              name: "阿水",
              lessonNo: "111102",
              lesson: "数据结构",
              date: "2018-2019第一学期",
              rate: 5
            }
          ]
        }
      ]
    };
  }
};
</script>