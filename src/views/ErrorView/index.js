/**
 * 错误页组件
 */
import React, { Component } from 'react';
import { Result, Button } from 'antd';

class Error extends Component {
    handleBack = () =>{
        this.props.history.push({
            pathname: '/home'
        })
    }
    render() {
        return (
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button type="primary" onClick={this.handleBack}>Back Home</Button>}
            />
        );
    }
}

export default Error;
