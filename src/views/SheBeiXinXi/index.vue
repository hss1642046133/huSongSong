<template>
  <div id="content">
    <Header id="header"></Header>
    <section id="section">
      <Sidebar id="sidebar"></Sidebar>
      <div id="zhuti">
        <div class="zhuti-div1">
          <p>设备信息</p>
        </div>
        <div class="zhuti-div2">
          <div class="zhuti-div2-div1">
            <div class="block">
              <el-select v-model="value" clearable placeholder="设备类型">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </div>
            <div class="block">
              <el-input placeholder="请输入设备名称或机号" v-model="input" clearable></el-input>
            </div>
            <div class="block">
              <el-button type="primary" class="chaxun">查询</el-button>
            </div>
            <div class="block">
              <el-button type="primary" class="chaxun">添加</el-button>
            </div>
          </div>
          <div class="zhuti-div2-div2">
            <el-table :header-cell-style="{background:'#623bfe',color:'#ffffff'}" :data="tableData" border style="width: 100%">
              <el-table-column header-align="center" align="center" prop="sequence" label="序号" width="125">
              </el-table-column>
              <el-table-column header-align="center" align="center" prop="serial" label="设备编号" width="125">
              </el-table-column>
              <el-table-column header-align="center" align="center" prop="name" label="设备名称" width="125">
              </el-table-column>
              <el-table-column header-align="center" align="center" prop="number" label="序列号" width="150">
              </el-table-column>
              <el-table-column header-align="center" align="center" prop="address" label="IP地址" width="150">
              </el-table-column>
              <el-table-column header-align="center" align="center" prop="state" label="状态" width="125">
              </el-table-column>
              <el-table-column header-align="center" align="center" prop="type" label="类型" width="125">
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
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
export default {
  name: "SheBeiXinXi",
  components: {
    Header,
    Sidebar,
  },
  data() {
    return {
      options: [{
          value: '选项1',
          label: '灯光设备'
        }, {
          value: '选项2',
          label: '消防设备'
        }, {
          value: '选项3',
          label: '监控设备'
        }, {
          value: '选项4',
          label: '家居设备'
        }, {
          value: '选项5',
          label: '门禁设备'
        }],
        value: '',
        input: '',
      tableData: [
        {
          sequence: "1",
          serial: "1001",
          name: "设备1",
          number: "2019111123849",
          address: "192.168.1.1",
          state: "忙碌",
          type: "灯光设备",
          operation:'删除'
        },
        {
          sequence: "2",
          serial: "1002",
          name: "设备2",
          number: "2019111123849",
          address: "192.168.1.1",
          state: "在线",
          type: "消防设备",
          operation:'删除'
        },
        {
          sequence: "3",
          serial: "1003",
          name: "设备3",
          number: "2019121923111",
          address: "192.168.1.1",
          state: "在线",
          type: "安防设备",
          operation:'删除'
        },
        {
          sequence: "4",
          serial: "1004",
          name: "设备4",
          number: "2019121923111",
          address: "192.168.1.1",
          state: "离线",
          type: "监控设备",
          operation:'删除'
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
  border: 1px solid #ededff;
  margin-right: 5px;
  margin-top: 20px
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
.el-select{
  width: 180px;
}
</style>