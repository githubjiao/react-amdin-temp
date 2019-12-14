/**
 * 头部组件
 */
import React, { PureComponent } from 'react';
import { Icon } from 'antd';

class ToggleIcon extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        collapsed: false,
      }
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <>
                <Icon
                    className="trigger"
                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.toggle}
                />
            </>
        );
    }
}

export default ToggleIcon;