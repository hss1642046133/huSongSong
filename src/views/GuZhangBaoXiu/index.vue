<template>
  <div id="zhuti">
    <div class="zhuti-div1">
      <p>物业报修</p>
    </div>
    <div class="zhuti-div2">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="公共报修 （4 | 2）" name="first">
          <GongGongBaoXiu></GongGongBaoXiu>
        </el-tab-pane>
        <el-tab-pane label="个人报修 （4 | 2）" name="second">
          <GeRenBaoXiu></GeRenBaoXiu>
        </el-tab-pane>
      </el-tabs>
      <div class="shuifei-div2-div1">
        <ul class="shuifei-div2-div1-ul">
          <li>
            <span>总账单数:100/条</span>
            <span>页数:1/9</span>
            <span>每页:12/条</span>
          </li>
          <li>
            <el-pagination background layout="prev, pager, next" :total="90"></el-pagination>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import GongGongBaoXiu from "../../components/GongGongBaoXiu";
import GeRenBaoXiu from "../../components/GeRenBaoXiu";
export default {
  name: "GuZhangBaoXiu",
  components: {
    GongGongBaoXiu,
    GeRenBaoXiu
  },
  data() {
    return {
      activeName: "first"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
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
  padding-top: 25px;
  border-left: 1px solid #ededff;
  border-right: 1px solid #ededff;
  border-bottom: 1px solid #ededff;
  margin-right: 5px;
}
::v-deep .el-tabs--card > .el-tabs__header .el-tabs__nav {
  border-radius: 0;
}
::v-deep .el-tabs__item.is-active {
  background-color: #623bfe;
  color: #ffffff;
}
.shuifei-div2-div1 {
  border-top: 1px solid #f0f0ff;
  padding: 10px 0;
  margin-top: 100px;
}
.shuifei-div2-div1-ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.shuifei-div2-div1-ul li:nth-of-type(1) span ~ span {
  margin-left: 20px;
}
</style>