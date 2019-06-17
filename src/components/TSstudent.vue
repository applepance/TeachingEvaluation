 <template>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="college"
        label="院系"
        width="180">
      </el-table-column>
      <el-table-column
        prop="number"
        label="教师编号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="evaluate"
        label="好评率">
      </el-table-column>
    </el-table>
  </template>
<script>
 export default {
      data() {
        return {
          tableData: [{
            college: '软件',
            number:'1',
            name: '李小龙',
            evaluate: '90%'
          }, {
            college: '软件',
            number:'2',
            name: '李小龙',
            evaluate: '90%'
          },{
            college: '软件',
            number:'3',
            name: '李小龙',
            evaluate: '90%'
          },{
            college: '软件',
            number:'4',
            name: '李小龙',
            evaluate: '90%'
          },]
        }
      }
    }
  </script>