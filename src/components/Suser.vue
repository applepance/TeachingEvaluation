<template>
  <el-table
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%" stripe='true'>
    <!-- <Student></Student> -->
    <el-table-column label="学院" prop="college"></el-table-column>
    <el-table-column label="用户编号" prop="number"></el-table-column>
    <el-table-column label="姓名" prop="name"></el-table-column>
    <el-table-column label="课程编号" prop="class"></el-table-column>
    <el-table-column label="课程名称" prop="title"></el-table-column>
    <el-table-column label="学期" prop="semester"></el-table-column>

    <el-table-column align="right"><template slot="header">
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
        search:'',
        tableData: [{
          college:'软件',
          number:'201620180101',
          name:'张三',
          class:'000001',
          title:'数学',
          semester:'2018-2019'
        }, {
          college:'软件',
          number:'201620180102',
          name:'李四',
          class:'000002',
          title:'英语',
          semester:'2018-2019'
        }, {
          college:'软件',
          number:'201620180134',
          name:'王五',
          class:'00007',
          title:'语文',
          semester:'2018-2019'
        }, {
          college:'软件',
          number:'201620180111',
          name:'赵六',
          class:'000003',
          title:'物理',
          semester:'2018-2019'
        },{
          college:'1',
          number:'1',
          name:'赵六',
          class:'1',
          title:'1',
          semester:'1'
        }],
        search: ''
      }
    },
    methods: {
      handleDelete(index, row) {
        console.log(index, row);
      },
      
    },
    components:{
      Student
    }
  }
</script>