<template>
  <div id="content">
    <Header id="header"></Header>
    <section id="section">
      <Sidebar id="sidebar"></Sidebar>
      <div id="zhuti">
        <div class="zhuti-div1">
          <p>缴费查询</p>
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
              <el-select v-model="value" clearable placeholder="缴费类型">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div class="block">
              <el-button type="primary" class="chaxun">查询</el-button>
            </div>
          </div>
          <div class="zhuti-div2-div2">
            <el-table :header-cell-style="{background:'#409EFF',color:'#ffffff'}" :data="tableData" border style="width: 100%">
              <el-table-column header-align="center" align="center" prop="date" label="日期" width="160">
              </el-table-column>
              <el-table-column header-align="center" align="center" prop="type" label="缴费类型" width="150">
              </el-table-column>
              <el-table-column header-align="center" align="center" prop="resident" label="住户楼室" width="150">
              </el-table-column>
              <el-table-column header-align="center" align="center" prop="amount" label="缴费金额" width="150">
              </el-table-column>
              <el-table-column header-align="center" align="center" prop="person" label="缴费人" width="150">
              </el-table-column>
              <el-table-column header-align="center" align="center" prop="status" label="缴费状态" width="150">
              </el-table-column>
              <el-table-column header-align="center" align="center" prop="method" label="缴费方式">
              </el-table-column>
            </el-table>
          </div>
          <div class="shuifei-div2-div3">
            <ul class="shuifei-div2-div3-ul">
              <li>
                <span>待缴账单数:100/条</span>
                <span>页数:1/9</span>
                <span>每页:9/条</span>
              </li>
              <li>
                <el-pagination background layout="prev, pager, next" :total="1000">
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
  name: "WuYeChaXun",
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
          label: "水费",
        },
        {
          value: "选项2",
          label: "电费",
        },
        {
          value: "选项3",
          label: "停车费",
        },
        {
          value: "选项4",
          label: "燃气费",
        },
        {
          value: "选项5",
          label: "固化宽带",
        },
        {
          value: "选项6",
          label: "有线电视",
        },
        {
          value: "选项7",
          label: "物业费",
        },
      ],
      value: "",
      tableData: [
        {
          date: "2019-09-01 10:12:11",
          type: "水费",
          resident: "6栋1202",
          amount: "50",
          person: "张xx",
          status: "缴费成功",
          method: "微信支付",
        },
        {
          date: "2019-09-01 10:12:11",
          type: "水费",
          resident: "6栋1202",
          amount: "50",
          person: "张xx",
          status: "缴费成功",
          method: "微信支付",
        },
        {
          date: "2019-09-01 10:12:11",
          type: "水费",
          resident: "6栋1202",
          amount: "50",
          person: "张xx",
          status: "缴费成功",
          method: "微信支付",
        },
        {
          date: "2019-09-01 10:12:11",
          type: "水费",
          resident: "6栋1202",
          amount: "50",
          person: "张xx",
          status: "缴费成功",
          method: "微信支付",
        },
      ],
    };
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
  background: linear-gradient(to right, #b6a4fe, #faf9fe);
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
  width: 120px;
  margin-right: 30px;
}
.zhuti-div2-div2 {
  margin: 20px 10px 0 10px;
}
.shuifei-div2-div3{
  margin-top: 100px;
  border-top: 1px solid #f0f0ff;
  padding: 10px 0;
}
.shuifei-div2-div3-ul{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.shuifei-div2-div3-ul li:nth-of-type(1) span~span{
  margin-left: 20px;
}
</style>