<template>
  <div id="zhuti">
    <div class="zhuti-div1">
      <p>医生简介</p>
    </div>
    <div class="zhuti-div2">
      <div class="zhuti-div2-div1">
        <ul class="zhuti-div2-div1-ul">
          <li>
            <img src="../../assets/images/ShouYe/u2200.png" />
          </li>
          <li>张xx</li>
          <li>国籍： 中国</li>
          <li>出生年月：1978年12月</li>
          <li>性别：男</li>
          <li>职业：外科医生</li>
          <li>职称：副主任医师</li>
        </ul>
      </div>
      <div class="zhuti-div2-div2">
        <ul class="zhuti-div2-div2-ul1">
          <li>主要经历：</li>
          <li>经历一：</li>
          <li>经历二：</li>
          <li>经历三：</li>
          <li>经历四：</li>
          <li>经历五：</li>
        </ul>
        <ul class="zhuti-div2-div2-ul2">
          <li>职 务：</li>
          <li>职务一：</li>
          <li>职务二：</li>
          <li>职务三：</li>
          <li>职务四：</li>
          <li>职务五：</li>
        </ul>
        <ul class="zhuti-div2-div2-ul3">
          <li>荣 誉：</li>
          <li>2000年 荣获xx市xx优秀个人</li>
          <li>2003年 荣获xx市xx医院xx一等功</li>
          <li>2005年 荣获xx市评定为“优秀医生”</li>
          <li>2008年 荣获xx市xx医院xx一等功</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ZhuRenYiSheng"
};
</script>

<style scoped>
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
  border: 1px solid #cccccc;
  margin-right: 5px;
  display: flex;
}
.zhuti-div2-div1 {
  border-right: 1px solid #cccccc;
  width: 24%;
}
.zhuti-div2-div1-ul li:nth-of-type(1) {
  display: flex;
  justify-content: center;
  padding-top: 30px;
}
.zhuti-div2-div1-ul li:nth-of-type(1) img {
  width: 70%;
}
.zhuti-div2-div1-ul li:nth-of-type(2) {
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
}
.zhuti-div2-div1-ul li:nth-of-type(3) {
  margin-left: 15%;
  margin-top: 40px;
  font-weight: bold;
}
.zhuti-div2-div1-ul li:nth-of-type(3) ~ li {
  margin-left: 15%;
  margin-top: 15px;
  font-weight: bold;
}
.zhuti-div2-div2 {
  width: 76%;
}
.zhuti-div2-div2-ul1 li {
  margin: 10px 0 0 10px;
}
.zhuti-div2-div2-ul1 li:nth-of-type(1) {
  font-weight: bold;
}
.zhuti-div2-div2-ul2 {
  margin-top: 100px;
  border-top: 1px solid #cccccc;
  margin-left: 10px;
}
.zhuti-div2-div2-ul2 li {
  margin-top: 10px;
}
.zhuti-div2-div2-ul2 li:nth-of-type(1) {
  font-weight: bold;
}
.zhuti-div2-div2-ul3 {
  margin-top: 100px;
  border-top: 1px solid #cccccc;
  margin-left: 10px;
  margin-bottom: 100px;
}
.zhuti-div2-div2-ul3 li:nth-of-type(1) {
  margin-top: 10px;
  margin-bottom: 10px;
}
.zhuti-div2-div2-ul3 li:nth-of-type(1) {
  font-weight: bold;
}
</style>