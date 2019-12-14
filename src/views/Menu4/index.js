import React, { Component } from 'react';
import BreadcrumbCustom from "../../components/BreadcrumbCustom";
import './index.less'

class Menu4 extends Component {

    render() {
        return (
            <div className="menu4-wrap">
                <BreadcrumbCustom {...this.props} />
                <div className="menu4-content">
                    菜单四
                </div>
            </div>
        );
    }
}

export default Menu4;
