<template>
  <div id="zhuti">
    <div class="zhuti-div1">
      <p>物业缴费</p>
    </div>
    <div class="zhuti-div2">
      <div class="zhuti-div2-div1">缴费类型</div>
      <div class="zhuti-div2-div2">
        <el-row>
          <el-button @click="Click1" type="primary" plain>水费</el-button>
          <el-button @click="Click2" type="primary" plain>电费</el-button>
          <el-button @click="Click3" type="primary" plain>停车费</el-button>
          <el-button @click="Click4" type="primary" plain>燃气费</el-button>
          <el-button @click="Click5" type="primary" plain>固话宽带</el-button>
          <el-button @click="Click6" type="primary" plain>有线电视</el-button>
          <el-button @click="Click7" type="primary" plain>物业费</el-button>
        </el-row>
      </div>
    </div>
    <div class="zhuti-div3">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "WuYeJiaoFei",
  methods: {
    Click1: function() {
      this.$router.push("/wuyejiaofei/shuifei");
    },
    Click2: function() {
      this.$router.push("/wuyejiaofei/dianfei");
    },
    Click3: function() {
      this.$router.push("/wuyejiaofei/TingCheFei");
    },
    Click4: function() {
      this.$router.push("/wuyejiaofei/RanQiFei");
    },
    Click5: function() {
      this.$router.push("/wuyejiaofei/guhuakuandai");
    },
    Click6: function() {
      this.$router.push("/wuyejiaofei/youxiandianshi");
    },
    Click7: function() {
      this.$router.push("/wuyejiaofei/wuyefei");
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
  margin-top: 10px;
}
.zhuti-div2 div {
  display: inline-block;
}
.zhuti-div2-div1 {
  line-height: 38px;
  border: 1px solid #cec2ff;
  background: #623bff;
  width: 157px;
  text-align: center;
  color: #ffffff;
}
.zhuti-div2-div2 {
  margin-left: 10px;
}
.el-button {
  border-radius: 0;
  color: #ffffff;
  margin: 0;
  width: 131px;
}
.el-button--primary.is-plain {
  background: #bdbdff;
  border: 1px solid #e5e5ff;
}
.el-button--primary.is-plain:focus,
.el-button--primary.is-plain:hover {
  background: #623bfe;
  border: 1px solid #d4cafe;
}
.zhuti-div3 {
  margin-top: 15px;
  margin-right: 5px;
  margin-bottom: 20px;
}
</style>