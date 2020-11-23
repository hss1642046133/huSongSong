<template>
  <div id="content">
    <div
      id="header"
      class="btn"
      :class="{style1: boole1,style2: boole2,style3: boole3,style4: boole4,style5: boole5,style6: boole6,}"
    >
      <div class="header-div1">
        <div class="header-div1-div1">
          <img src="../../assets/images/Header/u811.png" />
          <span>XXXX智慧社区管理系统</span>
        </div>
        <div>
          <el-dropdown class="bianju">
            <span class="el-dropdown-link">
              <i class="el-icon-user-solid zhanghu"></i>admin
              <i class="el-icon-caret-bottom"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="dialogVisible = true">修改密码</el-dropdown-item>
              <el-dropdown-item>个人资料</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-dialog
            title="修改密码"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose"
          >
            <p class="xgmm-p">
              <span class="xgmm-span">旧密码：</span>
              <el-input class="xgmm-el-input" placeholder="请输入旧密码：" v-model="input1" show-password></el-input>
              <br />
              <span class="xgmm-span">新密码：</span>
              <el-input class="xgmm-el-input" placeholder="请输入新密码：" v-model="input2" show-password></el-input>
              <br />
              <span class="xgmm-span1">确认密码：</span>
              <el-input class="xgmm-el-input" placeholder="请输入确认密码：" v-model="input3" show-password></el-input>
            </p>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
          </el-dialog>
          <el-dropdown class="bianju">
            <span class="el-dropdown-link">
              <i class="el-icon-loading zhanghu"></i>换肤
              <i class="el-icon-caret-bottom"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="btn2Data()" class="style2">&nbsp;</el-dropdown-item>
              <el-dropdown-item @click.native="btn3Data()" class="style3">&nbsp;</el-dropdown-item>
              <el-dropdown-item @click.native="btn4Data()" class="style4">&nbsp;</el-dropdown-item>
              <el-dropdown-item @click.native="btn5Data()" class="style5">&nbsp;</el-dropdown-item>
              <el-dropdown-item @click.native="btn6Data()" class="style6">&nbsp;</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-dropdown class="bianju">
            <span class="el-dropdown-link">
              <i class="el-icon-question zhanghu"></i>帮助
              <i class="el-icon-caret-bottom"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>帮助文档</el-dropdown-item>
              <el-dropdown-item>关于系统</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <i class="el-icon-switch-button zhanghu1" @click="dialogVisible1 = true"></i>
          <el-dialog
            title="系统提示"
            :visible.sync="dialogVisible1"
            width="30%"
            :before-close="handleClose"
          >
            <div class="tuichu-div">
              <i class="el-icon-question tuichu-i"></i>
              <span class="tuichu-span">确定要退出系统吗？</span>
            </div>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible1 = false">取 消</el-button>
              <el-button type="primary" @click="dialogVisible1 = false;tuichu()">确 定</el-button>
            </span>
          </el-dialog>
        </div>
      </div>
    </div>
    <section id="section">
      <div id="sidebar">
        <el-col :span="24">
          <el-menu
            default-active="/zhuti/shouye"
            unique-opened
            router
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#623bfe"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-menu-item index="/zhuti/shouye">
              <i class="el-icon-s-home"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-office-building"></i>
                <span>智慧物业</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/wuyejiaofei/shuifei">物业缴费</el-menu-item>
                <el-menu-item index="/jiaofeichaxun">缴费查询</el-menu-item>
                <el-menu-item index="/guzhangbaoxiu">故障报修</el-menu-item>
                <el-menu-item index="/gonggaoguanli">公告管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-first-aid-kit"></i>
                <span>社区医疗</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/yuyueguahao">预约挂号</el-menu-item>
                <el-menu-item index="/jiankangxiaotieshi">健康小贴士</el-menu-item>
                <el-menu-item index="/yishengjianjie">医生简介</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>智能应用</span>
              </template>
              <el-submenu index="4-1">
                <template slot="title">智能停车</template>
                <el-menu-item index="/zhinengtinche">智能停车</el-menu-item>
                <el-menu-item index="/cheweiluru">车位录入</el-menu-item>
                <el-menu-item index="/cheliangguanli">车辆管理</el-menu-item>
                <el-menu-item index="/tinchejilu">停车记录</el-menu-item>
              </el-submenu>
              <el-menu-item-group>
                <el-menu-item index="/zhinengkaimen">智能开门</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-s-unfold"></i>
                <span>数据统计</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/fangwufenleitongji">房屋分类统计</el-menu-item>
                <el-menu-item index="/jiaofeifenxitongji">缴费分析统计</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="6">
              <template slot="title">
                <i class="el-icon-user"></i>
                <span>基本信息</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/fangwuxinxi">房屋信息</el-menu-item>
                <el-menu-item index="/renkouxinxi">人口信息</el-menu-item>
                <el-menu-item index="/shebeixinxi">设备信息</el-menu-item>
                <el-menu-item index="/dianziditu">电子地图</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="7">
              <template slot="title">
                <i class="el-icon-coin"></i>
                <span>系统管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/yonghuguanli">用户管理</el-menu-item>
                <el-menu-item index="/jueseguanli">角色管理</el-menu-item>
                <el-menu-item index="/quanxianguanli">权限管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
      </div>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
export default {
  name: "FangWuFenLeiTongJi",
  data() {
    return {
      boole1: true,
      boole2: false,
      boole3: false,
      boole4: false,
      boole5: false,
      boole6: false,
      dialogVisible: false,
      dialogVisible1: false,
      input1: "",
      input2: "",
      input3: ""
    };
  },
  methods: {
    btn2Data() {
      this.boole1 = false;
      this.boole2 = true;
      this.boole3 = false;
      this.boole4 = false;
      this.boole5 = false;
      this.boole6 = false;
    },
    btn3Data() {
      this.boole1 = false;
      this.boole2 = false;
      this.boole3 = true;
      this.boole4 = false;
      this.boole5 = false;
      this.boole6 = false;
    },
    btn4Data() {
      this.boole1 = false;
      this.boole2 = false;
      this.boole3 = false;
      this.boole4 = true;
      this.boole5 = false;
      this.boole6 = false;
    },
    btn5Data() {
      this.boole1 = false;
      this.boole2 = false;
      this.boole3 = false;
      this.boole4 = false;
      this.boole5 = true;
      this.boole6 = false;
    },
    btn6Data() {
      this.boole1 = false;
      this.boole2 = false;
      this.boole3 = false;
      this.boole4 = false;
      this.boole5 = false;
      this.boole6 = true;
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    tuichu: function() {
      this.$router.push("/");
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
#header {
  width: 100%;
  height: 85px;
  /* background-color: #957bfe; */
}
.header-div1 {
  height: 85px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-div1-div1 img,
.header-div1-div1 span {
  vertical-align: middle;
}
.header-div1-div1 img {
  margin-left: 10px;
}
.header-div1-div1 span {
  font-size: 32px;
  color: #ffffff;
  font-weight: bold;
  margin-left: 10px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #ffffff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
i {
  display: inline-block;
  vertical-align: middle;
}
.zhanghu {
  margin-right: 5px;
  font-size: 24px;
  margin-top: -2px;
}
.zhanghu1 {
  margin-right: 5px;
  font-size: 24px;
  margin-top: -3px;
  color: #ffffff;
  cursor: pointer;
  margin-right: 50px;
}
.bianju {
  margin-right: 25px;
}
.style1 {
  background: #623bfe;
}
.style2 {
  background: #ff0000;
}
.style3 {
  background: #9999ff;
}
.style4 {
  background: #666699;
}
.style5 {
  background: #008000;
}
.style6 {
  background: #623bfe;
}
.xgmm-el-input {
  margin-top: 10px;
  width: 290px;
}
.xgmm-span {
  margin-right: 20px;
}
.xgmm-span1 {
  margin-right: 6px;
}
.tuichu-div {
  display: flex;
  justify-content: center;
  align-items: center;
}
.tuichu-i {
  color: red;
  font-size: 40px;
  margin-right: 5px;
}
.tuichu-span {
  font-size: 20px;
}
::-webkit-scrollbar {
  display: none;
}
#sidebar {
  position: fixed;
  left: 10px;
  top: 100px;
  background-color: #623bfe;
  width: 18%;
  height: 525px;
  overflow-x: hidden;
  overflow-y: scroll;
}
#sidebar i {
  color: #ffffff;
}
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
.el-menu-item.is-active {
  background-color: #cc9999 !important;
}
</style>