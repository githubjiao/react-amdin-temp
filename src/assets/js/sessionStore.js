/**
 * 全局sessionStorage
 */
let sessionModel = {
    firstMenuInfo: null, // 面包屑导航的一级名称和链接信息，取菜单名称和地址
    currentHeaderMenu: null, // 当前选中的头部菜单导航,
    currentLeftNav: null, // 当前选中的左侧导航,
    commonOption: null, // 通用下拉筛选项数据
    breadcrumbData: null, // 面包屑除第一项的数据
    userInfoList: null, // 用户数据
}

function _handleGetData(value){
    if(value === "true"){
        return true
    }else if(value === "false"){
        return false
    }else if(value === "null"){
        return null
    }else if(value === 'undefined'){
        return undefined
    }else {
        return value
    }
}

function setData(key,value){
    let data = null
    if(typeof value === 'string'){
        data = value;
    }else if (typeof value === 'object'){
        data = JSON.stringify(value);
    }else {
        data = value;
    }
    sessionStorage.setItem(key,data);
}

function getData(key) {
    let data = sessionStorage.getItem(key);
    if(!data){
        return null;
    }
    if(data.indexOf('{') > -1 && data.indexOf('}') > -1){
        return JSON.parse(data);
    }else {
        return _handleGetData(data);
    }
}

for (let key in sessionModel){
    if(sessionModel.hasOwnProperty(key)){
        try {
            Object.defineProperty(sessionModel,key,{
                set:function (newValue) {
                    setData(key,newValue);
                },
                get:function () {
                    return getData(key);
                }
            })
        }catch (e) {
            console.log(e)
        }

    }
}

window.sessionModel = sessionModel;