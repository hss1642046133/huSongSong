<template>
  <div id="content">
    <div class="content-div1">
      <div class="content-div1-div1">XXX智慧社区管理系统</div>
      <div class="content-div1-div2">
        <div class="content-div1-div2-div1">
          <img src="../../assets/images/DengLu/u794.png" />
        </div>
        <div class="content-div1-div2-div2">
          <!-- <el-input placeholder="请输入用户名" v-model="input" clearable></el-input><br/>
          <el-input placeholder="请输入密码" v-model="input1" show-password></el-input> -->
          <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
            <el-form-item prop="user">
              <el-input v-model="ruleForm.user" placeholder="请输入用户名"></el-input>
            </el-form-item><br/>
            <el-form-item prop="pass">
              <el-input type="password" v-model="ruleForm.pass" placeholder="请输入密码"></el-input>
            </el-form-item><br/>
            <el-form-item>
              <el-checkbox v-model="checked">记住密码</el-checkbox>
            </el-form-item><br/>
            <el-form-item id="denglu">
              <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DengLu",
  data() {
     var validateUser = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('用户名不能为空!'));
        } else {
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('密码不能为空!'));
        } else {
          callback();
        }
      };
      return {
        checked: true,
        ruleForm: {
          user:'',
          pass: ''
        },
        rules: {
          user: [
            { validator: validateUser, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$router.push('/shouye');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
};
</script>

<style type="text/css" scoped>
#content {
  background-image: url("../../assets/images/DengLu/bg.png");
  height: 100%;
  display: flex;
  align-items: center;
}
.content-div1 {
  width: 563px;
  margin: 0 auto;
}
.content-div1-div1 {
  color: #ffffff;
  font-size: 32px;
  display: flex;
  justify-content: center;
  font-weight: bold;
}
.content-div1-div2 {
  background-color: #ffffff;
  width: 563px;
  height: 268px;
  border-radius: 10px;
  margin-top: 10px;
}
.content-div1-div2 div{
  float: left;
}
.content-div1-div2-div1 {
  border-right: 1px solid #957BFE;
  width: 234px;
  height: 268px;
  display: flex;
  align-items: center;
}
.content-div1-div2-div1 img {
  width: 234px;
}
.el-form{
  width: 300px;
  margin-left: 14px;
  margin-top: 20px;
}
.el-form-item{
  width: 300px;
}
.el-input{
   width: 100%;
}
.el-checkbox{
 width: 100%;
 text-align: right;
}
#denglu{
  margin-top: -10px;
}

</style>
