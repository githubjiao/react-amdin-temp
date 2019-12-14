/**
 * SinglePage组件
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Carousel, Button } from 'antd'
import BreadcrumbCustom from "../../../components/BreadcrumbCustom";
import './index.less'

export class SinglePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
           
        }
    }
    handleBack = () =>{
        console.log('====================================');
        console.log(this.props);
        console.log('====================================');
        this.props.history.go(-1);
    }

    render() {
        return (
            <section className="singlepage-wrap">
                { /* 主体内容 */ }
                <BreadcrumbCustom {...this.props} />
                <div>
                    测试内容 SinglePage
                    <br/>
                    <Carousel autoplay>
                        <div>
                            <h3>1</h3>
                        </div>
                        <div>
                            <h3>2</h3>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                    </Carousel>
                </div>
                <Button type="primary" onClick={this.handleBack}>返回</Button>
            </section>    
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePage)
