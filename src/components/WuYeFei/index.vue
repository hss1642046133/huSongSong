<template>
  <div id="wuyefei">
    <div class="dianfei-div1">
      <div class="block" id="block1">
        <span>业主姓名：</span>
        <el-input placeholder="" v-model="input" clearable></el-input>
      </div>
      <div class="block" id="block2">
        <span>手机号码：</span>
        <el-input placeholder="" v-model="input1" clearable></el-input>
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
        <li><span>业主姓名：</span><el-input placeholder="" v-model="input2" clearable></el-input></li>
        <li><span>手机号码：</span><el-input placeholder="" v-model="input3" clearable></el-input></li>
        <li><span>住户地址：</span><el-input placeholder="" v-model="input4" clearable></el-input></li>
      </ul>
    </div>
    <div class="dianfei-div3">
        <div class="dianfei-div3-div">
          <span>需缴纳的物业费如下：</span>
          <el-table :header-cell-style="{background:'#623bfe',color:'#ffffff'}" ref="multipleTable" :data="tableData" border tooltip-effect="dark" style="width: 100%">
            <el-table-column header-align="center" align="center" type="selection" width="55"></el-table-column>
            <el-table-column header-align="center" align="center" prop="time" label="时间" width="120"></el-table-column>
            <el-table-column header-align="center" align="center" prop="cost" label="费用/元" show-overflow-tooltip></el-table-column>
          </el-table>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WuYeFei",
  data() {
    return {
    input: '小明',
    input1: '15212311109',
    input2: '小明',
    input3: '15212311109',
    input4: 'xx小区xx栋xx室',
    tableData: [{
          time: '2019年6月',
          cost: '￥100.00'
        }, {
          time: '2019年7月',
          cost: '￥100.00'
        }, {
          time: '2019年8月',
          cost: '￥100.00'
        }],
        multipleSelection: []
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
#wuyefei {
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
#block2{
  display: flex;
  align-items: center;
}
#block2 span{
  width: 100px;
}
.dianfei-div2{
  display: flex;
  justify-content: center;
  margin-top: 40px;
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
::v-deep .dianfei-div2-ul li:nth-of-type(3) .el-input__inner{
  background-color: #f8f8f8;
}
.dianfei-div2-ul li:nth-of-type(6) .el-button{
  width: 252px;
}
.dianfei-div2-ul li:nth-of-type(4) span{
  margin-left: 10px;
}
.dianfei-div3{
  display: flex;
  justify-content: center;
}
.dianfei-div3-div{
  width: 25%;
  margin-right: 160px;
  margin-bottom: 100px;
}
.dianfei-div3-div .el-table{
  margin-top: 20px;
  margin-left: 80px;
}
</style>