/**
 * 全局常量
 * 
 */
let BASEURL = '';
let BASEURL_DOMAIN = '';
let MIDDLEGROUND_ACCOUT_URL = '';// 中台账号管理页面地址
const API_PREFIX = '/api/'; //api前缀
const protocol = window.location.protocol;

const DEV_DOMAIN = ''; //开发环境域名
const TEST_DOMAIN = `${protocol}//test.xx.com`; //测试环境域名
const PRE_DOMAIN = `${protocol}//pre.xx.com/`; //预发环境域名
const PRO_DOMAIN = `${protocol}//www.xx.com`; //生产环境域名

//中台账号管理跳转链接地址
const MG_ACCOUT_TEST_URL = 'http://www.xx.com';//中台账号管理页面-测试环境域名
const MG_ACCOUT_PRE_URL = 'http://www.xx.com';//中台账号管理页面-预发环境域名
const MG_ACCOUT_PRO_URL = 'http://www.xx.com';//中台账号管理页面-生产环境域名

if(process.env.REACT_APP_SECRET_API === 'development'){
    BASEURL_DOMAIN = DEV_DOMAIN;
    MIDDLEGROUND_ACCOUT_URL = MG_ACCOUT_TEST_URL;
}else if(process.env.REACT_APP_SECRET_API === 'test'){
    BASEURL_DOMAIN = TEST_DOMAIN;
    MIDDLEGROUND_ACCOUT_URL = MG_ACCOUT_TEST_URL;
}else if(process.env.REACT_APP_SECRET_API === 'preplanned'){
    BASEURL_DOMAIN = PRE_DOMAIN;
    MIDDLEGROUND_ACCOUT_URL = MG_ACCOUT_PRE_URL;
}else if(process.env.REACT_APP_SECRET_API === 'production'){
    BASEURL_DOMAIN = PRO_DOMAIN;
    MIDDLEGROUND_ACCOUT_URL = MG_ACCOUT_PRO_URL;
}

BASEURL = BASEURL_DOMAIN + API_PREFIX; //请求接口地址

export { BASEURL, MIDDLEGROUND_ACCOUT_URL }