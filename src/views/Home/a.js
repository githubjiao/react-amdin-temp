/**
 * 模板组件
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
           
        }
    }

    render() {
        let { breadcrumbData } = this.state;
        return (
            <Layout className="main-layout">
                <AsideMenu {...this.props} />
                <Content className="main-content">
                    <BreadcrumbCustom {...this.props} breadcrumbData={breadcrumbData} />
                    <section className="main-wrap">
                        { /* 主体内容 */ }
                        <div>
                            测试内容 
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
