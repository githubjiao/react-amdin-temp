import React, { Component } from 'react';
import { connect } from "react-redux";
import { Layout, Menu, Icon } from 'antd'
import {initRouteConfig} from '../../routes/initDataRoute'
// import {changeLeftNavKey} from '../../store/actions'
const { Sider } = Layout;

class AsideMenu extends Component {
    constructor(props) {
        super(props);
		this.state = {
            collapsed: false,
            subMenuData: []
		}
    }
    componentDidMount() {
        let {location} = this.props;
        const {pathname} = location;
        const allRoutes = initRouteConfig;
        console.log('=======this.props======componentDidMount=====asideMenu==================');
        console.log(this.props, this.props.location.pathname);
        console.log(allRoutes);
        console.log('=========allRoutes===========================');
        allRoutes.forEach((item) =>{
            if(pathname.includes(item.path)){
                console.log(item.childRoute);
                this.setState({
                    subMenuData: item.childRoute
                })
                return false;
            }
        })
    }

    /* componentDidUpdate(prevProps, prevState, snapshot) {
        // // 从新的标签页打开页面时
        let {pathname} = this.props.location;
        let {currentLeftNav} = prevProps.commonState;
        console.log('====asideMenu=========prevProps, prevState, snapshot=======================');
        console.log(prevProps, prevState, snapshot);
        console.log(prevProps.location.pathname, this.props.location.pathname, currentLeftNav);
        console.log('====================================');
        if(pathname !== currentLeftNav){
            this.props.dispatch(changeLeftNavKey(pathname));
            return true;
        }
    } */
	toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
    };
    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };
    handleLeftMenu = (e) => {
        this.props.history.push({
            pathname: e.key
        })
    };

    render() {
        let { subMenuData } = this.state;
        let { pathname } = this.props.location;
        const selectedKeys = subMenuData.filter(menu => {
            return pathname === menu.path;
        }).map(menu => menu.path);
        const menuItem = subMenuData && subMenuData.length > 0 && subMenuData.map(item => {
            return (<Menu.Item key={item.path}>
                <Icon type="user" />
                <span>{item.title}</span>
            </Menu.Item>)
        })
        // trigger={null}  
        return (
            <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                {/* <Icon
                    className="trigger"
                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.toggle}
                    style={{position: 'absolute', right: '-20px', top: '12px', color: '#f00', fontSize: '18px',}}
                    /> */}
                <Menu 
                    theme="dark" 
                    mode="inline" 
                    selectedKeys={selectedKeys}
                    onClick={this.handleLeftMenu}
                >
                    {menuItem}
                </Menu>
            </Sider>    
        );
    }
}

const mapStateToProps = state => {
    return {
        // ...state,
        commonState: state.commonState,
    }
  };
export default connect(mapStateToProps)(AsideMenu)