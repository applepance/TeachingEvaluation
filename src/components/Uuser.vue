<template>
  <div class="container">
    <div class="inputAndButton">
      <el-input
        placeholder="请输入学生编号"
        prefix-icon="el-icon-search"
        v-model="content"
        class="input"
        type="number"
      ></el-input>
      <el-button type="primary" icon="el-icon-search" size="mini" @click="matchInformation(content)">搜索</el-button>
      <el-button type="primary" icon="el-icon-circle-close" size="mini">取消</el-button>
    </div>
    <div class="box" :model="formLabelAlign">
      <span>{{formLabelAlign.studentName}}</span>
    </div>
    <el-form label-width="80px" :model="formLabelAlign" ref="formLabelAlign">
      <el-form-item label="新课程的课程编号" class="num">
        <el-input type="number" v-model="num" class="updateNumber"></el-input>
      </el-form-item>
      <el-form-item label="新课程的课程名称" class="name">
        <el-input v-model="lesson" class="updateName"></el-input>
      </el-form-item>

  <el-form-item>
    <el-button type="primary" @click="updateUser(formLabelAlign)">更新</el-button>
  </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Umsg",
  data() {
    return {
      content: "",
      student: this.$store.state.student,
      class: this.$store.state.class,
      formLabelAlign: {
        num: "",
        lesson: "",
        studentName: ""
      },
      num: "",
      lesson: ""
    };
  },
  methods: {
    matchInformation(content) {
      let nowStudent =
        this.student.find(Student => Student.no === content) || {};
      nowStudent.studentName = nowStudent.name;
      this.class.forEach(cla => {
        if (cla.lessonNo === nowStudent.lessonNo) {
          nowStudent.num = cla.lessonNo;
          nowStudent.lesson = cla.lesson;
        }
      });
      this.formLabelAlign = nowStudent;
      this.num = this.formLabelAlign.num;
      this.lesson = this.formLabelAlign.lesson;
    },
    ...mapActions(["updateUser"])
  },
  watch: {
    num: function() {
      this.formLabelAlign.num = this.num;
    },
    lesson: function() {
      this.formLabelAlign.lesson = this.lesson;
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
.teacherName{
  width: 400px;
}
.teacherNum{
  width: 400px;
  margin-top: 20px;
}
.updateTeacherName{
  margin-top: 20px;
}
</style>
