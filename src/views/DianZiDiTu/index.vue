<template>
  <div id="content">
    <Header id="header"></Header>
    <section id="section">
      <Sidebar id="sidebar"></Sidebar>
      <div id="zhuti">
        <div class="zhuti-div1">
          <p>电子地图</p>
        </div>
        <div class="zhuti-div2">
          <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="地图" name="first">
              <LuJingTu1></LuJingTu1>
            </el-tab-pane>
            <el-tab-pane label="列表" name="second">
              <div class="zhuti-div2-div1">
                <div class="block">
                  <el-button>创建资源</el-button>
                </div>
                <div class="block">
                  <el-input placeholder="请输入设备ID或名称" v-model="input" clearable></el-input>
                </div>
                <div class="block">
                  <el-button type="primary" class="chaxun">搜索</el-button>
                </div>
              </div>
              <div class="zhuti-div2-div2">
                <el-table :header-cell-style="{background:'#623bfe',color:'#ffffff'}" :data="tableData" border style="width: 100%">
                  <el-table-column header-align="center" align="center" prop="serial" label="序号" width="140">
                  </el-table-column>
                  <el-table-column header-align="center" align="center" prop="id" label="设备ID" width="140">
                  </el-table-column>
                  <el-table-column header-align="center" align="center" prop="resource" label="资源名称" width="140">
                  </el-table-column>
                  <el-table-column header-align="center" align="center" prop="detailed" label="详细地址" width="140">
                  </el-table-column>
                  <el-table-column header-align="center" align="center" prop="contact" label="地理位置" width="160">
                    <div>
                      <span>经度xxx; 续度xxx</span>
                      <i class="el-icon-location"></i>
                    </div>
                  </el-table-column>
                  <el-table-column header-align="center" align="center" prop="note" label="备注" width="140">
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
import LuJingTu1 from "../../components/LuJingTu1";
export default {
  name: "DianZiDiTu",
  components: {
    Header,
    Sidebar,
    LuJingTu1
  },
  data() {
    return {
      activeName: "first",
      input: '',
      tableData: [
        {
          serial: "1",
          id: "id1",
          resource: "名称1",
          detailed: "地址1",
          contact: "经度xxx; 续度xxx",
          note: "备注1",
          operation:'删除'
        },
        {
          serial: "2",
          id: "id2",
          resource: "名称2",
          detailed: "地址2",
          contact: "经度xxx; 续度xxx",
          note: "备注2",
          operation:'删除'
        }
      ]
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
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
  margin-top: 20px;
  margin-right: 5px;
}
::v-deep .el-tabs--card > .el-tabs__header .el-tabs__nav {
  border-radius: 0;
}
::v-deep .el-tabs__item.is-active {
  background-color: #623bfe;
  color: #ffffff;
}
::v-deep .el-tabs__content{
  margin-top: -15px;
}
.zhuti-div2-div1 {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}
.block{
  margin-right: 20px
}
.chaxun {
  width: 80px;
  margin-right: 30px;
  margin: 0;
}
.el-date-editor.el-input, .el-date-editor.el-input__inner {
    width: 200px;
}
.zhuti-div2-div2{
  margin: 20px 0;
}
::v-deep .el-tabs__content .el-tab-pane:nth-of-type(2){
  border: 1px solid #f0f0ff
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
.shuifei-div2-div3{
  border-top: 1px solid #f0f0ff;
  padding: 10px 0;
  margin-top: 150px;
}
.shuifei-div2-div3-ul{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.shuifei-div2-div3-ul li:nth-of-type(1) span~span{
  margin-left: 20px;
}
.el-select{
  width: 150px;
}
i{
  color: #623bfe;
  font-size: 20px;
}
</style>