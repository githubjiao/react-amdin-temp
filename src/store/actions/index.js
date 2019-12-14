/*
 * action 类型
 */

// import http from '@axios/httpServer';
import { type } from "../constants";
import { message } from 'antd';
// const okCode = http.responseOkCode;
const okCode = 0;

export const action = {
	// 获取用户登录信息
	requestUserLoginInfo(params, cb){
		// return async dispatch=>{
		return dispatch=>{
			// let response = await http.requestPost(http.accountLoginInfo,params);
			let response = {
				"code":0,
				"msg":"",
				"data":{
					"token":"123456000",
					"userId":"100",
					"userName":"demo_ok",
					"type":"jdpin",
					"avatar":"",
					"role":"1",
					"permissions":{
						"moduleIndex":1,
						"moduleResource":1,
						"moduleScheme":1,
						"moduleDistribution":1,
						"moduleReport":1,
						"moduleAccount":1,
						"pageResourceQuery":1,
						"pageResourceCrowd":1,
						"pageSchemeList":1,
						"pageSchemeNotApply":1,
						"pageDistributionPlanList":1,
						"pageDistributionOrderList":1,
						"pageDistributionCreativityList":1,
						"pageReport":1,
						"pageMonitor":1,
						"pageAccountUserInformation":1,
						"pageAccountAgentManager":1,
						"funcResourceQuery":1,
						"funcSchemeExport":1,
						"funcSchemeInquire":1,
						"funcSchemeDelete":1,
						"funcSchemeOrderIssue":1,
						"funcDistributionPlanNew":1,
						"funcDistributionOrderNew":1
					}
				}
			}
			if(response.code === okCode) {
				response.data.role = response.data.role + '';
				window.sessionModel.userInfoList = response.data;
				dispatch(switchUserInfo(response.data));
				cb&&cb(response.data);
			}else {
				// message.error('获取用户数据错误，请刷新后再试');
				message.error(response.msg);
			}
		}
	},
};

// 修改面包屑名称与链接
export const switchBreadcrumb = (data) => {
    return {
        type:type.SWITCH_BREADCRUMB_FIRST,
        breadcrumbData: data
    }
}
// 头部菜单点击切换，修改面包屑名称与链接
export const switchBreadcrumbFirst = (firstMenuInfo) => {
    return {
        type:type.SWITCH_BREADCRUMB_FIRST,
        firstMenuInfo: firstMenuInfo
    }
}
// 左侧导航点击切换，修改面包屑名称与链接
export const switchBreadcrumbRest = (breadcrumbData) => {
    return {
        type:type.SWITCH_BREADCRUMB_REST,
        breadcrumbData: breadcrumbData
    }
}
// 切换菜单上当前的key
export const changeHeaderMenuKey = (key) => {
	return {
		type:type.CHANGE_HEADER_MENU_KEY,
		key:key
	}
}
// 切换左侧菜单上当前的key
export const changeLeftNavKey = (key) => {
	return {
		type:type.CHANGE_LEFT_NAV_KEY,
		key:key
	}
}
// 用户信息
export const switchUserInfo = (userInfo) => {
	return {
		type:type.USER_INFO,
		userInfoList: userInfo
	}
}
