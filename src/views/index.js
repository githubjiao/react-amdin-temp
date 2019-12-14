/**
* 配置懒加载路由 
*/
// import React from 'react';
// import loadable from '@loadable/component';
import Loadable from 'react-loadable';
const Loading = () => null;  //加载时不显示loading
// const Home = loadable(/* webpackChunkName: 'Home' */() => import('../views/Home/Index'));

const Home = Loadable({ 
  loader: () => import('./Home'), //按需加载 点击时只加载一个页面
  loading: Loading,
});
const Nav1Details = Loadable({ 
  loader: () => import('./Home/nav1Details'),
  loading: Loading,
});
const Nav2 = Loadable({ 
  loader: () => import('./Home/Nav2'),
  loading: Loading,
});
const Nav2Details = Loadable({ 
  loader: () => import('./Home/Nav2/nav2Details'),
  loading: Loading,
});
const Nav3 = Loadable({ 
  loader: () => import('./Home/Nav3'),
  loading: Loading,
});
const SinglePage = Loadable({ 
  loader: () => import('./Home/SinglePage'),
  loading: Loading,
});
const Menu1 = Loadable({ 
  loader: () => import('./Menu1'),
  loading: Loading,
});
const Menu1Nav2 = Loadable({ 
  loader: () => import('./Menu1/Menu1Nav2'),
  loading: Loading,
});
const Menu1Nav3 = Loadable({ 
  loader: () => import('./Menu1/Menu1Nav3'),
  loading: Loading,
});
const Menu2 = Loadable({ 
  loader: () => import('./Menu2'),
  loading: Loading,
});
const Menu2Nav2 = Loadable({ 
  loader: () => import('./Menu2/Menu2Nav2'),
  loading: Loading,
});
const Menu2Nav3 = Loadable({ 
  loader: () => import('./Menu2/Menu2Nav3'),
  loading: Loading,
});
const Menu3 = Loadable({ 
  loader: () => import('./Menu3'),
  loading: Loading,
});
const Menu3Nav2 = Loadable({ 
  loader: () => import('./Menu3/Menu3Nav2'),
  loading: Loading,
});
const Menu3Nav3 = Loadable({ 
  loader: () => import('./Menu3/Menu3Nav3'),
  loading: Loading,
});
const Menu4 = Loadable({ 
  loader: () => import('./Menu4'),
  loading: Loading,
});
const ErrorView = Loadable({ 
  loader: () => import('./ErrorView'),
  loading: Loading,
});
const Login = Loadable({ 
  loader: () => import('./Login'),
  loading: Loading,
});
const Register = Loadable({ 
  loader: () => import('./Login/Register'),
  loading: Loading,
});

export {
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
}//将页面导出
