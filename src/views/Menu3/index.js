/**
 *  首页
 * */
import React, { Component } from 'react';
import { Layout } from 'antd'
import AsideMenu from "../../components/AsideMenu";
import BreadcrumbCustom from "../../components/BreadcrumbCustom";
const { Content } = Layout;

class Menu3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <Layout className="main-layout">
                <AsideMenu {...this.props} />
                <Content className="main-content">
                    <BreadcrumbCustom {...this.props} />
                    <section className="main-wrap">
                        { /* 菜单三内容 */ }
                        <div>
                            测试内容 
                        </div>
                    </section>    
                </Content>
            </Layout>
        );
    }
}

export default Menu3;