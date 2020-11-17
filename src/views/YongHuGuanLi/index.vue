<template>
  <div id="content">
    <Header id="header"></Header>
    <section id="section">
      <Sidebar id="sidebar"></Sidebar>
      <div id="zhuti">
        <div class="zhuti-div1">
          <p>人口信息</p>
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
              <el-button type="primary" class="chaxun">添加</el-button>
            </div>
          </div>
          <div class="zhuti-div2-div2">
            <el-table :header-cell-style="{background:'#623bfe',color:'#ffffff'}" :data="tableData" border style="width: 100%">
              <el-table-column header-align="center" align="center" prop="serial" label="序号" width="150">
              </el-table-column>
              <el-table-column header-align="center" align="center" prop="name" label="业主姓名" width="150">
              </el-table-column>
              <el-table-column header-align="center" align="center" prop="sex" label="性别" width="150">
              </el-table-column>
              <el-table-column header-align="center" align="center" prop="id" label="身份证号" width="150">
              </el-table-column>
              <el-table-column header-align="center" align="center" prop="contact" label="联系方式" width="150">
              </el-table-column>
              <el-table-column header-align="center" align="center" prop="address" label="住址" width="150">
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
  name: "YongHuGuanLi",
  components: {
    Header,
    Sidebar,
  },
  data() {
    return {
        input: '',
      tableData: [
        {
          serial: "1",
          name: "zhangs",
          sex: "系统管理员",
          id: "张三",
          contact: "13578955591",
          address: "1栋101室",
          operation:'删除'
        },
        {
          serial: "2",
          name: "lisi",
          sex: "社区管理员",
          id: "李四",
          contact: "13578955592",
          address: "1栋102室",
          operation:'删除'
        },
        {
          serial: "3",
          name: "wangwu",
          sex: "运维人员",
          id: "王五",
          contact: "13578955593",
          address: "1栋103室",
          operation:'删除'
        },
        {
          serial: "4",
          name: "zhaoliu",
          sex: "物业人员",
          id: "赵六",
          contact: "13578955594",
          address: "1栋104室",
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
  width: 150px;
}
</style>