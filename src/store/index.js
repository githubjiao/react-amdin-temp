/**
 * 用来组合单个的 `reducer`，输出根 `state`
 * 
 */
// 引入createStore创建store，引入applyMiddleware 来使用中间件
import { createStore, combineReducers, applyMiddleware } from 'redux';
// 利用redux-logger打印日志
import { createLogger } from 'redux-logger'; 
// redux 作者开发的异步处理方案 可以在action 里传入 dispatch getState
import reduxThunk from 'redux-thunk';

// 引入所有的reducer
import commonState from './reducer';
import menu1State from '../views/Menu1/store/reducer.js';
// import menu2State from '../views/Menu2/store/reducer';
// 安装redux-devtools-extension的可视化工具。
// import { composeWithDevTools } from 'redux-devtools-extension'
const reducers = combineReducers({
	commonState,
	menu1State,
	// menu2State
});
// 调用日志打印方法 collapsed是让action折叠，看着舒服点
const loggerMiddleware = createLogger({collapsed:true});
//中间件
const middleware = [reduxThunk];
// console.log('==========process.env.NODE_ENV==========================');
// console.log(process.env.NODE_ENV);
// console.log('===============production=============development========');
if(process.env.NODE_ENV !== 'production'){
	middleware.push(loggerMiddleware);
}

const configureStore = () => createStore(
	reducers,
	applyMiddleware(...middleware)
);

export default configureStore;