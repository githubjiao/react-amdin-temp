/**
 * nav2组件
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Layout, Button } from 'antd'
import AsideMenu from "../../../components/AsideMenu";
import BreadcrumbCustom from "../../../components/BreadcrumbCustom";
const { Content } = Layout;

export class Nav2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
           
        }
    }

    handleJump = () => {
        this.props.history.push({
            pathname: '/singlePage'
        })
    }
    handleJumpDetails = () => {
        this.props.history.push({
            pathname: '/nav2Details'
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
                            <p>测试内容 nav2</p> 
                            <Button type="primary" onClick={this.handleJump}>go to singlePage</Button>
                            <br/><br/>
                            <Button type="primary" onClick={this.handleJumpDetails}>go to nav2Details</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Nav2)
