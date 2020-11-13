<template>
  <div id="content">
    <Header id="header"></Header>
    <section id="section">
      <Sidebar id="sidebar"></Sidebar>
      <div id="zhuti">
        <div class="zhuti-div1">
          <p>预约挂号</p>
        </div>
        <div class="zhuti-div2">
          <div class="zhuti-div2-div1">
            <ul class="zhuti-div2-div1-ul">
              <li>
                <span>返回</span>
                <span>类型：</span>
                <el-radio v-model="radio" label="1">全部医院</el-radio>
                <el-radio v-model="radio" label="2">省级医院</el-radio>
                <el-radio v-model="radio" label="3">市级医院</el-radio>
                <el-radio v-model="radio" label="4">专科医院</el-radio>
                <el-radio v-model="radio" label="5">重点医院</el-radio>
              </li>
              <li>
                <el-input placeholder="请输入医院名称" v-model="input" clearable>
                </el-input>
                <el-button type="primary">搜索</el-button>
              </li>
            </ul>
          </div>
          <div class="zhuti-div2-div2">
            <ul class="zhuti-div2-div2-ul">
              <li>湘雅二医院</li>
              <li>湘雅三医院</li>
              <li>湘雅口腔医院</li>
              <li>长沙市一医院</li>
            </ul>
            <ul class="zhuti-div2-div2-ul1">
              <li>长沙市二医院</li>
              <li>长沙市三医院</li>
              <li>长沙市四医院</li>
              <li>长沙市妇幼保键院</li>
            </ul>
            <ul class="zhuti-div2-div2-ul2">
              <li>湖南省儿童医院</li>
              <li>湖南省妇幼保键院</li>
              <li>湖南省人民医院</li>
              <li>湖南省xxx医院</li>
            </ul>
          </div>
          <div class="shuifei-div2-div3">
            <img src="../../assets/images/YuYueGuaHao/u1951.svg"/>
            <span>点我加载</span>
          </div>
          <div class="shuifei-div2-div4">
            <ul class="shuifei-div2-div4-ul">
              <li>
                <span>总记录数:100/条</span>
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
  name: "QiTaYiYuan",
  components: {
    Header,
    Sidebar,
  },
  data() {
    return {
      radio: "1",
      input: ''
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
  border: 1px solid #d7d7d7;
  margin-right: 5px;
}
.zhuti-div2-div1-ul {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #d7d7d7;
}
.zhuti-div2-div1-ul li {
  display: flex;
  align-items: center;
}
.el-radio {
  margin-top: 4px;
}
.zhuti-div2-div1-ul li span:nth-of-type(1) {
  background-image: url("../../assets/images/YuYueGuaHao/u1921.png");
  background-size: cover;
  padding: 5px 20px 5px 25px;
  cursor: pointer;
  color: #ffffff;
}
.zhuti-div2-div1-ul li span:nth-of-type(2) {
  margin-left: 15px;
  margin-right: 10px;
}
.zhuti-div2-div1-ul li:nth-of-type(2) {
  cursor: pointer;
  color: #623bfe;
}
.zhuti-div2-div2-ul {
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
}
.zhuti-div2-div2-ul li {
  width: 18%;
  border: 1px solid #d7d7d7;
  text-align: center;
  line-height: 100px;
  border-radius: 10px;
}
.zhuti-div2-div2-ul1 {
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
}
.zhuti-div2-div2-ul1 li {
  width: 18%;
  border: 1px solid #d7d7d7;
  text-align: center;
  line-height: 100px;
  border-radius: 10px;
}
.zhuti-div2-div2-ul2 {
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
}
.zhuti-div2-div2-ul2 li {
  width: 18%;
  border: 1px solid #d7d7d7;
  text-align: center;
  line-height: 100px;
  border-radius: 10px;
}
.shuifei-div2-div3{
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 20px;
}
.shuifei-div2-div3 img{
  width: 30px;
  margin-right: 10px;
}
.shuifei-div2-div3 span{
  color: #623bfe;
  margin-top: 5px;
}
.shuifei-div2-div4 {
  border-top: 1px solid #f0f0ff;
  padding: 10px 0;
  margin-top: 100px;
}
.shuifei-div2-div4-ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.shuifei-div2-div4-ul li:nth-of-type(1) span ~ span {
  margin-left: 20px;
}
</style>