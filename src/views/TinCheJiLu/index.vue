<template>
  <div id="content">
    <Header id="header"></Header>
    <section id="section">
      <Sidebar id="sidebar"></Sidebar>
      <div id="zhuti">
        <div class="zhuti-div1">
          <p>车辆管理</p>
        </div>
        <div class="zhuti-div2">
          <div class="zhuti-div2-div1">
            <div class="block">
              <span class="demonstration">开始日期：</span>
              <el-date-picker v-model="value1" align="right" type="date" placeholder="年/月/日" :picker-options="pickerOptions">
              </el-date-picker>
            </div>
            <div class="block">
              <span class="demonstration">结束日期：</span>
              <el-date-picker v-model="value2" align="right" type="date" placeholder="年/月/日" :picker-options="pickerOptions">
              </el-date-picker>
            </div>
            <div class="block">
              <el-date-picker v-model="value2" align="right" type="date" placeholder="年/月/日" :picker-options="pickerOptions">
              </el-date-picker>
            </div>
            <div class="block">
              <el-button type="primary" class="chaxun">查询</el-button>
            </div>
          </div>
          <div class="zhuti-div2-div2">
            <el-table :header-cell-style="{background:'#623bfe',color:'#ffffff'}" :data="tableData" border style="width: 100%">
              <el-table-column header-align="center" align="center" prop="date" label="入库日期" width="160">
              </el-table-column>
              <el-table-column header-align="center" align="center" prop="time" label="出库时间" width="160">
              </el-table-column>
              <el-table-column header-align="center" align="center" prop="park" label="停车场名称" width="95">
              </el-table-column>
              <el-table-column header-align="center" align="center" prop="vehicle" label="车辆名称" width="95">
              </el-table-column>
              <el-table-column header-align="center" align="center" prop="model" label="车辆型号" width="80">
              </el-table-column>
              <el-table-column header-align="center" align="center" prop="plate" label="车辆车牌" width="100">
              </el-table-column>
              <el-table-column header-align="center" align="center" prop="duration" label="停车时长" width="80">
              </el-table-column>
              <el-table-column header-align="center" align="center" prop="cost" label="停车费用" width="80">
              </el-table-column>
              <el-table-column header-align="center" align="center" prop="payment" label="支付方式" width="95">
              </el-table-column>
              <el-table-column header-align="center" align="center" prop="operation" label="操作">
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
                <el-pagination background layout="prev, pager, next" :total="90">
                </el-pagination>
              </li>
            </ul>
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
  name: "TinCheJiLu",
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
      tableData: [
        {
          date: "2019-09-12 15:23:12",
          time: "2019-09-13 15:23:12",
          park: "A区 停车场",
          vehicle: "宝马1系",
          model: "116i",
          plate: "京A~F0236",
          duration: "12小时",
          cost: "68",
          payment: "微信支付",
          operation:'调用监控录像'
        },
        {
          date: "2019-09-12 15:23:12",
          time: "2019-09-13 15:23:12",
          park: "A区 停车场",
          vehicle: "宝马1系",
          model: "116i",
          plate: "京A~F0236",
          duration: "12小时",
          cost: "68",
          payment: "微信支付",
          operation:'调用监控录像'
        },
        {
          date: "2019-09-12 15:23:12",
          time: "2019-09-13 15:23:12",
          park: "A区 停车场",
          vehicle: "宝马1系",
          model: "116i",
          plate: "京A~F0236",
          duration: "12小时",
          cost: "68",
          payment: "微信支付",
          operation:'调用监控录像'
        },
        {
          date: "2019-09-12 15:23:12",
          time: "2019-09-13 15:23:12",
          park: "A区 停车场",
          vehicle: "宝马1系",
          model: "116i",
          plate: "京A~F0236",
          duration: "12小时",
          cost: "68",
          payment: "微信支付",
          operation:'调用监控录像'
        }
      ]
    };
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
  justify-content: space-around;
  margin-top: 10px;
}
.chaxun {
  width: 80px;
  margin-right: 30px;
  margin: 0;
}
.el-date-editor.el-input, .el-date-editor.el-input__inner {
    width: 230px;
}
.zhuti-div2-div2{
  margin: 20px 10px 200px 10px;
}
.el-table-column-div-ul li{
  display: inline-block;
  padding: 0 5px;
  cursor: pointer;
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
i{
  color: #623bfe;
  font-size: 20px;
}
.shuifei-div2-div3{
  border-top: 1px solid #f0f0ff;
  padding: 10px 0;
  margin-top: 100px;
}
.shuifei-div2-div3-ul{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.shuifei-div2-div3-ul li:nth-of-type(1) span~span{
  margin-left: 20px;
}
::v-deep .el-table__row td:nth-of-type(10){
  color: #623bfe;
  cursor: pointer;
}
</style>