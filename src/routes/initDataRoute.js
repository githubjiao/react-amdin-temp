/**
* 配置懒加载路由 
*/
// import React from 'react';
// import loadable from '@loadable/component';
// import Loadable from 'react-loadable'
import { 
  Home, 
  Nav1Details,
  Nav2,
  Nav2Details,
  Nav3,
  Menu1, 
  Menu1Nav2, 
  Menu1Nav3,
  Menu2,
  Menu2Nav2, 
  Menu2Nav3,
  Menu3,
  Menu3Nav2, 
  Menu3Nav3,
  Menu4,
  ErrorView, 
  Login, 
  Register,
  SinglePage,
 } from '../views'
// const Home = loadable(/* webpackChunkName: 'Home' */() => import('../views/Home/Index'));

// 一级菜单配置
const initRoutes = [{
  path: '/home',
  component: Home,
  title: '首页'
}, {
  path: '/menu1',
  component: Menu1,
  title: '菜单一'
}, {
  path: '/menu2',
  component: Menu2,
  title: '菜单二'
}, {
  path: '/menu3',
  component: Menu3,
  title: '菜单三'
}, {
  path: '/menu4',
  component: Menu4,
  title: '菜单四'
}, 
];

// 所有的路由配置
const initRouteConfig = [{
  path: '/home',
  component: Home,
  title: '首页',
  meta: {
    isLogin: true,//组件是否需要登录才能渲染
    isShowMenu: true,//头部导航上是否显示
  },
  childRoute: [
    {
      path: '/home',
      component: Home,
      title: 'nav1',
      childRoute: [
        {
          path: '/home/nav1/nav1Details',
          component: Nav1Details,
          title: 'nav1Details',
        }
      ]
    }, 
    {
      path: '/home/nav2',
      component: Nav2,
      title: 'nav2',
      childRoute: [
        {
          path: '/home/nav2/nav2Details',
          component: Nav2Details,
          title: 'nav2Details',
        }
      ]
    }, {
      path: '/home/nav3',
      component: Nav3,
      title: 'nav3'
    }, 
  ],
}, {
  path: '/menu1',
  component: Menu1,
  title: '菜单一',
  meta: {
    isShowMenu: true,//头部导航上是否显示
  },
  childRoute: [
    {
      path: '/menu1',
      component: Menu1,
      title: 'menu1Nav1'
    },{
      path: '/menu1/menu1Nav2',
      component: Menu1Nav2,
      title: 'menu1Nav2'
    }, {
      path: '/menu1/menu1Nav3',
      component: Menu1Nav3,
      title: 'menu1Nav3'
    },
  ]
}, {
  path: '/menu2',
  component: Menu2,
  title: '菜单二',
  meta: {
    isShowMenu: true,//头部导航上是否显示
  },
  childRoute: [
    {
      path: '/menu2',
      component: Menu2,
      title: 'menu2Nav1'
    },{
      path: '/menu2/menu2Nav2',
      component: Menu2Nav2,
      title: 'menu2Nav2'
    }, {
      path: '/menu2/menu2Nav3',
      component: Menu2Nav3,
      title: 'menu2Nav3'
    },
  ]
}, {
  path: '/menu3',
  component: Menu3,
  title: '菜单三',
  meta: {
    isShowMenu: true,//头部导航上是否显示
  },
  childRoute: [
    {
      path: '/menu3',
      component: Menu3,
      title: 'menu3Nav1'
    },{
      path: '/menu3/menu3Nav2',
      component: Menu3Nav2,
      title: 'menu3Nav2'
    }, {
      path: '/menu3/menu3Nav3',
      component: Menu3Nav3,
      title: 'menu3Nav3'
    },
  ]
}, {
  path: '/menu4',
  component: Menu4,
  title: '菜单四',
  meta: {
    isShowMenu: true,//头部导航上是否显示
  },
}, {
  path: '/register',//测试页使用，实际是登录里的子组件
  component: Register,
  title: '注册',
  meta: {
    isShowMenu: false,//头部导航上是否显示
  },
}, {
  path: '/error',
  component: ErrorView,
  title: '错误页',
  meta: {
    isShowMenu: false,//头部导航上是否显示
  },
}, {
  path: '/login',
  component: Login,
  title: '登录',
  meta: {
    isShowMenu: false,//头部导航上是否显示
  },
}, {
  path: '/singlePage',
  component: SinglePage,
  title: 'SinglePage',
  meta: {
    isShowMenu: false,//头部导航上是否显示
  },
},
];

export { initRoutes, initRouteConfig }