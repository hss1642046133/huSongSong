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
    }
  ]
})