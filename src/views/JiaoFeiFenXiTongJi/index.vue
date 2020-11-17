<template>
  <div id="content">
    <Header id="header"></Header>
    <section id="section">
      <Sidebar id="sidebar"></Sidebar>
      <div id="zhuti">
        <div class="zhuti-div1">
          <p>缴费分析统计</p>
        </div>
        <div class="zhuti-div2">
          <div class="zhuti-div2-div1">
            <ul class="zhuti-div2-div1-ul">
              <li>
                <div>
                  <img src="../../assets/images/JiaoFeiFenXiTongJi/u2640.svg" />
                </div>
                <div>
                  <p>1000</p>
                  <p>水费</p>
                </div>
              </li>
              <li>
                <div>
                  <img src="../../assets/images/JiaoFeiFenXiTongJi/u2644.svg" />
                </div>
                <div>
                  <p>500</p>
                  <p>电费</p>
                </div>
              </li>
              <li>
                <div>
                  <img src="../../assets/images/JiaoFeiFenXiTongJi/u2648.svg" />
                </div>
                <div>
                  <p>100</p>
                  <p>煤气费</p>
                </div>
              </li>
              <li>
                <div>
                  <img src="../../assets/images/JiaoFeiFenXiTongJi/u2652.svg" />
                </div>
                <div>
                  <p>100</p>
                  <p>宽带费</p>
                </div>
              </li>
              <li>
                <div>
                  <img src="../../assets/images/JiaoFeiFenXiTongJi/u2657.svg" />
                </div>
                <div>
                  <p>100</p>
                  <p>停车费</p>
                </div>
              </li>
              <li>
                <div>
                  <img src="../../assets/images/JiaoFeiFenXiTongJi/u2661.svg" />
                </div>
                <div>
                  <p>100</p>
                  <p>物业费</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="zhuti-div2-div2">
            <div class="zhuti-div2-div2-div1">
              <p> | 收费分析</p>
              <p>
                <span>银行转账（%）：50</span>
                <span>手机收款（%）：20</span>
                <span>现金交易（%）：30</span>
              </p>
            </div>
            <div class="zhuti-div2-div2-div2">
              <el-select size="mini" v-model="value" clearable placeholder="所有年份">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </div>
            <div class="zhuti-div2-div2-div3">
              <ZheXianTu1></ZheXianTu1>
            </div>
          </div>
          <div class="zhuti-div2-div3">
            <div class="zhuti-div2-div3-div1">
              <p> | 欠费分析</p>
            </div>
            <div class="zhuti-div2-div3-div2">
              <el-select size="mini" v-model="value1" clearable placeholder="所有年份">
                <el-option v-for="item in options1" :key="item.value1" :label="item.label1" :value="item.value1"></el-option>
              </el-select>
            </div>
            <div class="zhuti-div2-div3-div3">
              <ZheXianTu2></ZheXianTu2>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import ZheXianTu1 from "../../components/ZheXianTu1";
import ZheXianTu2 from "../../components/ZheXianTu2";
export default {
  name: "JiaoFeiFenXiTongJi",
  components: {
    Header,
    Sidebar,
    ZheXianTu1,
    ZheXianTu2
  },
  data() {
    return {
      options: [{
          value: '选项1',
          label: '2019年'
        }, {
          value: '选项2',
          label: '2018年'
        }, {
          value: '选项3',
          label: '2017年'
        }, {
          value: '选项4',
          label: '2016年'
        }, {
          value: '选项5',
          label: '2015年'
        },{
          value: '选项6',
          label: '2014年'
        }, {
          value: '选项7',
          label: '2013年'
        }, {
          value: '选项8',
          label: '2012年'
        }, {
          value: '选项9',
          label: '2011年'
        }, {
          value: '选项10',
          label: '2010年'
        },{
          value: '选项11',
          label: '2009年'
        }, {
          value: '选项12',
          label: '2008年'
        }],
        options1: [{
          value1: '选项1',
          label1: '2019年'
        }, {
          value1: '选项2',
          label1: '2018年'
        }, {
          value1: '选项3',
          label1: '2017年'
        }, {
          value1: '选项4',
          label1: '2016年'
        }, {
          value1: '选项5',
          label1: '2015年'
        },{
          value1: '选项6',
          label1: '2014年'
        }, {
          value1: '选项7',
          label1: '2013年'
        }, {
          value1: '选项8',
          label1: '2012年'
        }, {
          value1: '选项9',
          label1: '2011年'
        }, {
          value1: '选项10',
          label1: '2010年'
        },{
          value1: '选项11',
          label1: '2009年'
        }, {
          value1: '选项12',
          label1: '2008年'
        }],
        value: '',
        value1: ''
    }
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
  margin-top: 10px;
  border: 1px solid #ededff;
  margin-right: 5px;
}
.zhuti-div2-div1{
  margin-top: 20px
}
.zhuti-div2-div1-ul {
  display: flex;
  justify-content: space-around;
}
.zhuti-div2-div1-ul li {
  display: inline-block;
  border: 1px solid #000000;
  border-radius: 6px; 
  padding: 5px 20px 5px 15px;
}
.zhuti-div2-div1-ul li div {
  display: inline-block;
  vertical-align: middle;
}
.zhuti-div2-div1-ul li div:nth-of-type(1) img {
  width: 50px;
}
.zhuti-div2-div1-ul li div:nth-of-type(2) {
  margin-left: 10px;
  text-align: center;
}
.zhuti-div2-div1-ul li div:nth-of-type(2) p:nth-of-type(1) {
  font-size: 22px;
  padding: 2px 0;
}
.zhuti-div2-div1-ul li div:nth-of-type(2) p:nth-of-type(2) {
  font-size: 14px;
  margin-top: -6px;
  padding: 2px 0;
}
.zhuti-div2-div2{
  border: 1px solid #ededff;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
}
.zhuti-div2-div2-div1{
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ededff;
  padding: 5px 0;
}
.zhuti-div2-div2-div1 p:nth-of-type(1){
  margin-left: 10px;
}
.zhuti-div2-div2-div1 p:nth-of-type(2){
  margin-right: 10px;
}
.zhuti-div2-div2-div1 p:nth-of-type(2) span{
  margin-left: 20px;
}
.zhuti-div2-div2-div2{
  text-align: right;
  margin: 20px 20px 0 0;
}
.zhuti-div2-div3{
  border: 1px solid #ededff;
  margin: 20px;
}
.zhuti-div2-div3-div1{
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ededff;
  padding: 5px 0;
}
.zhuti-div2-div3-div1 p:nth-of-type(1){
  margin-left: 10px;
}
.zhuti-div2-div3-div1 p:nth-of-type(2){
  margin-right: 10px;
}
.zhuti-div2-div3-div1 p:nth-of-type(2) span{
  margin-left: 20px;
}
.zhuti-div2-div3-div2{
  text-align: right;
  margin: 20px 20px 0 0;
}
</style>