<template>
  <div id="zhuti">
    <div class="zhuti-div1">
      <p>房屋分类统计</p>
    </div>
    <div class="zhuti-div2">
      <div class="zhuti-div2-div1">
        <ul class="zhuti-div2-div1-ul">
          <li>
            <div>
              <img src="../../assets/images/FangWuFenLeiTongJi/u2601.svg" />
            </div>
            <div>
              <p>1000</p>
              <p>毛坯数</p>
            </div>
          </li>
          <li>
            <div>
              <img src="../../assets/images/FangWuFenLeiTongJi/u2609.svg" />
            </div>
            <div>
              <p>500</p>
              <p>精装数</p>
            </div>
          </li>
          <li>
            <div>
              <img src="../../assets/images/FangWuFenLeiTongJi/u2606.svg" />
            </div>
            <div>
              <p>100</p>
              <p>豪华精装数</p>
            </div>
          </li>
          <li>
            <div>
              <img src="../../assets/images/FangWuFenLeiTongJi/u2614.svg" />
            </div>
            <div>
              <p>100</p>
              <p>入住数</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="zhuti-div2-div2">
        <el-select size="mini" v-model="value" clearable placeholder="所有年份">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div class="zhuti-div2-div3">
        <ZhuZhuangTu4 class="zhuzhuangtu4"></ZhuZhuangTu4>
      </div>
    </div>
  </div>
</template>

<script>
import ZhuZhuangTu4 from "../../components/ZhuZhuangTu4";
export default {
  name: "FangWuFenLeiTongJi",
  components: {
    ZhuZhuangTu4
  },
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "2019年"
        },
        {
          value: "选项2",
          label: "2018年"
        },
        {
          value: "选项3",
          label: "2017年"
        },
        {
          value: "选项4",
          label: "2016年"
        },
        {
          value: "选项5",
          label: "2015年"
        },
        {
          value: "选项6",
          label: "2014年"
        },
        {
          value: "选项7",
          label: "2013年"
        },
        {
          value: "选项8",
          label: "2012年"
        },
        {
          value: "选项9",
          label: "2011年"
        },
        {
          value: "选项10",
          label: "2010年"
        },
        {
          value: "选项11",
          label: "2009年"
        },
        {
          value: "选项12",
          label: "2008年"
        }
      ],
      value: ""
    };
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
  border: 1px solid #ededff;
  margin-right: 5px;
}
.zhuti-div2-div1 {
  margin-top: 20px;
}
.zhuti-div2-div1-ul {
  display: flex;
  justify-content: space-around;
}
.zhuti-div2-div1-ul li {
  display: inline-block;
  border: 1px solid #000000;
  border-radius: 6px;
  padding: 5px 20px 5px 15px;
}
.zhuti-div2-div1-ul li div {
  display: inline-block;
  vertical-align: middle;
}
.zhuti-div2-div1-ul li div:nth-of-type(1) img {
  width: 50px;
}
.zhuti-div2-div1-ul li div:nth-of-type(2) {
  margin-left: 10px;
  text-align: center;
}
.zhuti-div2-div1-ul li div:nth-of-type(2) p:nth-of-type(1) {
  font-size: 22px;
  padding: 2px 0;
}
.zhuti-div2-div1-ul li div:nth-of-type(2) p:nth-of-type(2) {
  font-size: 14px;
  margin-top: -6px;
  padding: 2px 0;
}
.zhuti-div2-div2 {
  text-align: right;
  margin: 50px 60px;
}
.zhuzhuangtu4 {
  margin-bottom: 20px;
}
</style>