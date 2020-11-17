<template>
  <div id="content">
    <Header id="header"></Header>
    <section id="section">
      <Sidebar id="sidebar"></Sidebar>
      <div id="zhuti">
        <div class="zhuti-div1">
          <p>房屋信息</p>
        </div>
        <div class="zhuti-div2">
          <div class="zhuti-div2-div1">
            <div class="block">
              <el-select v-model="value" clearable placeholder="房产类型">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </div>
            <div class="block">
              <el-select v-model="value1" clearable placeholder="区域">
                <el-option v-for="item in options1" :key="item.value1" :label="item.label1" :value="item.value1"></el-option>
              </el-select>
            </div>
            <div class="block">
              <el-select v-model="value2" clearable placeholder="装修">
                <el-option v-for="item in options2" :key="item.value2" :label="item.label2" :value="item.value2"></el-option>
              </el-select>
            </div>
            <div class="block">
              <el-select v-model="value3" clearable placeholder="房屋类型">
                <el-option v-for="item in options3" :key="item.value3" :label="item.label3" :value="item.value3"></el-option>
              </el-select>
            </div>
            <div class="block">
              <el-input placeholder="请输入房屋编号" v-model="input" clearable></el-input>
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
              <el-table-column header-align="center" align="center" prop="serial" label="序号" width="105">
              </el-table-column>
              <el-table-column header-align="center" align="center" prop="house" label="房产类型" width="105">
              </el-table-column>
              <el-table-column header-align="center" align="center" prop="area" label="区域" width="105">
              </el-table-column>
              <el-table-column header-align="center" align="center" prop="acreage" label="面积" width="105">
              </el-table-column>
              <el-table-column header-align="center" align="center" prop="habitable" label="几室几厅" width="105">
              </el-table-column>
              <el-table-column header-align="center" align="center" prop="number" label="楼层索引（房屋编号）" width="170">
              </el-table-column>
              <el-table-column header-align="center" align="center" prop="fitment" label="装修" width="105">
              </el-table-column>
              <el-table-column header-align="center" align="center" prop="building" label="房屋类型" width="105">
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
  name: "FangWuXinXi",
  components: {
    Header,
    Sidebar,
  },
  data() {
    return {
      options: [{
          value: '选项1',
          label: '一手房'
        }, {
          value: '选项2',
          label: '二手房'
        }],
        value: '',
        options1: [{
          value1: '选项1',
          label1: 'A区'
        }, {
          value1: '选项2',
          label1: 'B区'
        }, {
          value1: '选项3',
          label1: 'C区'
        }, {
          value1: '选项4',
          label1: 'D区'
        }],
        value1: '',
        options2: [{
          value2: '选项1',
          label2: '毛胚'
        }, {
          value2: '选项2',
          label2: '精装'
        }, {
          value2: '选项3',
          label2: '简装'
        }, {
          value2: '选项4',
          label2: '豪华装修'
        }],
        value2: '',
        options3: [{
          value3: '选项1',
          label3: '商品房'
        }, {
          value3: '选项2',
          label3: '经济适用房'
        }, {
          value3: '选项3',
          label3: '小产权'
        }, {
          value3: '选项4',
          label3: 'xxx'
        }],
        value3: '',
        input: '',
      tableData: [
        {
          serial: "1",
          house: "二手房",
          area: "A区",
          acreage: "98/平米",
          habitable: "2室2厅",
          number: "1栋101室",
          fitment: "毛坏",
          building: "商品房",
          operation:'删除'
        },
        {
          serial: "2",
          house: "一手房",
          area: "B区",
          acreage: "98/平米",
          habitable: "3室2厅",
          number: "1栋102室",
          fitment: "精装",
          building: "商品房",
          operation:'删除'
        },
        {
          serial: "3",
          house: "二手房",
          area: "C区",
          acreage: "98/平米",
          habitable: "2室2厅",
          number: "1栋103室",
          fitment: "豪华精装",
          building: "经济适用房",
          operation:'删除'
        },
        {
          serial: "4",
          house: "二手房",
          area: "D区",
          acreage: "98/平米",
          habitable: "3室2厅",
          number: "1栋104室",
          fitment: "精装",
          building: "经济适用房",
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
  justify-content: space-around;
  margin-top: 20px;
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
.el-table-column-div-ul li:nth-of-type(3){
  color: #623bfe;
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