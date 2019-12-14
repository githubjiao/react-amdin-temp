/**
 * nav2详情组件
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Layout, Button } from 'antd'
import AsideMenu from "../../components/AsideMenu";
import BreadcrumbCustom from "../../components/BreadcrumbCustom";
const { Content } = Layout;

export class Nav1Details extends Component {
    constructor(props) {
        super(props)
        this.state = {
           
        }
    }

    handleBack = () => {
        this.props.history.go(-1)
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
                            <p>测试内容 nav1Details</p> 
                            <Button type="primary" onClick={this.handleBack}>go back</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Nav1Details)
