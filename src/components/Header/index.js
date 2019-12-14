/**
 * 头部组件
 */
import React, { Component } from 'react';
// import { Menu, Icon } from 'antd';
// import { childRoutes } from "../../routes";
import HeaderMenu from "./headerMenu";
import HeaderInfo from "./headerInfo";

import "./index.less";

class HeaderCustom extends Component {
    constructor(props) {
      super(props);
      this.state = {
        current: '',
      }
    }
    componentDidMount() {
    
    }

    handleMenuClick = (e) => {
      this.setState({
        crurent: e.key
      },() => {
        this.props.history.push(e.key)
      })
    }


    render() {
        return (
            <>
             <div className="header-custom-wrap">
                <div className="logo"></div>
                <HeaderMenu {...this.props} />
                <HeaderInfo {...this.props} />
             </div>
          </>
        );
    }
}

export default HeaderCustom;