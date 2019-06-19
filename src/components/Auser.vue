<template>
  <div class="main-detail">
    <div style="margin: 20px;"></div>
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
      <el-form-item label="学院">
        <el-input v-model="formLabelAlign.college"></el-input>
      </el-form-item>
      <el-form-item label="用户编号">
        <el-input v-model="formLabelAlign.no"></el-input>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="formLabelAlign.name"></el-input>
      </el-form-item>
      <el-form-item label="课程编号">
        <el-input v-model="formLabelAlign.lessonNo"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" plain @click="addUser(formLabelAlign)">添加用户</el-button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      labelPosition: "right",
      formLabelAlign: {
        name: "",
        no: "",
        lessonNo: "",
        college: ""
      }
    };
  },
  computed: mapGetters(["stuTableData"]),
  methods: mapActions([
    'addUser'
  ])
};
</script>