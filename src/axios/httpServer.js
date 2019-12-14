/**
 * axios的封装 get post
 */
import axios from 'axios'
import { BASEURL } from '../assets/js/globalConstants'
import './config'

const HEADER = {'Content-Type': 'application/json;charset=UTF-8'}
const FILEHEADER = {'Content-Type': 'multipart/form-data'}

export default {
	// 请求接口成功的状态值
	responseOkCode: 0,
	// 下拉筛选项接口-通用
	getCommonOptionUrl: 'common/option',
	// 用户退出
	getUserQuitUrl: 'account/logout',
	// 用户信息
	getUserInfoUrl: 'account/info',
	

	async requestGet(url,params){
		let response =  await axios.get(BASEURL+url,{params:params});
		if(process.env.NODE_ENV !== 'production'){
			console.log('%c'+ url,'color:red',',param:',params,',response:',response.data)
		}
		return response.data;
	},

	async requestPost(url,param,timeout=60*1000*5){
		try {
			let response = await this.request(url,'post',param,timeout);
			if(process.env.NODE_ENV !== 'production'){
				console.log('%c'+ url,'color:red',',param:',param,',response:',response.data)
			}
			return response.data;
		}catch (e) {
			if(process.env.NODE_ENV !== 'production'){
				console.log('%c'+ url,'color:red',',param:',param,',response:','服务器异常，请稍后重试')
			}
			return {code:'error',msg:'服务器异常，请稍后重试'};
		}
	},

	async requestUpload(url,param){

		try {
			let response =  await axios.get(BASEURL+url,'post',{param:param,headers:FILEHEADER});
			if(process.env.NODE_ENV !== 'production'){
				console.log('%c'+ url,'color:red',',param:',param,',response:',response.data)
			}
			return response.data;
		}catch (e) {
			if(process.env.NODE_ENV !== 'production'){
				console.log('%c'+ url,'color:red',',param:',param,',response:','服务器异常，请稍后重试')
			}
			return {code:'error',msg:'服务器异常，请稍后重试'};
		}
	},

	request(url,method,param,timeout,headers=HEADER){
		return axios({
			method:method,
			url:BASEURL + url,
			headers:headers,
			data:param,
			timeout:timeout
		})
	}

}
