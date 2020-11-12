<template>
  <div id="header" class="btn" :class="{style1: boole1,style2: boole2,style3: boole3,style4: boole4,style5: boole5,style6: boole6,}">
    <div class="header-div1">
      <div class="header-div1-div1">
        <img src="../../assets/images/Header/u811.png" />
        <span>XXXX智慧社区管理系统</span>
      </div>
      <div>
        <el-dropdown class="bianju">
          <span class="el-dropdown-link">
            <i class="el-icon-user-solid zhanghu"></i>admin<i class="el-icon-caret-bottom"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="dialogVisible = true">修改密码</el-dropdown-item>
            <el-dropdown-item>个人资料</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dialog title="修改密码" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
          <p class="xgmm-p">
            <span class="xgmm-span">旧密码：</span><el-input class="xgmm-el-input" placeholder="请输入旧密码：" v-model="input1" show-password></el-input><br/>
            <span class="xgmm-span">新密码：</span><el-input class="xgmm-el-input" placeholder="请输入新密码：" v-model="input2" show-password></el-input><br/>
            <span class="xgmm-span1">确认密码：</span><el-input class="xgmm-el-input" placeholder="请输入确认密码：" v-model="input3" show-password></el-input>
          </p>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </span>
        </el-dialog>
        <el-dropdown class="bianju">
          <span class="el-dropdown-link">
            <i class="el-icon-loading zhanghu"></i>换肤<i class="el-icon-caret-bottom"></i>
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
            <i class="el-icon-question zhanghu"></i>帮助<i class="el-icon-caret-bottom"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>帮助文档</el-dropdown-item>
            <el-dropdown-item>关于系统</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <i class="el-icon-switch-button zhanghu1" @click="dialogVisible1 = true"></i>
        <el-dialog title="系统提示" :visible.sync="dialogVisible1" width="30%" :before-close="handleClose">
            <div class="tuichu-div"><i class="el-icon-question tuichu-i"></i><span class="tuichu-span">确定要退出系统吗？</span></div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible1 = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible1 = false;tuichu()" >确 定</el-button>
            </span>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
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
      input1: '',
      input2: '',
      input3: ''
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
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        }).catch(_ => {});
    },
    tuichu:function(){
      this.$router.push('/');
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
  font-size: 14px;
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
  background: #957bfe;
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
  background: #957bfe;
}
.xgmm-el-input{
  margin-top: 10px;
  width: 290px;
}
.xgmm-span{
  margin-right: 20px;
}
.xgmm-span1{
  margin-right: 6px;
}
.tuichu-div{
  display: flex;
  justify-content: center;
  align-items: center;
}
.tuichu-i{
  color: red;
  font-size: 40px;
  margin-right: 5px;
}
.tuichu-span{
  font-size: 20px;
}
</style>