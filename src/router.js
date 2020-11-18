import Vue from 'vue'
import Router from 'vue-router'
import DengLu from './views/DengLu'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    //登录
    {
      path: '/',
      name: 'DengLu',
      component: DengLu
    },
    //首页
    {
      path: '/shouye',
      name: 'ShouYe',
      component: () => import('./views/ShouYe')
    },
    //物业缴费
    {
      path: '/wuyejiaofei',
      name: 'WuYeJiaoFei',
      component: () => import('./views/WuYeJiaoFei'),
      children: [
        //水费
        {
          path: 'shuifei',
          name: 'ShuiFei',
          component: () => import('./components/ShuiFei')
        },
        //电费
        {
          path: 'dianfei',
          name: 'DianFei',
          component: () => import('./components/DianFei')
        },
        //停车费
        {
          path: 'tingchefei',
          name: 'TingCheFei',
          component: () => import('./components/TingCheFei')
        }
      ]
    },
    //缴费查询
    {
      path: '/jiaofeichaxun',
      name: 'JiaoFeiChaXun',
      component: () => import('./views/JiaoFeiChaXun')
    },
    //故障报销
    {
      path: '/guzhangbaoxiu',
      name: 'GuZhangBaoXiu',
      component: () => import('./views/GuZhangBaoXiu')
    },
    //公告管理
    {
      path: '/gonggaoguanli',
      name: 'GongGaoGuanLi',
      component: () => import('./views/GongGaoGuanLi')
    },
    //预约挂号
    {
      path: '/yuyueguahao',
      name: 'YuYueGuaHao',
      component: () => import('./views/YuYueGuaHao')
    },
    //快速预约
    {
      path: '/kuaisuyuyue',
      name: 'KuaiSuYuYue',
      component: () => import('./views/KuaiSuYuYue')
    },
    //其他医院
    {
      path: '/qitayiyuan',
      name: 'QiTaYiYuan',
      component: () => import('./views/QiTaYiYuan')
    },
    //健康小贴士
    {
      path: '/jiankangxiaotieshi',
      name: 'JianKangXiaoTieShi',
      component: () => import('./views/JianKangXiaoTieShi')
    },
    //智能停车
    {
      path: '/zhinengtinche',
      name: 'ZhiNengTinChe',
      component: () => import('./views/ZhiNengTinChe')
    },
    //车位录入
    {
      path: '/cheweiluru',
      name: 'CheWeiLuRu',
      component: () => import('./views/CheWeiLuRu')
    },
    //车辆管理
    {
      path: '/cheliangguanli',
      name: 'CheLiangGuanLi',
      component: () => import('./views/CheLiangGuanLi')
    },
    //停车记录
    {
      path: '/tinchejilu',
      name: 'TinCheJiLu',
      component: () => import('./views/TinCheJiLu')
    },
    //智能开门
    {
      path: '/zhinengkaimen',
      name: 'ZhiNengKaiMen',
      component: () => import('./views/ZhiNengKaiMen')
    },
    //房屋分类统计
    {
      path: '/fangwufenleitongji',
      name: 'FangWuFenLeiTongJi',
      component: () => import('./views/FangWuFenLeiTongJi')
    },
    //缴费分析统计
    {
      path: '/jiaofeifenxitongji',
      name: 'JiaoFeiFenXiTongJi',
      component: () => import('./views/JiaoFeiFenXiTongJi')
    },
    //房屋信息
    {
      path: '/fangwuxinxi',
      name: 'FangWuXinXi',
      component: () => import('./views/FangWuXinXi')
    },
    //人口信息
    {
      path: '/renkouxinxi',
      name: 'RenKouXinXi',
      component: () => import('./views/RenKouXinXi')
    },
    //设备信息
    {
      path: '/shebeixinxi',
      name: 'SheBeiXinXi',
      component: () => import('./views/SheBeiXinXi')
    },
    //电子地图
    {
      path: '/dianziditu',
      name: 'DianZiDiTu',
      component: () => import('./views/DianZiDiTu')
    },
    //用户管理
    {
      path: '/yonghuguanli',
      name: 'YongHuGuanLi',
      component: () => import('./views/YongHuGuanLi')
    },
    //角色管理
    {
      path: '/jueseguanli',
      name: 'JueSeGuanLi',
      component: () => import('./views/JueSeGuanLi')
    }
  ]
})