<template>
  <div class="main-detail">
    <div style="margin: 20px;"></div>
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign" >
      <el-form-item label="学院">
        <el-input v-model="formLabelAlign.college"></el-input>
      </el-form-item>
      <el-form-item label="用户编号">
        <el-input v-model="formLabelAlign.number"></el-input>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="formLabelAlign.name" ></el-input>
      </el-form-item>
      <el-form-item label="课程编号">
        <el-input v-model="formLabelAlign.class" ></el-input>
      </el-form-item>
      <el-form-item label="课程名称">
        <el-input v-model="formLabelAlign.title" ></el-input>
      </el-form-item>
      <el-form-item label="学期年份">
        <el-input v-model="formLabelAlign.semester" ></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" plain @click="add">添加用户</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelPosition: "right",
      formLabelAlign: {
        name: "",
        region: "",
        type: ""
      }
    };
  },
  methods:{
    
    add() {
      
          alert("添加成功!");
        
          
        }
      
    
  }
};
</script>