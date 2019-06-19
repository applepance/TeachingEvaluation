<template>
  <div class="container">
    <div class="inputAndButton">
      <el-input
        placeholder="请输入教师编号"
        prefix-icon="el-icon-search"
        v-model="content"
        class="input"
        type="number"
      ></el-input>
      <el-button type="primary" icon="el-icon-search" size="mini">搜索</el-button>
      <el-button type="primary" icon="el-icon-circle-close" size="mini">取消</el-button>
    </div>
    <div class="box">
      <span>{{teacherName}}</span>
    </div>
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign" ref="formLabelAlign">
      <el-form-item label="要删除的课程编号" class="num">
        <el-input type="number" v-model="formLabelAlign.num" class="updateNumber"></el-input>
      </el-form-item>
      <el-form-item label="要删除的课程名称" class="name">
        <el-input v-model="formLabelAlign.name" class="updateName"></el-input>
      </el-form-item>
        <el-form-item>
    <el-button type="primary" @click="submitForm('formLabelAlign')">删除</el-button>
  </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Umsg",
  data() {
    return {
      content: "",
      formLabelAlign: {
        num: 0,
        name: ""
      },
      teacherName:'老王'
    };
  },
  methods: {
    submitForm(formLabelAlign) {
      this.$refs[formLabelAlign].validate(valid => {
        if (valid) {
          alert("delete!");
        } else {
          console.log("error delete!!");
          return false;
        }
      });
    }
  }
};
</script>

<style scoped>
.container .input {
  width: 214px;
  margin-right: 10px;
}
.container .box{
  width: 100px;
  height: 30px;
  border: 1px solid #000000;
  margin-left: 79px;
  text-align: center;
  position: relative;
  margin-bottom: 30px;;
}
.container .box span{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%)
}
.container .num {
  width: 400px;
}
.container .name {
  width: 400px;
}
.el-form-item__label{
  width: 105px;
}
.el-form-item__content{
  margin-left: 0;
}
.updateNumber{
  margin-top: 20px;
}
.updateName{
  margin-top: 20px;
}
</style>
