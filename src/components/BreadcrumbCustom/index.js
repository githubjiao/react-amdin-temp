/**
 * 面包屑组件
 */
import React from 'react';
import { Breadcrumb } from 'antd';
import './index.less'
import { connect } from 'react-redux'
// import * as actions from '../../store/actions'
import { initRouteConfig } from "../../routes/initDataRoute";

class BreadcrumbCustom extends React.PureComponent {
    constructor(props) {
        super(props);
        this.initData={
        }
    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     // // 从新的标签页打开页面时
    //     let {pathname} = prevProps.location;
    //     let {firstMenuInfo} = prevProps.commonState;
    //     console.log('====breadcrumb=========prevProps, prevState, snapshot=======================');
    //     console.log(prevProps, prevState, snapshot);
    //     console.log(prevProps.location.pathname, this.props.location.pathname, firstMenuInfo);
    //     console.log('====================================');
    //     // if(pathname !== firstMenuInfo.firstMenuUrl){
    //     //     this.props.dispatch(actions.switchBreadcrumbFirst({
    //     //         firstMenuName: '',
    //     //         firstMenuUrl: '/'
    //     //     }));
    //     //     // this.props.dispatch(actions.switchBreadcrumbRest(pathname));
    //     //     return true;
    //     // }
    // }
    
    handleClickFirst = () => {
        let { firstMenuInfo, handleFirstBreadcrumb } = this.props.commonState;
        if(firstMenuInfo.firstMenuUrl && !handleFirstBreadcrumb){
            this.props.history.push({
                pathname: firstMenuInfo.firstMenuUrl,
            });
        }
        else if(handleFirstBreadcrumb){
            typeof handleFirstBreadcrumb === 'function' && handleFirstBreadcrumb();
        }
    }   
    handleClick(item){
        // let curFun = this.props.handleBreadcrumbLink;
        // typeof curFun === 'function' && curFun(item);
        console.log('=====item===============================');
        console.log(item);
        console.log('====================================');
    }
    render() {
        let { pathname } = this.props.location;
        const breadcrumbDataDefault = [{
            title: '',
            url: '' // 如果可跳转就传值 ，可以是跳转地址，也可以是相关参数值；不可跳转传空值即可
        }];
        const breadcrumbDataObj=(title, url) => {
            return {
                title: title,
                url: url
            }
        }
        const breadcrumbData = [];
        initRouteConfig.forEach(item => {
            if(item.childRoute && item.childRoute.length > 0){
                item.childRoute.forEach(item_2 => {
                    if(pathname === item_2.path){
                        breadcrumbData[0] = breadcrumbDataObj(item.title, item.path);
                        breadcrumbData[1] = breadcrumbDataObj(item_2.title, item_2.path);
                        return 
                    }
                })
            } else{
                if(pathname === item.path){
                    breadcrumbData[0] = breadcrumbDataObj(item.title, item.path);
                    return 
                }
            }
        });
        let breadcrumbDataList = breadcrumbData || breadcrumbDataDefault;
        let BreadcrumbItem = breadcrumbDataList.map((item, index) => {
            return (
                <Breadcrumb.Item key={index}>
                    {
                        item.url ? 
                        <span 
                            className="breadcrumb-link" 
                            onClick={this.handleClick.bind(this, item)}>
                                {item.title}
                        </span> : item.title
                    }
                </Breadcrumb.Item>
            )
        })
        // {first}
        return (
            <Breadcrumb className="breadcrumb-wrap" separator=">">
                {BreadcrumbItem}
            </Breadcrumb>
        )
    }
}
const mapStateToProps = state => {
    return {
        ...state,
        commonState: state.commonState,
    }
};
export default connect(mapStateToProps)(BreadcrumbCustom)
