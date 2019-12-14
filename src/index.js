import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './routes/index';
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import configureStore from './store';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');


// Redux Store对象，管理所有的Redux状态
const store = configureStore();

ReactDOM.render(
        <Provider store={store}> 
            <Routes />
        </Provider>
        ,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();