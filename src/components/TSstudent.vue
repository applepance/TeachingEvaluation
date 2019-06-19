 <template>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="college"
        label="院系"
        width="287">
      </el-table-column>
      <el-table-column
        prop="number"
        label="教师编号"
        width="287">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
         width="287">
      </el-table-column>
      <el-table-column
        prop="evaluate"
        label="好评率"
         width="287">
      </el-table-column>
    </el-table>
  </template>
<script>
 export default {
      data() {
        return {
          tableData: [{
            college: '软件',
            number:'1101',
            name: '王小虎',
            evaluate: '100%'
          }, {
            college: '软件',
            number:'1102',
            name: '李强',
            evaluate: '80%'
          },{
            college: '软件',
            number:'1103',
            name: '阿水',
            evaluate: '100%'
          },]
        }
      }
    }
  </script>