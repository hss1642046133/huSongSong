<template>
  <div id="content">
    <Header id="header"></Header>
    <section id="section">
      <Sidebar id="sidebar"></Sidebar>
      <div id="zhuti">
        <div class="zhuti-div1">
          <p>停车</p>
        </div>
        <div class="zhuti-div2">
          <ul class="zhuti-div2-ul">
            <li>
              <div><img src="../../assets/images/ZhiNengTinChe/u2256.svg" /></div>
              <div>
                <p>5</p>
                <p>停车场数</p>
              </div>
            </li>
            <li>
              <div><img src="../../assets/images/ZhiNengTinChe/u2259.svg" /></div>
              <div>
                <p>1000</p>
                <p>总车位数</p>
              </div>
            </li>
            <li>
              <div><img src="../../assets/images/ZhiNengTinChe/u2261.svg" /></div>
              <div>
                <p>999</p>
                <p>场内车辆数</p>
              </div>
            </li>
            <li>
              <div><img src="../../assets/images/ZhiNengTinChe/u2262.svg" /></div>
              <div>
                <p>50</p>
                <p>今日临时停车数</p>
              </div>
            </li>
            <li>
              <div><img src="../../assets/images/ZhiNengTinChe/u2265.svg" /></div>
              <div>
                <p>1000</p>
                <p>今日临时收入数</p>
              </div>
            </li>
            <li>
              <div><img src="../../assets/images/ZhiNengTinChe/u2266.svg" /></div>
              <div>
                <p>1000</p>
                <p>月卡数</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="zhuti-div3">
          <div class="zhuti-div3-div1">
            <p>
              <span>收入对比</span>
              <span>
                <el-radio v-model="radio" label="1">按日</el-radio>
                <el-radio v-model="radio" label="2">按周</el-radio>
                <el-radio v-model="radio" label="3">按月</el-radio>
              </span>
            </p>
            <div>
              <div class="ckxq">查看详情</div>
              <ZhuZhuangTu1></ZhuZhuangTu1>
            </div>
          </div>
          <div class="zhuti-div3-div2">
            <p>
              <span>车辆监控</span>
            </p>
            <div>
              <ul class="zhuti-div3-div2-ul">
                <li><img src="../../assets/images/ZhiNengTinChe/u2271.png"/></li>
                <li><img src="../../assets/images/ZhiNengTinChe/u2271.png"/></li>
                <li><img src="../../assets/images/ZhiNengTinChe/u2271.png"/></li>
                <li><img src="../../assets/images/ZhiNengTinChe/u2271.png"/></li>
              </ul>
              <ul class="zhuti-div3-div2-ul1">
                <li>摄像头1001</li>
                <li>摄像头1002</li>
                <li>摄像头1003</li>
                <li>摄像头1004</li>
              </ul>
            </div>
          </div>
          <div class="zhuti-div3-div3">
            <p>
              <span>设备状态</span>
              <span>
                <el-radio v-model="radio1" label="1">按日</el-radio>
                <el-radio v-model="radio1" label="2">按周</el-radio>
                <el-radio v-model="radio1" label="3">按月</el-radio>
              </span>
            </p>
            <div>
              <div class="ckxq">查看详情</div>
              <ZhuZhuangTu2></ZhuZhuangTu2>
            </div>
          </div>
        </div>
        <div class="zhuti-div3">
          <div class="zhuti-div3-div1">
            <p>
              <span>车辆出入场情况</span>
            </p>
            <div>
              <div class="ckxq">查看详情</div>
              <BingTu4></BingTu4>
            </div>
          </div>
          <div class="zhuti-div3-div2">
            <p>
              <span>车辆停靠点</span>
            </p>
            <div>   
              <LuJingTu></LuJingTu>
            </div>
          </div>
          <div class="zhuti-div3-div3">
            <p>
              <span>车牌号异常分析</span>
              <span>
                <el-radio style="margin: 0px;" v-model="radio2" label="1">按日</el-radio>
                <el-radio v-model="radio2" label="2">按周</el-radio>
                <el-radio v-model="radio2" label="3">按月</el-radio>
              </span>
            </p>
            <div>
              <div class="ckxq">查看详情</div>
              <ZhuZhuangTu3></ZhuZhuangTu3>
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
import ZhuZhuangTu1 from "../../components/ZhuZhuangTu1";
import ZhuZhuangTu2 from "../../components/ZhuZhuangTu2";
import BingTu4 from "../../components/BingTu4";
import LuJingTu from "../../components/LuJingTu";
import ZhuZhuangTu3 from "../../components/ZhuZhuangTu3";
export default {
  name: "ShouYe",
  components: {
    Header,
    Sidebar,
    ZhuZhuangTu1,
    ZhuZhuangTu2,
    BingTu4,
    LuJingTu,
    ZhuZhuangTu3
  },
  data() {
    return {
      radio: '',
      radio1: '1',
      radio2: ''
    }
  },
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
  border: 1px solid #f0f0ff;
  margin-right: 105px;
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
  margin-right: 5px;
  margin-top: 30px;
}
.zhuti-div2-ul {
  display: flex;
  justify-content: space-around;
}
.zhuti-div2-ul li {
  display: inline-block;
}
.zhuti-div2-ul li div {
  display: inline-block;
  vertical-align: middle;
}
.zhuti-div2-ul li div:nth-of-type(1) img {
  width: 50px;
}
.zhuti-div2-ul li div:nth-of-type(2) {
  margin-left: 5px;
  text-align: center;
}
.zhuti-div2-ul li div:nth-of-type(2) p:nth-of-type(1) {
  font-size: 12px;
  font-weight: bold;
  color: #623bfe;
  padding: 10px 0;
}
.zhuti-div2-ul li div:nth-of-type(2) p:nth-of-type(2) {
  font-size: 14px;
  margin-top: -6px;
  padding: 10px 0;
}
.zhuti-div3{
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  margin-right: 5px;
  height: 320px;
  margin-left: 5px;
}
.zhuti-div3-div1{
  border: 1px solid #f0f0ff;
  width: 25%;
}
.zhuti-div3-div1 p{
  display: flex;
  justify-content: space-between;
  padding: 8px 10px;
  font-size: 14px;
  border-bottom: 1px solid #f0f0ff;
}
.zhuti-div3-div2{
  border: 1px solid #f0f0ff;
  width: 46%;
  position: relative;
}
.zhuti-div3-div2-ul li{
  display: inline-block;
  padding: 2px 2px 0 2px;
  width: 49%;
  height: 138px;
}
.zhuti-div3-div2-ul li:nth-of-type(1){
  border-right: 1px solid #f0f0ff;
  border-bottom: 1px solid #f0f0ff;
}
.zhuti-div3-div2-ul li:nth-of-type(4){
  border-left: 1px solid #f0f0ff;
  border-top: 1px solid #f0f0ff;
}
.zhuti-div3-div2-ul li img{
  width: 100%;
  height: 135px;
}
.zhuti-div3-div2-ul1{
  position: absolute;
  bottom: 2px;
  left: 0;
  width: 100%;
}
.zhuti-div3-div2-ul1 li{
  display: inline-block;
  padding: 2px 2px 0 2px;
  width: 49%;
  height: 138px;
  color: #ffffff;
  font-size: 12px
}
.zhuti-div3-div2 p{
  display: flex;
  justify-content: space-between;
  padding: 8px 10px;
  font-size: 14px;
  border-bottom: 1px solid #f0f0ff;
}
.zhuti-div3-div3{
  border: 1px solid #f0f0ff;
  width: 25%;
}
.zhuti-div3-div3 p{
  display: flex;
  justify-content: space-between;
  padding: 8px 10px;
  font-size: 14px;
  border-bottom: 1px solid #f0f0ff;
}
::v-deep .el-radio{
  margin: 0 0 0 5px;
}
::v-deep .el-radio__label{
  margin: 0;
  padding: 0 2px;
}
.ckxq{
  text-align: right;
  margin: 8px 15px 0 0;
  color: #623bfe;
  cursor: pointer;
}
</style>