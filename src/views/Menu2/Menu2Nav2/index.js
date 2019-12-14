/**
 * Menu2Nav2组件
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Layout } from 'antd'
import AsideMenu from "../../../components/AsideMenu";
import BreadcrumbCustom from "../../../components/BreadcrumbCustom";
const { Content } = Layout;

export class Menu2Nav2 extends Component {
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
                        <div>
                            测试内容 Menu2Nav2
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

export default connect(mapStateToProps, mapDispatchToProps)(Menu2Nav2)
