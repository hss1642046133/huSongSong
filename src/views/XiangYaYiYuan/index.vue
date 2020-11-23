<template>
  <div id="zhuti">
    <div class="zhuti-div1">
      <p>预约挂号</p>
    </div>
    <div class="zhuti-div2">
      <div class="zhuti-div2-div1" @click="Click">返回</div>
      <div class="zhuti-div2-div2">湘雅第一医院</div>
      <div class="zhuti-div2-div3">
        <p>地址：xxxxxxxxxxxx</p>
        <p>电话：13922255565</p>
      </div>
      <div class="zhuti-div2-div4">
        <el-select size="mini" v-model="value" clearable placeholder="请选择科室">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-select size="mini" v-model="value1" clearable placeholder="请选择医生">
          <el-option
            v-for="item in options1"
            :key="item.value1"
            :label="item.label1"
            :value="item.value1"
          ></el-option>
        </el-select>
        <el-select size="mini" v-model="value2" clearable placeholder="请选择日期">
          <el-option
            v-for="item in options2"
            :key="item.value2"
            :label="item.label2"
            :value="item.value2"
          ></el-option>
        </el-select>
        <el-select size="mini" v-model="value3" clearable placeholder="请选择时段">
          <el-option
            v-for="item in options3"
            :key="item.value3"
            :label="item.label3"
            :value="item.value3"
          ></el-option>
        </el-select>
      </div>
      <div class="zhuti-div2-div5">
        <div class="zhuti-div2-div5-div1">
          <span>请选择患者</span>
          <el-link type="primary" @click="dialogVisible = true">新增</el-link>
        </div>
        <el-dialog
          title="新增患者"
          :visible.sync="dialogVisible"
          width="30%"
          :before-close="handleClose"
        >
          <div class="block1">
            <span class="demonstration">患者姓名：</span>
            <el-input placeholder="请输入内容" v-model="input" clearable></el-input>
          </div>
          <div class="block1">
            <span class="demonstration">联系方式：</span>
            <el-input placeholder="请输入内容" v-model="input1" clearable></el-input>
          </div>
          <div class="block1">
            <span class="demonstration">证件类型：</span>
            <el-select v-model="value4" clearable placeholder="请选择">
              <el-option
                v-for="item in options4"
                :key="item.value4"
                :label="item.label4"
                :value="item.value4"
              ></el-option>
            </el-select>
          </div>
          <div class="block1">
            <span class="demonstration">证件号码：</span>
            <el-input placeholder="请输入内容" v-model="input2" clearable></el-input>
          </div>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </span>
        </el-dialog>
        <el-table
          :header-cell-style="{background:'#623bfe',color:'#ffffff'}"
          :data="tableData"
          border
          style="width: 100%"
        >
          <el-table-column
            header-align="center"
            align="center"
            prop="multiple"
            label="单选"
            width="165"
          >
            <template>
              <el-radio v-model="radio"></el-radio>
            </template>
          </el-table-column>
          <el-table-column
            header-align="center"
            align="center"
            prop="serial"
            label="序号"
            width="165"
          ></el-table-column>
          <el-table-column header-align="center" align="center" prop="name" label="姓名" width="165"></el-table-column>
          <el-table-column
            header-align="center"
            align="center"
            prop="contact"
            label="联系方式"
            width="165"
          ></el-table-column>
          <el-table-column
            header-align="center"
            align="center"
            prop="certificate"
            label="证件类型"
            width="165"
          ></el-table-column>
          <el-table-column header-align="center" align="center" prop="id" label="身份证号"></el-table-column>
        </el-table>
        <div class="zhuti-div2-div5-div2">
          <ul class="zhuti-div2-div5-div2-ul">
            <li>
              <span>总账单数:100/条</span>
              <span>页数:1/9</span>
              <span>每页:5/条</span>
            </li>
            <li>
              <el-pagination background layout="prev, pager, next" :total="90"></el-pagination>
            </li>
          </ul>
        </div>
      </div>
      <div class="zhuti-div2-div6">
        <el-button type="primary">确认</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "XiangYaYiYuan",
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "1科"
        },
        {
          value: "选项2",
          label: "2科"
        },
        {
          value: "选项3",
          label: "3科"
        }
      ],
      value: "",
      options1: [
        {
          value1: "选项1",
          label1: "医生1"
        },
        {
          value1: "选项2",
          label1: "医生2"
        },
        {
          value1: "选项3",
          label1: "医生3"
        }
      ],
      value1: "",
      options2: [],
      value2: "",
      options3: [],
      value3: "",
      options4: [
        {
          value4: "选项1",
          label4: "居民身份证"
        },
        {
          value4: "选项2",
          label4: "军人证"
        },
        {
          value4: "选项3",
          label4: "党员证"
        }
      ],
      value4: "居民身份证",
      tableData: [
        {
          multiple: "",
          serial: "1",
          name: "张三",
          contact: "18246599958",
          certificate: "身份证",
          id: "437984669505261510"
        },
        {
          multiple: "",
          serial: "2",
          name: "张三",
          contact: "18246500058",
          certificate: "身份证",
          id: "437984669505261512"
        },
        {
          multiple: "",
          serial: "3",
          name: "张三",
          contact: "18246511158",
          certificate: "身份证",
          id: "437984669505261513"
        },
        {
          multiple: "",
          serial: "4",
          name: "李四",
          contact: "18246522258",
          certificate: "身份证",
          id: "437984669505261514"
        },
        {
          multiple: "",
          serial: "5",
          name: "李四",
          contact: "18246533358",
          certificate: "身份证",
          id: "437984669505261511"
        }
      ],
      radio: "",
      input: "",
      input1: "",
      input2: "",
      dialogVisible: false
    };
  },
  methods: {
    Click: function() {
      this.$router.go(-1);
    },
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
  margin-top: 10px;
  border: 1px solid #d7d7d7;
  margin-right: 5px;
}
.zhuti-div2-div1 {
  background-image: url("../../assets/images/YuYueGuaHao/u1921.png");
  background-size: cover;
  text-align: center;
  cursor: pointer;
  color: #ffffff;
  width: 68px;
  padding: 5px 0 5px 5px;
  margin: 10px 10px;
}
.zhuti-div2-div2 {
  text-align: center;
  font-weight: bold;
  font-size: 28px;
}
.zhuti-div2-div3 {
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #d7d7d7;
  margin: 0 40px;
  padding: 10px 0;
}
.zhuti-div2-div3 p {
  margin: 0 40px;
}
.zhuti-div2-div4 {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}
.zhuti-div2-div5 {
  border: 1px solid #d7d7d7;
  margin: 40px;
}
.zhuti-div2-div5-div1 {
  display: flex;
  align-items: center;
  margin: 10px;
}
.zhuti-div2-div5-div1 span {
  margin-right: 10px;
}
.zhuti-div2-div5-div2 {
  padding: 10px 0;
}
.zhuti-div2-div5-div2-ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.zhuti-div2-div5-div2-ul li:nth-of-type(1) span ~ span {
  margin-left: 20px;
}
.zhuti-div2-div6 {
  text-align: right;
  margin: 0 40px 30px 0;
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