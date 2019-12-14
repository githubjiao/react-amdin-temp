import React, { Component } from 'react';
import { connect } from 'react-redux'
import RegisterView from './Register'
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import './index.less'
import * as actions from '../../store/actions'
import http from "../../axios/httpServer";

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            isShowRegister: false,
            loading: false,
        }
    }
    handleSubmit = e => {
        let { form, redirectUrl, history, location } = this.props;
        const {state} = location;
        console.log('===============redirectUrl =====================');
        console.log(this.props);
        console.log(redirectUrl);
        console.log('====================================');
        e.preventDefault();
        form.validateFields((err, values) => {
          if (!err) {
            //  请求登录接口，返回用户信息，使用token,并根据未登录前的页面做相应的跳转
                console.log('==login===this.props===============================');
                console.log(this.props);
                console.log('====================================');
                this.setState({ loading: true });
                this.props.requestUserLoginInfo({},(res)=>{
                    this.setState({ loading: false });
                    if(res.code === http.okCode){
                        console.log('===requestUserLoginInfo=================================');
                        console.log(res);
                        console.log('====================================');
                        // 重定向未登录前的页面
                        if(state){
                            history.push({
                                pathname: state.referrer
                            })
                        }else {
                            history.push({
                                pathname: '/home'
                            })
                        }
                    } else {
                        message.warn('用户权限接口返回错误,请刷新重试');
                    }
                });
              
            console.log('Received values of form: ', values);
          }
        });
    };
    /* getUserInfo = () => {
        
    } */
    handleRegister = e => {
        this.setState({
            isShowRegister: true
        })
    };

    render() {
        console.log('======登录页=======this.props=======================');
        console.log(this.props);
        console.log('====================================');
        let { isShowRegister } = this.state;
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login-wrap">
                <div>登录页</div>
                { !isShowRegister ?
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                            />,
                        )}
                        </Form.Item>
                        <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                            />,
                        )}
                        </Form.Item>
                        <Form.Item>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(<Checkbox>Remember me</Checkbox>)}
                        <a className="login-form-forgot" href="/">
                            Forgot password
                        </a>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                        Or <span className="register-now" onClick={this.handleRegister}>register now!</span>
                        </Form.Item>
                    </Form>
                    :
                    <RegisterView {...this.props} />
                }
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        ...state,

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        requestUserLoginInfo(param, cb){
            dispatch(actions.action.requestUserLoginInfo(param, cb));
        },
        changeUserInfo(param){
            dispatch(actions.switchUserInfo(param));
        }
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);
export default connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm);
