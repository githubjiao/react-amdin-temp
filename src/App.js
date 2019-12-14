import React, { PureComponent } from 'react'
import './App.less'
import './assets/css/common.less'
import HeaderCustom from './components/Header'
import './assets/js/sessionStore'
import { ConfigProvider, } from 'antd'
// Layout
import { withRouter } from 'react-router-dom';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
// import AsideMenu from "./components/AsideMenu";
// import BreadcrumbCustom from "./components/BreadcrumbCustom";

// const { Content } = Layout;
moment.locale('zh-cn');

class App extends PureComponent {
	
  render() {
	const { children, location } = this.props;
	const { pathname } = location;
	/* console.log('=========this.props===========================');
	console.log(this.props);
	console.log('===================================='); */
    return (
		<ConfigProvider locale={zhCN}>
			<>
			<div 
				className="app-wrap" 
				key={this.props.location.key} 
				style={{ height: 'clac(100vh) !important', }}>
					{pathname !== '/login' ? <HeaderCustom {...this.props} /> : null}
					<div className="app-main">
						{children}
						{/* <Layout className="main-layout">
							<AsideMenu  {...this.props} />
							<Content className="main-content">
								<BreadcrumbCustom {...this.props} />
								<section className="main-wrap">
									{children}
								</section>    
							</Content>
						</Layout> */}
					</div>
			</div>
			</>
		</ConfigProvider>
    );
  }
}

export default withRouter(App);
