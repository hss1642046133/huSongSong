<template>
  <div id="dianfei">
    <div class="dianfei-div1">
      <el-button @click="Click" type="primary" plain>查看历史账单</el-button>
    </div>
    <div class="dianfei-div2">
      <ul class="dianfei-div2-ul">
        <li>
          <div>
            <span>2019-08-13</span>
            <span>电费</span>
          </div>
          <div>
            <span>小星社区1栋2单元5楼0501室</span>
            <span>小张</span>
          </div>
          <div>
            <p>
              <span>￥</span>
              <span>300.00</span>
            </p>
            <p>立即缴费</p>
          </div>
        </li>
        <li>
          <div>
            <span>2019-08-13</span>
            <span>电费</span>
          </div>
          <div>
            <span>小星社区1栋2单元5楼0501室</span>
            <span>小张</span>
          </div>
          <div>
            <p>
              <span>￥</span>
              <span>300.00</span>
            </p>
            <p>
              <span>立即缴费</span>
            </p>
          </div>
        </li>
        <li>
          <div>
            <span>2019-08-13</span>
            <span>电费</span>
          </div>
          <div>
            <span>小星社区1栋2单元5楼0501室</span>
            <span>小张</span>
          </div>
          <div>
            <p>
              <span>￥</span>
              <span>300.00</span>
            </p>
            <p>
              <span>立即缴费</span>
            </p>
          </div>
        </li>
      </ul>
      <ul class="dianfei-div2-ul">
        <li>
          <div>
            <span>2019-08-13</span>
            <span>电费</span>
          </div>
          <div>
            <span>小星社区1栋2单元5楼0501室</span>
            <span>小张</span>
          </div>
          <div>
            <p>
              <span>￥</span>
              <span>300.00</span>
            </p>
            <p>立即缴费</p>
          </div>
        </li>
        <li>
          <div>
            <span>2019-08-13</span>
            <span>电费</span>
          </div>
          <div>
            <span>小星社区1栋2单元5楼0501室</span>
            <span>小张</span>
          </div>
          <div>
            <p>
              <span>￥</span>
              <span>300.00</span>
            </p>
            <p>
              <span>立即缴费</span>
            </p>
          </div>
        </li>
        <li>
          <div>
            <span>2019-08-13</span>
            <span>电费</span>
          </div>
          <div>
            <span>小星社区1栋2单元5楼0501室</span>
            <span>小张</span>
          </div>
          <div>
            <p>
              <span>￥</span>
              <span>300.00</span>
            </p>
            <p>
              <span>立即缴费</span>
            </p>
          </div>
        </li>
      </ul>
      <ul class="dianfei-div2-ul">
        <li>
          <div>
            <span>2019-08-13</span>
            <span>电费</span>
          </div>
          <div>
            <span>小星社区1栋2单元5楼0501室</span>
            <span>小张</span>
          </div>
          <div>
            <p>
              <span>￥</span>
              <span>300.00</span>
            </p>
            <p>立即缴费</p>
          </div>
        </li>
        <li>
          <div>
            <span>2019-08-13</span>
            <span>电费</span>
          </div>
          <div>
            <span>小星社区1栋2单元5楼0501室</span>
            <span>小张</span>
          </div>
          <div>
            <p>
              <span>￥</span>
              <span>300.00</span>
            </p>
            <p>
              <span>立即缴费</span>
            </p>
          </div>
        </li>
        <li>
          <div>
            <span>2019-08-13</span>
            <span>电费</span>
          </div>
          <div>
            <span>小星社区1栋2单元5楼0501室</span>
            <span>小张</span>
          </div>
          <div>
            <p>
              <span>￥</span>
              <span>300.00</span>
            </p>
            <p>
              <span>立即缴费</span>
            </p>
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
#dianfei {
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
.dianfei-div2-ul li {
  width: 270px;
  height: 148px;
  border: 1px solid #ececff;
  border-radius: 10px;
  display: inline-block;
  background-color: #f9f9ff;
}
.dianfei-div2-ul li div:nth-of-type(1) {
  margin-top: 20px;
}
.dianfei-div2-ul li div:nth-of-type(1) span:nth-of-type(1) {
  margin-left: 20px;
  font-weight: bold;
}
.dianfei-div2-ul li div:nth-of-type(1) span:nth-of-type(2) {
  margin-left: 20px;
  font-weight: bold;
}
.dianfei-div2-ul li div:nth-of-type(2) {
  margin-top: 20px;
}
.dianfei-div2-ul li div:nth-of-type(2) span:nth-of-type(1) {
  margin-left: 20px;
}
.dianfei-div2-ul li div:nth-of-type(2) span:nth-of-type(2) {
  margin-left: 20px;
}
.dianfei-div2-ul li div:nth-of-type(3) {
  display: flex;
  justify-content: space-between;
  padding: 15px 20px 0 20px;
  margin-top: 20px;
  border-top: 1px solid #ffffff;
}
.dianfei-div2-ul li div:nth-of-type(3) p:nth-of-type(1) span:nth-of-type(1) {
  color: #ff6600;
}
.dianfei-div2-ul li div:nth-of-type(3) p:nth-of-type(1) span:nth-of-type(2) {
  color: #75c0ff;
}
.dianfei-div2-ul li div:nth-of-type(3) p:nth-of-type(2) {
  line-height: 22px;
  border-radius: 3px;
  background-color: #b9b9ff;
  padding: 0 6px;
  font-size: 12px;
  color: #ffffff;
  cursor: pointer;
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