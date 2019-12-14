/**
 * 首页
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Layout, Button } from 'antd'
import AsideMenu from "../../components/AsideMenu";
import BreadcrumbCustom from "../../components/BreadcrumbCustom";
const { Content } = Layout;

export class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
           
        }
    }
    handleJump = () => {
        this.props.history.push({
            pathname: '/nav1Details'
        })
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
                            测试内容 Home 
                            <Button type="primary" onClick={this.handleJump}>go to nav1-details</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)
