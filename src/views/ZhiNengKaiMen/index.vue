<template>
  <div id="content">
    <Header id="header"></Header>
    <section id="section">
      <Sidebar id="sidebar"></Sidebar>
      <div id="zhuti">
        <div class="zhuti-div1">
          <p>开门</p>
        </div>
        <div class="zhuti-div2">
          <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="开门统计" name="first">
              <div class="zhuti-div2-div1">
                <el-radio v-model="radio" label="1">按日</el-radio>
                <el-radio v-model="radio" label="2">按周</el-radio>
                <el-radio v-model="radio" label="3">按月</el-radio>
              </div>
              <ZheXianTu class="zhexiantu"></ZheXianTu>
            </el-tab-pane>
            <el-tab-pane label="开门记录" name="second">
              <div class="zhuti-div2-div2">
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
              <div class="zhuti-div2-div3">
                <el-table :header-cell-style="{background:'#623bfe',color:'#ffffff'}" :data="tableData" border style="width: 100%">
                  <el-table-column header-align="center" align="center" prop="picture" label="抓拍图片" width="106">
                  </el-table-column>
                  <el-table-column header-align="center" align="center" prop="card" label="卡号" width="106">
                  </el-table-column>
                  <el-table-column header-align="center" align="center" prop="swiping" label="刷卡时间" width="106">
                  </el-table-column>
                  <el-table-column header-align="center" align="center" prop="name" label="设备名称" width="106">
                  </el-table-column>
                  <el-table-column header-align="center" align="center" prop="mark" label="设备号" width="106">
                  </el-table-column>
                  <el-table-column header-align="center" align="center" prop="movement" label="进出动作" width="106">
                  </el-table-column>
                  <el-table-column header-align="center" align="center" prop="verification" label="验证方式" width="106">
                  </el-table-column>
                  <el-table-column header-align="center" align="center" prop="cardholder" label="持卡人" width="106">
                  </el-table-column>
                  <el-table-column header-align="center" align="center" prop="Building" label="房屋号" width="106">
                  </el-table-column>
                  <el-table-column header-align="center" align="center" prop="place" label="所在楼栋">
                  </el-table-column>
                </el-table>
              </div>
              <div class="shuifei-div2-div4">
                <ul class="shuifei-div2-div4-ul">
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
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import ZheXianTu from "../../components/ZheXianTu";
export default {
  name: "ZhiNengKaiMen",
  components: {
    Header,
    Sidebar,
    ZheXianTu,
  },
  data() {
    return {
      activeName: "first",
      radio: '1',
      pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
        tableData: [{
          picture: '',
          card: '',
          swiping: '',
          name: '',
          mark: '',
          movement: '',
          verification: '',
          cardholder: '',
          Building: '',
          place: ''
        }, {
          picture: '',
          card: '',
          swiping: '',
          name: '',
          mark: '',
          movement: '',
          verification: '',
          cardholder: '',
          Building: '',
          place: ''
        }, {
          picture: '',
          card: '',
          swiping: '',
          name: '',
          mark: '',
          movement: '',
          verification: '',
          cardholder: '',
          Building: '',
          place: ''
        }, {
          picture: '',
          card: '',
          swiping: '',
          name: '',
          mark: '',
          movement: '',
          verification: '',
          cardholder: '',
          Building: '',
          place: ''
        }]
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
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
  padding-top: 25px;
  border-left: 1px solid #ededff;
  border-right: 1px solid #ededff;
  border-bottom: 1px solid #ededff;
  margin-right: 5px;
}
::v-deep .el-tabs--card > .el-tabs__header .el-tabs__nav {
  border-radius: 0;
}
::v-deep .el-tabs__item.is-active {
  background-color: #623bfe;
  color: #ffffff;
}
.zhuti-div2-div1{
  text-align: right;
  margin: 10px 20px;
}
.zhuti-div2-div2 {
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
.zhuti-div2-div3{
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
.shuifei-div2-div4{
  border-top: 1px solid #f0f0ff;
  padding: 10px 0;
  margin-top: 100px;
}
.shuifei-div2-div4-ul{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.shuifei-div2-div4-ul li:nth-of-type(1) span~span{
  margin-left: 20px;
}
::v-deep .el-table__row td:nth-of-type(10){
  color: #623bfe;
  cursor: pointer;
}
.zhexiantu{
  margin-bottom: 20px
}
</style>