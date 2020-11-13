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
                    <span>当前位置：长沙市岳麓区茶子山路佑姆塘社区</span>
                    <i class="el-icon-location"></i>
                </li>
                <li @click="Click">选择其他医院</li>
            </ul>
          </div>
          <div class="zhuti-div2-div2">
            <ul class="zhuti-div2-div2-ul">
                <li>佑姆塘社区医院</li>
                <li>湘雅一医院</li>
                <li>长沙光大医院</li>
                <li>长沙爱耳眼科</li>
            </ul>
            <ul class="zhuti-div2-div2-ul1">
                <li>湖南省中医附属医院</li>
                <li>岳麓区人民医院</li>
            </ul>
          </div>
          <div class="shuifei-div2-div3">
            <ul class="shuifei-div2-div3-ul">
              <li>
                <span>总记录数:6/条</span>
                <span>页数:1/1</span>
                <span>每页:12/条</span>
              </li>
              <li>
                <el-pagination background layout="prev, pager, next" :total="10">
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
  name: "KuaiSuYuYue",
  components: {
    Header,
    Sidebar,
  },methods: {
    Click:function(){
      this.$router.push('/qitayiyuan')
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
  border: 1px solid #d7d7d7;
  margin-right: 5px;
}
.zhuti-div2-div1-ul{
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #d7d7d7;
}
.zhuti-div2-div1-ul li{
    display: flex;
    align-items: center;
}
.zhuti-div2-div1-ul li span:nth-of-type(1){
    background-image: url("../../assets/images/YuYueGuaHao/u1921.png");
    background-size: cover;
    padding: 5px 20px 5px 25px;
    cursor: pointer;
    color: #ffffff;
}
.zhuti-div2-div1-ul li span:nth-of-type(2){
    margin-left: 15px;
}
.zhuti-div2-div1-ul li i{
    margin-left: 15px;
    font-size: 22px;
    color: #623bfe;
}
.zhuti-div2-div1-ul li:nth-of-type(2){
    cursor: pointer;
    color: #623bfe;
}
.zhuti-div2-div2-ul{
    display: flex;
    justify-content: space-around;
    margin-top: 40px;
}
.zhuti-div2-div2-ul li{
    width: 18%;
    border: 1px solid #d7d7d7;
    text-align: center;
    line-height: 100px;
    border-radius: 10px;
}
.zhuti-div2-div2-ul1{
    display: flex;
    justify-content: space-around;
    margin-top: 40px;
    width: 50%;
}
.zhuti-div2-div2-ul1 li{
    width: 36%;
    border: 1px solid #d7d7d7;
    text-align: center;
    line-height: 100px;
    border-radius: 10px;
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
</style>