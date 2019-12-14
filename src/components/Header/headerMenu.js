/**
 * 头部组件
 */
import React, { Component } from 'react';
import { connect } from "react-redux";
import { Menu, Icon } from 'antd';
import { childRoutes } from "../../routes";
// import * as actions from '../../store/actions'
import "./index.less";

class Header extends Component {
    constructor(props) {
      super(props);
      this.state = {
      }
    }
    componentDidMount() {
      
    }

    handleMenuClick = (e) => {
      // 当前的菜单样式
      let firstName = e.item.props.children[1];
      let firstUrl = e.item.props.eventKey;
      console.log('========e======handleMenuClick======================');
      console.log('firstName == ',firstName);
      console.log('firstUrl == ',firstUrl);
      console.log(e);
      console.log('====================================');
      this.props.history.push(e.key);
    }

    render() {
        const { pathname } = this.props.location;
        // const curHeaderMenu = currentHeaderMenu? currentHeaderMenu : pathname;
        const menuList =  childRoutes.length > 0 && childRoutes.map((item,index) => {
            return (<Menu.Item 
                key={item.path}>
                <Icon type="mail" />
                  {item.title}
            </Menu.Item>)
        })
        console.log('====childRoutes=========pathname======================');
        console.log(childRoutes);
        console.log(pathname);
        console.log('====================================');
        const selectedKeys = childRoutes
        .filter(menu => {
          if(pathname === '/'){
            return pathname === '/home';
          }
          return pathname.startsWith(menu.path);
        })
        .map(menu => menu.path);
        console.log('=========selectedKeys===========================');
        console.log(selectedKeys);
        console.log('====================================');

        return (
            <>
              <Menu 
                className="header-menu-wrap"
                onClick={this.handleMenuClick} 
                selectedKeys={selectedKeys} 
                mode="horizontal">
                  {menuList}
              </Menu>
          </>
        );
    }
}

const mapStateToProps = state => {
  return {
      // ...state,
      commonState: state.commonState,
  }
};
export default connect(mapStateToProps)(Header)
