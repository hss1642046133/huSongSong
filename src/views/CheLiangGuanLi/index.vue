<template>
  <div id="zhuti">
    <div class="zhuti-div1">
      <p>车辆管理</p>
    </div>
    <div class="zhuti-div2">
      <div class="zhuti-div2-div1">
        <div class="block">
          <span class="demonstration">开始日期：</span>
          <el-date-picker
            v-model="value1"
            align="right"
            type="date"
            placeholder="年/月/日"
            :picker-options="pickerOptions"
          ></el-date-picker>
        </div>
        <div class="block">
          <span class="demonstration">结束日期：</span>
          <el-date-picker
            v-model="value2"
            align="right"
            type="date"
            placeholder="年/月/日"
            :picker-options="pickerOptions"
          ></el-date-picker>
        </div>
        <div class="block">
          <el-date-picker
            v-model="value2"
            align="right"
            type="date"
            placeholder="年/月/日"
            :picker-options="pickerOptions"
          ></el-date-picker>
        </div>
        <div class="block">
          <el-button type="primary" class="chaxun">查询</el-button>
        </div>
        <div class="block">
          <el-button type="primary" class="chaxun">添加</el-button>
        </div>
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
            prop="date"
            label="创建日期"
            width="160"
          ></el-table-column>
          <el-table-column
            header-align="center"
            align="center"
            prop="name"
            label="车辆名称"
            width="120"
          ></el-table-column>
          <el-table-column
            header-align="center"
            align="center"
            prop="model"
            label="车辆型号"
            width="150"
          >
            <div>
              <span>A区 地下停车场...</span>
              <i class="el-icon-location"></i>
            </div>
          </el-table-column>
          <el-table-column
            header-align="center"
            align="center"
            prop="plate"
            label="车辆车牌"
            width="120"
          ></el-table-column>
          <el-table-column
            header-align="center"
            align="center"
            prop="photograph"
            label="车身照片"
            width="120"
          >
            <img style="width: 60px;" src="../../assets/images/CheLiangGuanLi/u2426.png" />
          </el-table-column>
          <el-table-column
            header-align="center"
            align="center"
            prop="remark"
            label="车辆备注"
            width="120"
          ></el-table-column>
          <el-table-column
            header-align="center"
            align="center"
            prop="stall"
            label="绑定车位"
            width="120"
          ></el-table-column>
          <el-table-column header-align="center" align="center" prop="operation" label="操作">
            <div class="el-table-column-div">
              <ul class="el-table-column-div-ul">
                <li>修改</li>
                <li>删除</li>
                <li>详情</li>
              </ul>
            </div>
          </el-table-column>
        </el-table>
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
  name: "CheLiangGuanLi",
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
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      value1: "",
      value2: "",
      tableData: [
        {
          date: "2019-09-01 10:12:11",
          name: "宝马1系",
          model: "116i",
          plate: "京A~F0236",
          photograph: "照片1",
          remark: "-",
          stall: "A001",
          operation: "删除"
        },
        {
          date: "2019-09-01 10:12:11",
          name: "奔驰",
          model: "F200",
          plate: "粤B~F1236",
          photograph: "照片1",
          remark: "-",
          stall: "A002",
          operation: "删除"
        },
        {
          date: "2019-09-01 10:12:11",
          name: "大众",
          model: "xxx",
          plate: "湘A~0392",
          photograph: "照片1",
          remark: "-",
          stall: "A003",
          operation: "删除"
        },
        {
          date: "2019-09-01 10:12:11",
          name: "北京现代",
          model: "xxx",
          plate: "湘F~0312",
          photograph: "照片1",
          remark: "-",
          stall: "A004",
          operation: "删除"
        }
      ]
    };
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
  border: 1px solid #ededff;
  margin-right: 5px;
}
.zhuti-div2-div1 {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
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
.el-table-column-div-ul li:nth-of-type(3) {
  color: #009688;
}
::v-deep .el-dialog__header {
  background-color: #623bfe;
}
::v-deep .el-dialog__title {
  color: #ffffff;
}
.blocks {
  display: flex;
  align-items: center;
}
.blocks1 {
  display: flex;
  margin-top: 10px;
}
.blocks ~ .blocks {
  margin-top: 10px;
}
::v-deep .kd {
  width: 80%;
}
i {
  color: #623bfe;
  font-size: 20px;
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
</style>