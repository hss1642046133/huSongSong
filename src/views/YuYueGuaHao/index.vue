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
            <el-button class="el-button1" @click="Click">快速预约</el-button>
            <el-button class="el-button2">预约记录</el-button>
          </div>
          <div class="zhuti-div2-div2">
            <ul class="zhuti-div2-div2-ul">
              <li>
                <span>手机扫一扫</span>
                <span><img src="../../assets/images/YuYueGuaHao/u1992.svg"/></span>
              </li>
              <li><img src="../../assets/images/YuYueGuaHao/u1990.svg"/></li>
              <li>【社区平台公众号二维码】</li>
            </ul>
          </div>
          <div class="zhuti-div2-div3">
            <span>温馨提示：</span>
            <span>预约完成后，预约结果将已社区公众号推送给您。如果您未关注公众号，则以短信方式发送到您的手机</span>
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
  name: "YuYueGuaHao",
  components: {
    Header,
    Sidebar,
  },
  methods: {
    Click:function(){
      this.$router.push('/kuaisuyuyue')
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
  justify-content: space-around;
  display: flex;
  margin-top: 100px;
}
.el-button{
  width: 200px;
  line-height: 120px;
}
.el-button1{
  background-color: #33cc99;
  color: #ffffff;
  border-radius: 5px;
  margin-left: 200px;
}
.el-button2{
  background-color: #cccccc;
  color: #000000;
  border-radius: 5px;
  margin-right: 200px;
}
.zhuti-div2-div2{
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
.zhuti-div2-div2-ul li{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
}
.zhuti-div2-div2-ul li:nth-of-type(1) span img{
  width: 30px;
  margin-left: 10px;
}
.zhuti-div2-div2-ul li:nth-of-type(2){
  border: 1px solid #cccccc;
  border-radius: 5px;
}
.zhuti-div2-div2-ul li:nth-of-type(2) img{
  width: 150px;
}
.zhuti-div2-div2-ul li:nth-of-type(3) {
  font-size: 12px;
}
.zhuti-div2-div3{
  display: flex;
  justify-content: center;
  margin-top: 100px;
  font-size: 12px;
  margin-bottom: 10px;
}
.zhuti-div2-div3 span:nth-of-type(1){
  color: red;
}
.zhuti-div2-div3 span:nth-of-type(2){
  color: #009688;
}
</style>