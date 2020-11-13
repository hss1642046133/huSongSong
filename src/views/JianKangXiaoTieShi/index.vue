<template>
  <div id="content">
    <Header id="header"></Header>
    <section id="section">
      <Sidebar id="sidebar"></Sidebar>
      <div id="zhuti">
        <div class="zhuti-div1">
          <p>健康小贴士</p>
        </div>
        <div class="zhuti-div2">
          <div class="zhuti-div2-div1">
            <div class="block">
              <span class="demonstration">开始日期：</span>
              <el-date-picker v-model="value1" align="right" type="date" placeholder="年/月/日" :picker-options="pickerOptions">
              </el-date-picker>
              <span class="demonstration" style="margin-left: 20px;">结束日期：</span>
              <el-date-picker v-model="value2" align="right" type="date" placeholder="年/月/日" :picker-options="pickerOptions">
              </el-date-picker>
            </div>
            <div class="block">
              <el-button type="primary" class="chaxun">查询</el-button>
              <el-button type="primary" class="chaxun" @click="dialogVisible = true">发布小贴士</el-button>
            </div>
            <el-dialog title="发布小贴士" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
              <div class="blocks">
                <span class="demonstration">键康标题：</span>
                <el-date-picker style="width: 80%;" v-model="value2" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions">
                </el-date-picker>
              </div>
              <div class="blocks1">
                <span class="demonstration">键康内容：</span>
                <el-input class="kd" type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea"></el-input>
              </div>
              <div class="blocks1">
                <span class="demonstration">备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注：</span>
                <el-input class="kd" style="margin-left: -1px;" type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea"></el-input>
              </div>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
              </span>
            </el-dialog>
          </div>
          <div class="zhuti-div2-div2">
            <el-table :header-cell-style="{background:'#623bfe',color:'#ffffff'}" :data="tableData" border style="width: 100%">
              <el-table-column header-align="center" align="center" prop="date" label="发布日期" width="210">
              </el-table-column>
              <el-table-column header-align="center" align="center" prop="headline" label="健康标题" width="210">
              </el-table-column>
              <el-table-column header-align="center" align="center" prop="content" label="健康内容" width="210">
              </el-table-column>
              <el-table-column header-align="center" align="center" prop="remark" label="备注" width="210">
              </el-table-column>
              <el-table-column header-align="center" align="center" prop="operation" label="操作">
                <div class="el-table-column-div">
                  <ul class="el-table-column-div-ul">
                    <li>修改</li>
                    <li>删除</li>
                  </ul>
                </div>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
export default {
  name: "JianKangXiaoTieShi",
  components: {
    Header,
    Sidebar,
  },
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            },
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            },
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            },
          },
        ],
      },
      value1: "",
      value2: "",
      options: [
        {
          value: "选项1",
          label: "业委会公告",
        },
        {
          value: "选项2",
          label: "物业公告",
        },
        {
          value: "选项3",
          label: "街道办公告",
        }
      ],
      value: "",
      input: '',
      tableData: [
        {
          date: "2019-09-01 10:12:11",
          headline: "标题1",
          content: "内容1",
          remark: "xxx",
          operation: "删除",
        },
        {
          date: "2019-09-01 10:12:11",
          headline: "标题2",
          content: "内容2",
          remark: "xxx",
          operation: "删除",
        },
        {
          date: "2019-09-01 10:12:11",
          headline: "标题3",
          content: "内容3",
          remark: "xxx",
          operation: "删除",
        },
        {
          date: "2019-09-01 10:12:11",
          headline: "标题4",
          content: "内容4",
          remark: "xxx",
          operation: "删除",
        }
      ],
      dialogVisible: false
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
            done();
      }).catch(_ => {});
    }
  }
};
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}
#sidebar {
  position: fixed;
  left: 10px;
  top: 100px;
  height: 100%;
  background-color: #623bfe;
  width: 18%;
}
#zhuti {
  position: absolute;
  left: 20%;
  top: 100px;
  width: 79.8%;
  overflow-x: hidden;
  overflow-y: scroll;
  height: 520px;
}
.zhuti-div1 {
  margin-right: 5px;
  height: 33px;
  background: linear-gradient(to right, #623bfe, #faf9fe);
  display: flex;
  align-items: center;
}
.zhuti-div1 p {
  border-left: 2px solid #ffffff;
  margin-left: 10px;
  padding-left: 10px;
  color: #ffffff;
}
.zhuti-div2 {
  margin-top: 10px;
  border: 1px solid #ededff;
  margin-right: 5px;
}
.zhuti-div2-div1 {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
}
.chaxun {
  width: 120px;
  margin-right: 30px;
  margin: 0;
  margin-left: 10px;
}
.el-date-editor.el-input, .el-date-editor.el-input__inner {
    width: 180px;
}
.zhuti-div2-div2{
  margin: 20px 10px 200px 10px;
}
.el-table-column-div-ul li{
  display: inline-block;
  padding: 0 5px;
  cursor: pointer;
}
.el-table-column-div-ul li:nth-of-type(1){
  color: #623bfe;
}
.el-table-column-div-ul li:nth-of-type(2){
  color: red;
}
::v-deep .el-dialog__header {
  background-color: #623bfe;
}
::v-deep .el-dialog__title{
  color: #ffffff;
}
.blocks{
  display: flex;
  align-items: center;
}
.blocks1{
  display: flex;
  margin-top: 10px;
}
.blocks~.blocks{
  margin-top: 10px;
}
::v-deep .kd{
  width: 80%;
}
</style>