<template>
  <div id="content">
    <Header id="header"></Header>
    <section id="section">
      <Sidebar id="sidebar"></Sidebar>
      <div id="zhuti">
        <div class="zhuti-div1">
          <ul class="zhuti-div1-ul">
            <li>
              <div><img src="../../assets/images/ShouYe/u958.png" /></div>
              <div>
                <p>200</p>
                <p>楼宇数</p>
              </div>
            </li>
            <li>
              <div><img src="../../assets/images/ShouYe/u961.svg" /></div>
              <div>
                <p>200</p>
                <p>登记人口</p>
              </div>
            </li>
            <li>
              <div><img src="../../assets/images/ShouYe/u965.svg" /></div>
              <div>
                <p>200</p>
                <p>智能设备数</p>
              </div>
            </li>
            <li>
              <div><img src="../../assets/images/ShouYe/u969.svg" /></div>
              <div>
                <p>200</p>
                <p>智能家居数</p>
              </div>
            </li>
            <li>
              <div><img src="../../assets/images/ShouYe/u973.svg" /></div>
              <div>
                <p>200</p>
                <p>预约挂号数</p>
              </div>
            </li>
            <li>
              <div><img src="../../assets/images/ShouYe/u977.svg" /></div>
              <div>
                <p>200</p>
                <p>系统报警数</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="zhuti-div2">
          <div class="zhuti-div2-div1">
            <p>
              <span>房屋类别统计</span>
              <span>单位：个</span>
            </p>
            <div>
              <BingTu></BingTu>
            </div>
          </div>
          <div class="zhuti-div2-div2">
            <p>
              <span>设备分布图</span>
            </p>
            <div>
              <LuJingTu></LuJingTu>
            </div>
          </div>
          <div class="zhuti-div2-div3">
            <p>
              <span>设备状态</span>
              <span>单位：个</span>
            </p>
            <div>
              <BingTu1></BingTu1>
            </div>
          </div>
        </div>
        <div class="zhuti-div2">
          <div class="zhuti-div2-div1">
            <p>
              <span>预约挂号统计</span>
            </p>
            <div>
              <BingTu2></BingTu2>
            </div>
          </div>
          <div class="zhuti-div2-div2">
            <p>
              <span>缴费统计</span>
            </p>
            <div>
              <ul class="jftj-ul">
                <li>应收金额（元）：<span>10000</span></li>
                <li>已收金额（元）：<span>8000</span></li>
                <li>未收金额（元）：<span>2000</span></li>
              </ul>
              <ZhuZhuangTu></ZhuZhuangTu>
            </div>
          </div>
          <div class="zhuti-div2-div3">
            <p>
              <span>报修统计</span>
            </p>
            <div>
              <BingTu3></BingTu3>
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
import BingTu from "../../components/BingTu";
import BingTu1 from "../../components/BingTu1";
import LuJingTu from "../../components/LuJingTu";
import BingTu2 from "../../components/BingTu2";
import BingTu3 from "../../components/BingTu3";
import ZhuZhuangTu from "../../components/ZhuZhuangTu";
export default {
  name: "ShouYe",
  components: {
    Header,
    Sidebar,
    BingTu,
    BingTu1,
    LuJingTu,
    BingTu2,
    BingTu3,
    ZhuZhuangTu
  }
};
</script>

<style scoped>
::-webkit-scrollbar{
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
  border: 1px solid #f0f0ff;
  margin-right: 5px;
  padding: 15px 0;
}
.zhuti-div1-ul {
  display: flex;
  justify-content: space-around;
}
.zhuti-div1-ul li {
  display: inline-block;
}
.zhuti-div1-ul li div {
  display: inline-block;
  vertical-align: middle;
}
.zhuti-div1-ul li div:nth-of-type(1) img {
  width: 50px;
}
.zhuti-div1-ul li div:nth-of-type(2) {
  margin-left: 5px;
  text-align: center;
}
.zhuti-div1-ul li div:nth-of-type(2) p:nth-of-type(1) {
  font-size: 28px;
  font-weight: bold;
  color: #623bfe;
}
.zhuti-div1-ul li div:nth-of-type(2) p:nth-of-type(2) {
  font-size: 14px;
  margin-top: -6px;
}
.zhuti-div2{
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  margin-right: 5px;
  height: 320px;
}
.zhuti-div2-div1{
  border: 1px solid #f0f0ff;
  width: 25%;
}
.zhuti-div2-div1 p{
  display: flex;
  justify-content: space-between;
  padding: 8px 10px;
  font-size: 14px;
  border-bottom: 1px solid #f0f0ff;
}
.zhuti-div2-div2{
  border: 1px solid #f0f0ff;
  width: 46%;
}
.zhuti-div2-div2 p{
  display: flex;
  justify-content: space-between;
  padding: 8px 10px;
  font-size: 14px;
  border-bottom: 1px solid #f0f0ff;
}
.zhuti-div2-div3{
  border: 1px solid #f0f0ff;
  width: 25%;
}
.zhuti-div2-div3 p{
  display: flex;
  justify-content: space-between;
  padding: 8px 10px;
  font-size: 14px;
  border-bottom: 1px solid #f0f0ff;
}
.jftj-ul{
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
}
.jftj-ul li{
  display: inline-block;
  font-size: 12px;
}
.jftj-ul li:nth-of-type(1) span{
  color: #0000ff;
  font-weight: bold;
  font-size: 14px;
}
.jftj-ul li:nth-of-type(2) span{
  color: #008000;
  font-weight: bold;
  font-size: 14px;
}
.jftj-ul li:nth-of-type(3) span{
  color: #ff0000;
  font-weight: bold;
  font-size: 14px;
}
</style>