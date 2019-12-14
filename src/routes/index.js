import React from 'react';
import App from '../App';
// import { message } from 'antd';
import { HashRouter, Switch, Route, Redirect,} from 'react-router-dom';
import { connect } from 'react-redux'
import * as actions from "../store/actions";
import { initRoutes, initRouteConfig } from './initDataRoute';
import { ErrorView, Login, } from '../views/index'
//  Home,
import http from '../axios/httpServer'
export const okCode = http.responseOkCode;

// 根据权限渲染的菜单数据
// let childRoutes = [];
let childRoutes = initRoutes;
// 根据权限渲染的路由数据
// let routeConfig = [];
let routeConfig = initRouteConfig;

/* 
const fakeAuth = {
    isAuthenticated: false,
    // authenticate(cb) {
    //   fakeAuth.isAuthenticated = true;
    //   setTimeout(cb, 100); // fake async
    // },
    // signout(cb) {
    //   fakeAuth.isAuthenticated = false;
    //   setTimeout(cb, 100);
    // }
};
  const PrivateRoute = ({ children, ...rest }) => {
    console.log('========PrivateRoute============================');
    console.log(children, {...rest});
    console.log('====================================');
    console.log('=====location===============================');
    console.log(fakeAuth.isAuthenticated);
    console.log('====================================');
    return (
      <Route
        {...rest}
        render={({ location }) =>
            fakeAuth.isAuthenticated ? (
                children
            ) : (
                <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
                />
            )
        }
      />
    );
} */

class Routes extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {
        }
    }
    componentDidMount() {
        
    }

    /* componentDidUpdate(prevProps, prevState) {
        console.log('===prevState===prevState==============================');
        console.log(prevProps, prevState, this.props);
        console.log('====================================');
        // 
        let {userInfoList} = prevProps.commonState;
        if(userInfoList.auth){
            return true
        }
    } */
    // componentWillUnmount = () => {
    //     this.setState = (state,callback)=>{
    //         return;
    //     };
    // }
    // component={Home} 
    
    render(){
        // todo https://www.jianshu.com/p/677433245697
        let {token} = this.props.userInfoList;
        console.log('=====routes=index====this.props==========================');
        console.log(this.props);
        console.log('====================================');
        /* const requireAuthRoute = (params) => {
            // console.log('===requireAuthRoute=====params================================');
            // console.log(params);
            // console.log('====================================');
            return <Route path={params.path} render={() => {
                if(!token && params.isLogin){
                        return <Redirect to={{
                            pathname: "/login",
                            search: `?referrer=${params.path}`,
                            state: { referrer: params.path }
                        }}
                    />
                }
                else{
                    return <Redirect to={{
                        pathname: params.path,
                        search: `?path=${params.path}`,
                        state: { referrer: params.path }
                    }}
                />
                }
            }} exact key={params.path} /> 
        } */
       /*  const FadingRoute = ({ component: Component, ...rest }) => {
            return (
              <Route
                {...rest}
                render={routeProps => (
                  <FadeIn>
                    <Component {...routeProps} />
                  </FadeIn>
                )}
              />
            );
          } */
		return( <HashRouter>
            <>
            <App>
                <Switch>
                    <Route path="/" render={() => {
                        if(!token){
                            return <Redirect to="/login" />
                        }
                        else{
                            return <Redirect to="/home" />
                        }
                    }} exact key="firstPage"/>
                    {/* <Route path="/" render={() => <Redirect to="/login" />}  key="loginPage"/> */}
                    <Route path="/login" exact component={Login}/>
                    {/* <Route path="/" render={() => <Redirect to="/home" />} exact key="firstPage"/> */}
                    <Route path='/404' component={ErrorView} exact key='errorPage'/>
                    {
                        routeConfig.length > 0 && routeConfig.map((item, index) => {
                            if (item.childRoute && item.childRoute.length > 0) {
                                return item.childRoute.map(item_2 => {
                                    return <Route exact path={item_2.path} component={item_2.component} key={item_2.path} />
                                    // return <FadingRoute path={item_2.path} component={item_2.component} key={item_2.path} />
                                    // return requireAuthRoute(item_2)
                                    // return <PrivateRoute path={item_2.path} component={item_2.component} key={item_2.path} />
                                })
                            } else {
                                return <Route exact path={item.path} component={item.component} key={item.path} />
                                // return <FadingRoute path={item.path} component={item.component} key={item.path} /> 
                                // return <Route exact path={item.path} component={() => requireAuth(item.component)} key={item.path} />
                                // return requireAuthRoute(item)
                                // return <PrivateRoute path={item.path} component={item.component} key={item.path} />
                                
                            }
                        })
                    }
                    { 
                        routeConfig.length > 0 && <Route component={ErrorView} key="error"/>
                    }
                </Switch>
            </App>
            </>
		</HashRouter> )
	}
}


const mapStateToProps = (state)=>{
    return{
        ...state,
        userInfoList: state.commonState.userInfoList
    }
};

const mapDispatchToProps = function (dispatch) {
    return {
        // requestCommonOptionData(param, cb){
        //     dispatch(actions.action.requestCommonOptionData(param, cb))
        // },
        // requestUserInfoData(param, cb){
        //     dispatch(actions.action.requestUserInfoData(param, cb))
        // },
        requestUserLoginInfo(param, cb){
            dispatch(actions.action.requestUserLoginInfo(param, cb))
        },
        // changeUserInfo(param){
        //     dispatch(actions.switchUserInfo(param));
        // },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Routes)
export {childRoutes, routeConfig};
