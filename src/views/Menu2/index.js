import React, { Component } from 'react';
import { Layout } from 'antd'
import AsideMenu from "../../components/AsideMenu";
import BreadcrumbCustom from "../../components/BreadcrumbCustom";
const { Content } = Layout;

class Menu2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
           
        }

    }

    componentWillMount() {

    }

    componentDidMount() {
    }

    render() {
        return (
            <Layout className="main-layout">
                <AsideMenu {...this.props} />
                <Content className="main-content">
                    <BreadcrumbCustom {...this.props} />
                    <section className="main-wrap">
                        { /* 菜单二内容 */ }
                        <div>
                            测试内容 菜单二
                        </div>
                    </section>    
                </Content>
            </Layout>
        )
    }
}

export default Menu2