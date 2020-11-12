import Vue from 'vue'
import Router from 'vue-router'
import DengLu from './views/DengLu'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'DengLu',
      component: DengLu
    },
    {
      path: '/shouye',
      name: 'ShouYe',
      component: () => import('./views/ShouYe')
    },
    {
      path: '/wuyejiaofei',
      name: 'WuYeJiaoFei',
      component: () => import('./views/WuYeJiaoFei'),
      children: [{
          path: 'shuifei',
          name: 'ShuiFei',
          component: () => import('./components/ShuiFei')
        },
        {
          path: 'dianfei',
          name: 'DianFei',
          component: () => import('./components/DianFei')
        }
      ]
    },
    {
      path: '/wuyechaxun',
      name: 'WuYeChaXun',
      component: () => import('./views/WuYeChaXun')
    },
    {
      path: '/guzhangbaoxiu',
      name: 'GuZhangBaoXiu',
      component: () => import('./views/GuZhangBaoXiu')
    },
    {
      path: '/gonggaoguanli',
      name: 'GongGaoGuanLi',
      component: () => import('./views/GongGaoGuanLi')
    }
  ]
})