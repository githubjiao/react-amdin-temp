/**
 * nav3组件
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Layout } from 'antd'
import AsideMenu from "../../../components/AsideMenu";
import BreadcrumbCustom from "../../../components/BreadcrumbCustom";
import "./index.less";
const { Content } = Layout;

export class Nav3 extends Component {
    constructor(props) {
        super(props)
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
                        { /* 主体内容 */ }
                        <div className="nav3-wrap">
                            测试内容 nav3 --长内容的效果
                        </div>
                    </section>    
                </Content>
            </Layout>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav3)
