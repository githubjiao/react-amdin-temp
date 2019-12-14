/**
 * axios配置
 */
import axios from 'axios';
import { message } from 'antd';

// axios.defaults.withCredentials = true;
// 超时时间30秒
axios.defaults.timeout = 60 * 1000;
// axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// axios请求拦截器
axios.interceptors.request.use(config => {
	return config;
}, error => {
    message.warn(error);
	return Promise.reject(error);
});

// axios响应拦截器
axios.interceptors.response.use(response => {
	if (response.data) {
		if (response.data.code) {
			if(response.data.code === -501 || response.data.code === -1017){
				// 未登录或登录超时，跳登录
				if(response.data.data && response.data.data.redirect){
					window.location.href = response.data.data.redirect;
				}
				else if(response.data.msg){
					message.warn(response.data.msg);
					// 跳转到错误页面
					// browserHistory.push('/404');
				}
			}
			return response;
		}
	}
	return response;
}, error => {
	console.log(error);
	return Promise.reject(error); // 返回接口返回的错误信息
});
