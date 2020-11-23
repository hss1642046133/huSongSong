<template>
  <div id="zhuti">
    <div class="zhuti-div1">
      <p>医生简介</p>
    </div>
    <div class="zhuti-div2">
      <div class="zhuti-div2-div1">
        <div class="zhuti-div2-div1-div1">
          <el-input size="mini" placeholder="请输入医院名称" v-model="input" clearable></el-input>
          <el-button size="mini" type="primary">GO</el-button>
        </div>
        <div class="zhuti-div2-div1-div2">
          <el-tree
            :data="data"
            default-expand-all
            :props="defaultProps"
            @node-click="handleNodeClick"
          ></el-tree>
        </div>
      </div>
      <div class="zhuti-div2-div2">
        <ul class="zhuti-div2-div2-ul1">
          <li>
            <i class="el-icon-location block1"></i>
            <span class="block1">长沙</span>
            <el-link class="block1" type="primary">切换城市</el-link>
          </li>
          <li>
            <el-select class="block" size="mini" v-model="value" clearable placeholder="请选择科室">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-input class="block" size="mini" placeholder="请输入医生名称" v-model="input1" clearable></el-input>
            <el-button class="block" size="mini" type="primary">搜索</el-button>
          </li>
        </ul>
        <ul class="zhuti-div2-div2-ul2">
          <li @click="Click">
            <p>xxx科室</p>
            <p>
              <img src="../../assets/images/ShouYe/u2150.png" />
            </p>
            <p>主任医生：张xx</p>
          </li>
          <li>
            <p>xxx科室</p>
            <p>
              <img src="../../assets/images/ShouYe/u2150.png" />
            </p>
            <p>主任医生：张xx</p>
          </li>
          <li>
            <p>xxx科室</p>
            <p>
              <img src="../../assets/images/ShouYe/u2150.png" />
            </p>
            <p>主任医生：张xx</p>
          </li>
        </ul>
        <ul class="zhuti-div2-div2-ul2">
          <li>
            <p>xxx科室</p>
            <p>
              <img src="../../assets/images/ShouYe/u2150.png" />
            </p>
            <p>主任医生：张xx</p>
          </li>
          <li>
            <p>xxx科室</p>
            <p>
              <img src="../../assets/images/ShouYe/u2150.png" />
            </p>
            <p>主任医生：张xx</p>
          </li>
          <li>
            <p>xxx科室</p>
            <p>
              <img src="../../assets/images/ShouYe/u2150.png" />
            </p>
            <p>主任医生：张xx</p>
          </li>
        </ul>
        <ul class="zhuti-div2-div2-ul2">
          <li>
            <p>xxx科室</p>
            <p>
              <img src="../../assets/images/ShouYe/u2150.png" />
            </p>
            <p>主任医生：张xx</p>
          </li>
          <li>
            <p>xxx科室</p>
            <p>
              <img src="../../assets/images/ShouYe/u2150.png" />
            </p>
            <p>主任医生：张xx</p>
          </li>
          <li>
            <p>xxx科室</p>
            <p>
              <img src="../../assets/images/ShouYe/u2150.png" />
            </p>
            <p>主任医生：张xx</p>
          </li>
        </ul>
        <div class="zhuti-div2-div2-div1">
          <ul class="zhuti-div2-div2-div1-ul">
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
  </div>
</template>

<script>
export default {
  name: "YiShengJianJie",
  data() {
    return {
      input: "",
      data: [
        {
          label: "当前位置",
          children: [
            {
              label: "佑姆塘社区医院"
            },
            {
              label: "湘雅一医院"
            },
            {
              label: "长沙光大医院"
            },
            {
              label: "长沙爱耳眼科"
            },
            {
              label: "湖南省中医附属医院"
            },
            {
              label: "岳麓区人民医院"
            }
          ]
        },
        {
          label: "省级医院",
          children: [
            {
              label: "湖南省人民医院"
            },
            {
              label: "湖南省儿童医院"
            },
            {
              label: "湖南省妇幼保键院"
            },
            {
              label: "湖南省xxx医院"
            }
          ]
        },
        {
          label: "市级医院",
          children: [
            {
              label: "长沙市一医院"
            },
            {
              label: "长沙市二医院"
            },
            {
              label: "长沙市三医院"
            },
            {
              label: "长沙市四医院"
            },
            {
              label: "长沙市妇幼保键医"
            },
            {
              label: "长沙xxx医院"
            }
          ]
        },
        {
          label: "专科医院",
          children: [
            {
              label: "xxx牙科医院"
            },
            {
              label: "xxx口腔医院"
            },
            {
              label: "xxx皮肤病医院"
            },
            {
              label: "xxx眼科医院"
            }
          ]
        },
        {
          label: "重点医院",
          children: [
            {
              label: "湘雅一医院"
            },
            {
              label: "湘雅二医院"
            },
            {
              label: "湘雅三医院"
            },
            {
              label: "湘雅四医院"
            },
            {
              label: "湘雅五医院"
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      },
      options: [
        {
          value: "选项1",
          label: "1科"
        },
        {
          value: "选项2",
          label: "2科"
        },
        {
          value: "选项3",
          label: "3科"
        }
      ],
      value: "",
      input: "",
      input1: ""
    };
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    },
    Click: function() {
      this.$router.push("/zhurenyisheng");
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
  border: 1px solid #cccccc;
  margin-right: 5px;
  display: flex;
}
.zhuti-div2-div1 {
  width: 20%;
  border-right: 1px solid #cccccc;
}
.zhuti-div2-div1-div1 {
  display: flex;
  padding: 5px;
  border-bottom: 1px solid #cccccc;
}
.zhuti-div2-div1-div1 .el-button {
  margin-left: 10px;
}
.zhuti-div2-div1-div2 {
  margin-top: 10px;
  margin-left: 10px;
}
.zhuti-div2-div2 {
  width: 80%;
}
.zhuti-div2-div2-ul1 {
  justify-content: space-between;
  display: flex;
  border-bottom: 1px solid #cccccc;
  padding: 5px 0;
}
.zhuti-div2-div2-ul1 li:nth-of-type(1) {
  display: flex;
  align-items: center;
}
.zhuti-div2-div2-ul1 li:nth-of-type(2) {
  display: flex;
}
.block {
  margin-right: 10px;
}
.block1 {
  margin-left: 10px;
}
i {
  font-size: 22px;
  color: #623bfe;
}
.zhuti-div2-div2-ul2 {
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
}
.zhuti-div2-div2-ul2 li {
  border: 1px solid #d7d7d7;
  border-radius: 10px;
  width: 22%;
}
.zhuti-div2-div2-ul2 li {
  cursor: pointer;
}
.zhuti-div2-div2-ul2 li p:nth-of-type(1) {
  padding: 5px 0 5px 20px;
  border-bottom: 1px solid #d7d7d7;
}
.zhuti-div2-div2-ul2 li p:nth-of-type(2) {
  display: flex;
  justify-content: center;
  padding: 10px 0;
}
.zhuti-div2-div2-ul2 li p:nth-of-type(2) img {
  width: 140px;
}
.zhuti-div2-div2-ul2 li p:nth-of-type(3) {
  text-align: center;
}
.zhuti-div2-div2-div1 {
  margin-top: 225px;
  border-top: 1px solid #f0f0ff;
  padding: 10px 0;
}
.zhuti-div2-div2-div1-ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.zhuti-div2-div2-div1-ul li:nth-of-type(1) span ~ span {
  margin-left: 20px;
}
</style>