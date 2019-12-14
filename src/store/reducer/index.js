/**
 * reducer
 */

import { type } from '../constants';

// let defaultFirstName = window.sessionModel.firstMenuInfo ? window.sessionModel.firstMenuInfo.firstMenuName : '首页';
// let defaultFirstUrl = window.sessionModel.firstMenuInfo ? window.sessionModel.firstMenuInfo.firstMenuUrl : '/home';


let initData = {
    userInfoList: window.sessionModel.userInfoList || {}
}
let reducer = (state = initData, action) => {
    switch (action.type) {
        /* case type.SWITCH_BREADCRUMB_FIRST:
            const firstData = Object.assign({}, state.firstMenuInfo, action.firstMenuInfo);
            window.sessionModel.firstMenuInfo = firstData;
            return {...state, firstMenuInfo: firstData };
        case type.SWITCH_BREADCRUMB_REST:
            window.sessionModel.breadcrumbData = action.breadcrumbData;
            return {...state, breadcrumbData: action.breadcrumbData};
		case type.CHANGE_HEADER_MENU_KEY:
            window.sessionModel.currentHeaderMenu = action.key;
			return {...state, currentHeaderMenu: action.key};
        case type.CHANGE_LEFT_NAV_KEY:
            window.sessionModel.currentLeftNav = action.key;
			return {...state, currentLeftNav: action.key}; */
        case type.USER_INFO:
            const userInfo= Object.assign({}, state.userInfoList, action.userInfoList);
			return {...state, userInfoList: userInfo};
        default:
            return state;
    }
};

export default reducer;