<template>
  <div id="guhuakuandai">
    <div class="dianfei-div1">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="个人充值交费" name="first">
          <div class="dianfei-div1-div1">
            <ul class="dianfei-div1-div1-ul1">
              <li>填写充值信息</li>
              <li>
                <span>产品类型:</span>
                <el-select v-model="value" clearable placeholder="宽带">
                  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </li>
              <li><span>所在城市:</span><i class="el-icon-location"></i>&nbsp;长沙&nbsp;<el-link type="primary">[切换城市]</el-link></li>
              <li><span>充值号码:</span><el-input placeholder="" v-model="input" clearable></el-input></li>
              <li><span>确认号码:</span>13512322262</li>
            </ul>
          </div>
          <div class="dianfei-div1-div2">
            <ul class="dianfei-div1-div1-ul2">
              <li>选择支付方式</li>
              <li>
                <span>充值金额/元:</span>
                <el-button type="primary" plain>50</el-button>
                <el-button type="primary" plain>100</el-button>
                <el-button type="primary" plain>200</el-button>
                <el-button type="primary" plain>300</el-button>
                <span>其他：</span>
                <el-input placeholder="" v-model="input1" clearable></el-input>
              </li>
              <li>
                <span>验证码:</span>
                <el-input placeholder="" v-model="input2" clearable></el-input>
                <img src="../../assets/images/GuHuaKuanDai/u1487.png"/>
              </li>
              <li>
                <span>支付方式:</span>
                <el-radio v-model="radio" label="1">
                  <img src="../../assets/images/GuHuaKuanDai/u1518.svg"/>
                </el-radio>
                <el-radio v-model="radio" label="2">
                  <img src="../../assets/images/GuHuaKuanDai/u1521.svg"/>
                </el-radio>
              </li>
              <li><el-button type="primary">立即缴费</el-button></li>
            </ul>
          </div>
        </el-tab-pane>
        <el-tab-pane label="宽带包年续费" name="second">
          <div class="dianfei-div2-div1">
            <ul class="dianfei-div2-div1-ul1">
              <li>填写充值信息</li>
              <li><span>宽带账号:</span><el-input placeholder="" v-model="input3" clearable></el-input></li>
              <li><span>确认账号:</span>13512322262</li>
              <li><span>宽带密码:</span><el-input placeholder="" v-model="input4" clearable></el-input></li>
              <li><span>验证码:</span><el-input placeholder="" v-model="input5" clearable></el-input><img src="../../assets/images/GuHuaKuanDai/u1487.png"/></li>
              <li><el-button type="primary">立即缴费</el-button><el-link type="danger">续费有效期一年</el-link></li>
            </ul>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "GuHuaKuanDai",
  data() {
    return {
      activeName: 'first',
      options: [{
          value: '选项1',
          label: '宽带'
        }, {
          value: '选项2',
          label: '固话'
        }, {
          value: '选项3',
          label: '手机'
        }],
        value: '宽带',
      input: '13512322262',
      input1: '',
      input2: '',
      radio: '1',
      input3: '13512322262',
      input4: '13512322262',
      input5: '13512322262'
    }
  },
  methods: {
    Click: function () {
      this.$router.push("/jiaofeichaxun");
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
};
</script>

<style scoped>
#guhuakuandai {
  width: 100%;
}
::v-deep .el-tabs--card > .el-tabs__header .el-tabs__nav {
  border-radius: 0;
}
::v-deep .el-tabs__item.is-active {
  background-color: #623bfe;
  color: #ffffff;
}
::v-deep .el-tabs__content{
  border: 1px solid #f0f0ff;
  margin-top: -16px;
}
.dianfei-div1-div1{
  margin: 0 auto;
  width: 90%;
  border: 1px solid #e4e4e4;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  position: relative;
}
.dianfei-div1-div1-ul1{
  width: 290px;
  margin-right: 50px;
}
.dianfei-div1-div1-ul1 li{
  display: flex;
  align-items: center;
  margin: 20px 0;
}
.dianfei-div1-div1-ul1 li span{
  width: 80px;
}
.dianfei-div1-div1-ul1 li:nth-of-type(4) .el-input{
  margin-left: 15px;
}
.dianfei-div1-div1-ul1 li:nth-of-type(1){
  position: absolute;
  left: 20px;
  top: -32px;
  border: 1px solid #e4e4e4;
  font-size: 12px;
  padding: 4px 15px;
  background-color: #ffffff;
}
i{
  font-size: 24px;
}
.dianfei-div1-div2{
  margin: 0 auto;
  width: 90%;
  border: 1px solid #e4e4e4;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  position: relative;
  margin-bottom: 50px;
}
.dianfei-div1-div1-ul2{
  width: 550px;
  margin-right: 50px;
}
.dianfei-div1-div1-ul2 li{
  display: flex;
  align-items: center;
  margin: 20px 0;
}
.dianfei-div1-div1-ul2 li:nth-of-type(2) span:nth-of-type(1){
  width: 80px;
  margin-right: 10px;
}
.dianfei-div1-div1-ul2 li:nth-of-type(2) span:nth-of-type(2){
  width: 50px;
  margin-left: 15px;
}
.dianfei-div1-div1-ul2 li:nth-of-type(2) .el-input{
  width: 100px;
}
.dianfei-div1-div1-ul2 li:nth-of-type(3) span{
  width: 80px;
  text-align: right;
  margin-right: 10px;
}
.dianfei-div1-div1-ul2 li:nth-of-type(4) span{
  width: 80px;
  text-align: right;
  margin-right: 10px;
}
.dianfei-div1-div1-ul2 li:nth-of-type(3) .el-input{
  width: 200px;
}
.dianfei-div1-div1-ul2 li:nth-of-type(3) img{
  width: 80px;
  margin-left: 15px;
}
.dianfei-div1-div1-ul2 li:nth-of-type(4) img{
  width: 30px;
  margin-bottom: -10px;
}
.dianfei-div1-div1-ul2 li:nth-of-type(5) .el-button{
  margin-left: 90px;
  width: 250px;
}
.dianfei-div1-div1-ul2 li:nth-of-type(1){
  position: absolute;
  left: 20px;
  top: -32px;
  border: 1px solid #e4e4e4;
  font-size: 12px;
  padding: 4px 15px;
  background-color: #ffffff;
}
.dianfei-div2-div1{
  margin: 0 auto;
  width: 90%;
  border: 1px solid #e4e4e4;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  position: relative;
}
.dianfei-div2-div1-ul1{
  width: 400px;
  margin-right: 50px;
}
.dianfei-div2-div1-ul1 li{
  display: flex;
  align-items: center;
  margin: 20px 0;
}
.dianfei-div2-div1-ul1 li span{
  width: 100px;
}
.dianfei-div2-div1-ul1 li:nth-of-type(5) span{
  width: 103px;
  text-align: right;
  margin-right: 21px;
}
.dianfei-div2-div1-ul1 li:nth-of-type(5) img{
  width: 80px;
  margin-left: 10px;
}
.dianfei-div2-div1-ul1 li:nth-of-type(6) .el-button{
  width: 200px;
  margin-left: 80px;
}
::v-deep .dianfei-div2-div1-ul1 li:nth-of-type(6) .el-link{
  margin-left: 10px;
}
.dianfei-div2-div1-ul1 li:nth-of-type(1){
  position: absolute;
  left: 20px;
  top: -32px;
  border: 1px solid #e4e4e4;
  font-size: 12px;
  padding: 4px 15px;
  background-color: #ffffff;
}
</style>