<template>
  <div id="zhuti">
    <div class="zhuti-div1">
      <p>设备信息</p>
    </div>
    <div class="zhuti-div2">
      <div class="zhuti-div2-div1">
        <div class="block">
          <el-select v-model="value" clearable placeholder="设备类型">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div class="block">
          <el-input placeholder="请输入设备名称或机号" v-model="input" clearable></el-input>
        </div>
        <div class="block">
          <el-button type="primary" class="chaxun">查询</el-button>
        </div>
        <div class="block">
          <el-button type="primary" class="chaxun" @click="dialogVisible = true">添加</el-button>
        </div>
        <el-dialog
          title="设备信息"
          :visible.sync="dialogVisible"
          width="30%"
          :before-close="handleClose"
        >
          <div class="block1">
            <span class="demonstration">设备编号：</span>
            <el-input placeholder="请输入内容" v-model="input1" clearable></el-input>
          </div>
          <div class="block1">
            <span class="demonstration">设备名称：</span>
            <el-input placeholder="请输入内容" v-model="input2" clearable></el-input>
          </div>
          <div class="block1">
            <span class="demonstration">&nbsp;&nbsp;&nbsp;序列号：</span>
            <el-input placeholder="请输入内容" v-model="input3" clearable></el-input>
          </div>
          <div class="block1">
            <span class="demonstration">&nbsp;&nbsp;&nbsp;IP地址：</span>
            <el-input placeholder="请输入内容" v-model="input4" clearable></el-input>
          </div>
          <div class="block1">
            <span class="demonstration">类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型：</span>
            <el-select v-model="value1" clearable placeholder="请选择">
              <el-option
                v-for="item in options1"
                :key="item.value1"
                :label="item.label1"
                :value="item.value1"
              ></el-option>
            </el-select>
          </div>
          <div class="block2">
            <span class="demonstration">备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注：</span>
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
            prop="sequence"
            label="序号"
            width="125"
          ></el-table-column>
          <el-table-column
            header-align="center"
            align="center"
            prop="serial"
            label="设备编号"
            width="125"
          ></el-table-column>
          <el-table-column
            header-align="center"
            align="center"
            prop="name"
            label="设备名称"
            width="125"
          ></el-table-column>
          <el-table-column
            header-align="center"
            align="center"
            prop="number"
            label="序列号"
            width="150"
          ></el-table-column>
          <el-table-column
            header-align="center"
            align="center"
            prop="address"
            label="IP地址"
            width="150"
          ></el-table-column>
          <el-table-column header-align="center" align="center" prop="state" label="状态" width="125"></el-table-column>
          <el-table-column header-align="center" align="center" prop="type" label="类型" width="125"></el-table-column>
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
            <span class="tuichu-span">确定要删除 1001 的信息吗？</span>
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
  name: "SheBeiXinXi",
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "灯光设备"
        },
        {
          value: "选项2",
          label: "消防设备"
        },
        {
          value: "选项3",
          label: "监控设备"
        },
        {
          value: "选项4",
          label: "家居设备"
        },
        {
          value: "选项5",
          label: "门禁设备"
        }
      ],
      value: "",
      options1: [
        {
          value1: "选项1",
          label1: "安防设备"
        },
        {
          value1: "选项2",
          label1: "社区管理员"
        },
        {
          value1: "选项3",
          label1: "灯光设备"
        },
        {
          value1: "选项4",
          label1: "监控设备"
        }
      ],
      value1: "安防设备",
      input: "",
      input1: "1001",
      input2: "设备1",
      input3: "2019111123849",
      input4: "192.168.1.1",
      textarea: "忙碌",
      dialogVisible: false,
      dialogVisible1: false,
      tableData: [
        {
          sequence: "1",
          serial: "1001",
          name: "设备1",
          number: "2019111123849",
          address: "192.168.1.1",
          state: "忙碌",
          type: "灯光设备",
          operation: "删除"
        },
        {
          sequence: "2",
          serial: "1002",
          name: "设备2",
          number: "2019111123849",
          address: "192.168.1.1",
          state: "在线",
          type: "消防设备",
          operation: "删除"
        },
        {
          sequence: "3",
          serial: "1003",
          name: "设备3",
          number: "2019121923111",
          address: "192.168.1.1",
          state: "在线",
          type: "安防设备",
          operation: "删除"
        },
        {
          sequence: "4",
          serial: "1004",
          name: "设备4",
          number: "2019121923111",
          address: "192.168.1.1",
          state: "离线",
          type: "监控设备",
          operation: "删除"
        }
      ]
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
  margin-top: 20px;
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
  width: 180px;
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