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
            <div class="block srk">
              <el-select v-model="value" clearable placeholder="公告类型">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div class="block srk">
              <el-input placeholder="请输入内容" size="10" v-model="input" clearable></el-input>
            </div>
            <div class="block">
              <el-button type="primary" class="chaxun">查询</el-button>
            </div>
            <div class="block">
              <el-button type="primary" class="chaxun">添加</el-button>
            </div>
          </div>
          <div class="zhuti-div2-div2">
            <el-table :header-cell-style="{background:'#409EFF',color:'#ffffff'}" :data="tableData" border style="width: 100%">
              <el-table-column header-align="center" align="center" prop="serial" label="序号" width="140">
              </el-table-column>
              <el-table-column header-align="center" align="center" prop="date" label="日期" width="160">
              </el-table-column>
              <el-table-column header-align="center" align="center" prop="type" label="公告类型" width="150">
              </el-table-column>
              <el-table-column header-align="center" align="center" prop="public" label="公告标题" width="150">
              </el-table-column>
              <el-table-column header-align="center" align="center" prop="content" label="公告内容" width="150">
              </el-table-column>
              <el-table-column header-align="center" align="center" prop="publisher" label="发布者" width="150">
              </el-table-column>
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
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
export default {
  name: "GongGaoGuanLi",
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
          serial: "1",
          date: "2019-08-08 12:11:11",
          type: "物业公告",
          public: "标题1",
          content: "内容1",
          publisher: "zhangs",
          operation: "删除",
        },
        {
          serial: "2",
          date: "2019-08-08 11:10:09",
          type: "物业公告",
          public: "标题2",
          content: "内容2",
          publisher: "zhangs",
          operation: "删除",
        }
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
  width: 80px;
  margin-right: 30px;
  margin: 0;
}
.el-date-editor.el-input, .el-date-editor.el-input__inner {
    width: 150px;
}
.srk{
  width: 160px;
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
.el-table-column-div-ul li:nth-of-type(3){
  color: #623bfe;
}
</style>