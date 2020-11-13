<template>
  <div id="sidebar">
      <el-col :span="24">
        <el-menu default-active="/shouye" unique-opened router class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#623bfe" text-color="#fff" active-text-color="#ffd04b">
          <el-menu-item index="/shouye">
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
              <el-menu-item index="2-3">医生简介</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>智能应用</span>
            </template>
            <el-submenu index="4-1">
              <template slot="title">智能停车</template>
              <el-menu-item index="4-1-1">车位录入</el-menu-item>
              <el-menu-item index="4-1-2">车辆管理</el-menu-item>
              <el-menu-item index="4-1-3">停车记录</el-menu-item>
            </el-submenu>
            <el-menu-item-group>
              <el-menu-item index="4-2">智能开门</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-s-unfold"></i>
              <span>数据统计</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="5-1">房屋分类统计</el-menu-item>
              <el-menu-item index="5-2">缴费分析统计</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-user"></i>
              <span>基本信息</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="6-1">房屋信息</el-menu-item>
              <el-menu-item index="6-2">人口信息</el-menu-item>
              <el-menu-item index="6-3">设备信息</el-menu-item>
              <el-menu-item index="6-4">电子地图</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="7">
            <template slot="title">
              <i class="el-icon-coin"></i>
              <span>系统管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="7-1">用户管理</el-menu-item>
              <el-menu-item index="7-2">角色管理</el-menu-item>
              <el-menu-item index="7-3">权限管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
  </div>
</template>

<script>
export default {
    name: 'Sidebar',
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style scoped>
i{
  color: #ffffff;
}
</style>