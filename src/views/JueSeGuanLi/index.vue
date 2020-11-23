<template>
  <div id="zhuti">
    <div class="zhuti-div1">
      <p>角色管理</p>
    </div>
    <div class="zhuti-div2">
      <div class="zhuti-div2-div1">
        <div class="block">
          <el-input placeholder="请输入角色名称" v-model="input" clearable></el-input>
        </div>
        <div class="block">
          <el-button type="primary" class="chaxun">查询</el-button>
        </div>
        <div class="block">
          <el-button type="primary" class="chaxun" @click="dialogVisible = true">添加</el-button>
        </div>
        <el-dialog
          title="角色管理"
          :visible.sync="dialogVisible"
          width="30%"
          :before-close="handleClose"
        >
          <div class="block1">
            <span class="demonstration">角色名称：</span>
            <el-input placeholder="请输入内容" v-model="input1" clearable></el-input>
          </div>
          <div class="block2">
            <span class="demonstration">角色备注：</span>
            <el-input
              type="textarea"
              style="width: 80%;"
              :rows="2"
              placeholder="请输入内容"
              v-model="textarea"
            ></el-input>
          </div>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </span>
        </el-dialog>
      </div>
      <div class="zhuti-div2-div2">
        <el-table
          :header-cell-style="{background:'#623bfe',color:'#ffffff'}"
          :data="tableData"
          border
          style="width: 100%"
        >
          <el-table-column
            header-align="center"
            align="center"
            prop="serial"
            label="序号"
            width="260"
          ></el-table-column>
          <el-table-column
            header-align="center"
            align="center"
            prop="name"
            label="角色名称"
            width="260"
          ></el-table-column>
          <el-table-column
            header-align="center"
            align="center"
            prop="remark"
            label="角色备注"
            width="260"
          ></el-table-column>
          <el-table-column header-align="center" align="center" prop="operation" label="操作">
            <div class="el-table-column-div">
              <ul class="el-table-column-div-ul">
                <li @click="dialogVisible = true">修改</li>
                <li @click="dialogVisible1 = true">删除</li>
              </ul>
            </div>
          </el-table-column>
        </el-table>
        <el-dialog
          title="系统提示"
          :visible.sync="dialogVisible1"
          width="30%"
          :before-close="handleClose"
        >
          <div class="tuichu-div">
            <i class="el-icon-question tuichu-i"></i>
            <span class="tuichu-span">确定要删除 系统管理员 角色吗？</span>
          </div>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible1 = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible1 = false">确 定</el-button>
          </span>
        </el-dialog>
      </div>
      <div class="shuifei-div2-div3">
        <ul class="shuifei-div2-div3-ul">
          <li>
            <span>总账单数:100/条</span>
            <span>页数:1/9</span>
            <span>每页:12/条</span>
          </li>
          <li>
            <el-pagination background layout="prev, pager, next" :total="90"></el-pagination>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JueSeGuanLi",
  data() {
    return {
      tableData: [
        {
          serial: "1",
          name: "系统管理员",
          remark: "系统管理员",
          operation: "删除"
        },
        {
          serial: "2",
          name: "社区管理员",
          remark: "社区管理员",
          operation: "删除"
        },
        {
          serial: "3",
          name: "运维人员",
          remark: "运维人员",
          operation: "删除"
        },
        {
          serial: "4",
          name: "物业人员",
          remark: "物业人员",
          operation: "删除"
        }
      ],
      dialogVisible: false,
      dialogVisible1: false,
      input: "",
      input1: "系统管理员",
      textarea: "系统管理员"
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  }
};
</script>

<style scoped>
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
  border: 1px solid #ededff;
  margin-right: 5px;
}
.zhuti-div2-div1 {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}
.block {
  margin-right: 20px;
}
.chaxun {
  width: 80px;
  margin-right: 30px;
  margin: 0;
}
.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 200px;
}
.zhuti-div2-div2 {
  margin: 20px 10px 200px 10px;
}
.el-table-column-div-ul li {
  display: inline-block;
  padding: 0 5px;
  cursor: pointer;
}
.el-table-column-div-ul li:nth-of-type(1) {
  color: #623bfe;
}
.el-table-column-div-ul li:nth-of-type(2) {
  color: red;
}
.shuifei-div2-div3 {
  border-top: 1px solid #f0f0ff;
  padding: 10px 0;
  margin-top: 100px;
}
.shuifei-div2-div3-ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.shuifei-div2-div3-ul li:nth-of-type(1) span ~ span {
  margin-left: 20px;
}
.el-select {
  width: 150px;
}
::v-deep .el-dialog__header {
  background-color: #623bfe;
}
::v-deep .el-dialog__title {
  color: #ffffff;
}
.block1 {
  display: flex;
  align-items: center;
}
.block1 ~ .block1 {
  margin-top: 10px;
}
.block1 .el-input {
  width: 80%;
}
.block1 .el-select {
  width: 80%;
}
.block2 {
  display: flex;
  margin-top: 10px;
}
.tuichu-div {
  display: flex;
  justify-content: center;
  align-items: center;
}
.tuichu-i {
  color: red;
  font-size: 40px;
  margin-right: 5px;
}
.tuichu-span {
  font-size: 20px;
}
</style>