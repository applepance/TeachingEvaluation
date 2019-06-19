 <template>
  <el-table :data="rateTableData" style="width: 100%">
    <el-table-column prop="college" label="院系" width="287"></el-table-column>
    <el-table-column prop="no" label="教师编号" width="287"></el-table-column>
    <el-table-column prop="name" label="姓名" width="287"></el-table-column>
    <el-table-column prop="evaluate" label="好评率" width="287"></el-table-column>
  </el-table>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
    };
  },
  computed: mapGetters(["rateTableData"])
};
</script>