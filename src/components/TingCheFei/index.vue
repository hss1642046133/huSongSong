<template>
  <div id="tingchefei">
    <div class="dianfei-div1">
      <el-button @click="Click" type="primary" plain>查看历史账单</el-button>
    </div>
    <div class="dianfei-div2">
      <ul class="dianfei-div2-ul">
        <li>
          <div>
            <p>湘A23J89</p>
            <p>长沙XXX社区停车场</p>
          </div>
          <div>
            <p>入场时间: 2019-08-13 12:30</p>
            <p>停车时长: 1天2小时30分<span>05</span>秒</p>
            <p>缴费金额: <span>20</span>元</p>
            <p>立即缴费</p>
          </div>
        </li>
        <li>
          <div>
            <p>湘A23J89</p>
            <p>长沙XXX社区停车场</p>
          </div>
          <div>
            <p>入场时间: 2019-08-13 12:30</p>
            <p>停车时长: 1天2小时30分<span>05</span>秒</p>
            <p>缴费金额: <span>20</span>元</p>
            <p>立即缴费</p>
          </div>
        </li>
        <li>
          <div>
            <p>湘A23J89</p>
            <p>长沙XXX社区停车场</p>
          </div>
          <div>
            <p>入场时间: 2019-08-13 12:30</p>
            <p>停车时长: 1天2小时30分<span>05</span>秒</p>
            <p>缴费金额: <span>20</span>元</p>
            <p>立即缴费</p>
          </div>
        </li>
      </ul>
      <ul class="dianfei-div2-ul">
        <li>
          <div>
            <p>湘A23J89</p>
            <p>长沙XXX社区停车场</p>
          </div>
          <div>
            <p>入场时间: 2019-08-13 12:30</p>
            <p>停车时长: 1天2小时30分<span>05</span>秒</p>
            <p>缴费金额: <span>20</span>元</p>
            <p>立即缴费</p>
          </div>
        </li>
        <li>
          <div>
            <p>湘A23J89</p>
            <p>长沙XXX社区停车场</p>
          </div>
          <div>
            <p>入场时间: 2019-08-13 12:30</p>
            <p>停车时长: 1天2小时30分<span>05</span>秒</p>
            <p>缴费金额: <span>20</span>元</p>
            <p>立即缴费</p>
          </div>
        </li>
        <li>
          <div>
            <p>湘A23J89</p>
            <p>长沙XXX社区停车场</p>
          </div>
          <div>
            <p>入场时间: 2019-08-13 12:30</p>
            <p>停车时长: 1天2小时30分<span>05</span>秒</p>
            <p>缴费金额: <span>20</span>元</p>
            <p>立即缴费</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="dianfei-div3">
      <ul class="dianfei-div3-ul">
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
</template>

<script>
export default {
  name: "TingCheFei",
  methods: {
    Click: function () {
      this.$router.push("/jiaofeichaxun");
    },
  },
};
</script>

<style scoped>
#tingchefei {
  width: 100%;
  border: 1px solid #ededff;
}
.dianfei-div1 {
  display: flex;
  justify-content: flex-end;
}
.el-button {
  border-radius: 0;
  color: #ffffff;
  margin: 0;
  width: 120px;
  line-height: 0px;
  font-size: 12px;
}
.el-button--primary.is-plain {
  background: #bdbdff;
  border: 1px solid #e5e5ff;
}
.el-button--primary.is-plain:focus,
.el-button--primary.is-plain:hover {
  background: #bdbdff;
  border: 1px solid #e5e5ff;
}
.dianfei-div2-ul {
  display: flex;
  justify-content: space-around;
  margin: 20px 60px 0 60px;
}
.dianfei-div2-ul li div:nth-of-type(1){
  height: 90px;
  width: 190px;
  background: #bdbdff;
  border-radius: 50% 50% 0 0;
  text-align: center;
  color: #ffffff;
}
.dianfei-div2-ul li div:nth-of-type(1) p:nth-of-type(1){
  font-size: 24px;
  padding-top: 25px
}
.dianfei-div2-ul li div:nth-of-type(1) p:nth-of-type(2){
  font-size: 12px;
}
.dianfei-div2-ul li div:nth-of-type(2){
  height: 145px;
  width: 188px;
  border: 1px solid #bdbdff;
  font-size: 12px;
}
.dianfei-div2-ul li div:nth-of-type(2) p{
  margin-top: 15px;
}
.dianfei-div2-ul li div:nth-of-type(2) p:nth-of-type(1){
  margin-left: 15px;
}
.dianfei-div2-ul li div:nth-of-type(2) p:nth-of-type(2){
  margin-left: 15px;
}
.dianfei-div2-ul li div:nth-of-type(2) p:nth-of-type(3){
  margin-left: 15px;
}
.dianfei-div2-ul li div:nth-of-type(2) p:nth-of-type(4){
  line-height: 28px;
  border-radius: 3px;
  background-color: #b9b9ff;
  padding: 0 6px;
  font-size: 12px;
  color: #ffffff;
  cursor: pointer;
  text-align: center;
  margin: 15px 15px 0 15px;
}
.dianfei-div2-ul li div:nth-of-type(2) p span{
  color: red;
  font-weight: bold;
}
.dianfei-div3{
  margin-top: 100px;
  border-top: 1px solid #f0f0ff;
  padding: 10px 0;
}
.dianfei-div3-ul{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.dianfei-div3-ul li:nth-of-type(1) span~span{
  margin-left: 20px;
}
</style>