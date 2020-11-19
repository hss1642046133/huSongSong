<template>
  <div id="youxiandianshi">
    <div class="dianfei-div1">
      <div class="block">
        缴费单位：<el-select v-model="value" clearable placeholder="111广播电视有限公司">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </div>
      <div class="block" id="block1">
        <span>智能卡号：</span>
        <el-input placeholder="" v-model="input" clearable></el-input>
      </div>
      <div class="block">
        <el-button type="primary" plain>查询</el-button>
      </div>
      <div class="block">
        <el-button @click="Click" type="primary" plain>查看历史账单</el-button>
      </div>
    </div>
    <div class="dianfei-div2">
      <ul class="dianfei-div2-ul">
        <li><span>已购套餐：</span><el-input placeholder="" v-model="input1" clearable></el-input></li>
        <li><span>缴费单位：</span><el-input placeholder="" v-model="input2" clearable></el-input></li>
        <li><span>缴费户号：</span><el-input placeholder="" v-model="input3" clearable></el-input></li>
        <li><span>户&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</span><el-input placeholder="" v-model="input4" clearable></el-input></li>
        <li><span>地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址：</span><el-input placeholder="" v-model="input5" clearable></el-input></li>
        <li><el-button type="primary" plain>立即缴费</el-button></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "YouXianDianShi",
  data() {
    return {
      options: [{
          value: '选项1',
          label: '111广播电视有限公司'
        }, {
          value: '选项2',
          label: '222广播电视有限公司'
        }, {
          value: '选项3',
          label: '333广播电视有限公司'
        }, {
          value: '选项4',
          label: '444广播电视有限公司'
        }, {
          value: '选项5',
          label: '555广播电视有限公司'
        }],
        value: '111广播电视有限公司',
    input: '123456',
    input1: '488.00元/年 - 单向高清全能套餐',
    input2: '111广播电视有限公司',
    input3: '111111',
    input4: 'xxx',
    input5: 'xx市xx区xx街道xx社区xx栋xx室'
    }
  },
  methods: {
    Click: function () {
      this.$router.push("/jiaofeichaxun");
    },
  },
};
</script>

<style scoped>
#youxiandianshi {
  width: 100%;
  border: 1px solid #ededff;
}
.el-button--primary {
    color: #FFF;
    background-color: #409EFF;
    border-color: #409EFF;
    width: 120px;
}
.dianfei-div1 {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  border-bottom: 1px solid #ededff;
  padding-bottom: 20px;
}
#block1{
  display: flex;
  align-items: center;
}
#block1 span{
  width: 100px;
}
.dianfei-div2{
  display: flex;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 100px;
}
.dianfei-div2-ul{
  width: 35%;
  margin-right: 150px;
}
.dianfei-div2-ul li{
  display: flex;
  align-items: center;
  margin: 20px 0;
}
.dianfei-div2-ul li span{
  width: 180px;
  text-align: right;
  margin-right: 10px;
}
.dianfei-div2-ul li:nth-of-type(6){
  display: flex;
  justify-content: flex-end;
}
::v-deep .dianfei-div2-ul li .el-input__inner{
  background-color: #f8f8f8;
}
.dianfei-div2-ul li:nth-of-type(6) .el-button{
  width: 252px;
}

</style>