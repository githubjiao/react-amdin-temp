import React, { Component } from 'react';
import './index.less'
import BreadcrumbCustom from "../../components/BreadcrumbCustom";
import AsideMenu from "../../components/AsideMenu";
import moment from 'moment';
import 'moment/locale/zh-cn';
import {
    Pagination,
    DatePicker,
    TimePicker,
    Calendar,
    Popconfirm,
    Table,
    Modal,
    Button,
    Select,
    Transfer,
    Radio,
    Layout
  } from 'antd';
const { Content } = Layout;
const { Option } = Select;
const { RangePicker } = DatePicker;


moment.locale('zh-cn');


const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      filters: [
        {
          text: 'filter1',
          value: 'filter1',
        },
      ],
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
  ];

  
class Menu1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            visible: false,
            value: 1,
        }
    }
    showModal = () => {
        this.setState({ visible: true });
    };
    
    hideModal = () => {
        this.setState({ visible: false });
    };
    onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
          value: e.target.value,
        });
    };
    render() {
        const info = () => {
            Modal.info({
                title: 'some info',
                content: 'some info',
            });
        };
        const confirm = () => {
            Modal.confirm({
                title: 'some info',
                content: 'some info',
            });
        };
        return (
            <>
            <Layout className="main-layout">
                <AsideMenu {...this.props} />
                <Content className="main-content">
                    <BreadcrumbCustom {...this.props} />
                    <section className="main-wrap">
                        { /* 菜单三内容 */ }
                        <div className="menu1-warp">
                        <div>菜单一</div>
                        <div className="locale-components">
                            <div className="example">
                                <Radio.Group onChange={this.onChange} value={this.state.value}>
                                    <Radio value={1}>A</Radio>
                                    <Radio value={2}>B</Radio>
                                    <Radio value={3}>C</Radio>
                                    <Radio value={4}>D</Radio>
                                </Radio.Group>
                            </div>
                            <div className="example">
                            <Pagination defaultCurrent={1} total={50} showSizeChanger />
                            </div>
                            <div className="example">
                            <Select showSearch style={{ width: 200 }}>
                                <Option value="jack">jack</Option>
                                <Option value="lucy">lucy</Option>
                            </Select>
                            <DatePicker />
                            <TimePicker />
                            <RangePicker style={{ width: 200 }} />
                            </div>
                            <div className="example">
                            <Button type="primary" onClick={this.showModal}>
                                Show Modal
                            </Button>
                            <Button onClick={info}>Show info</Button>
                            <Button onClick={confirm}>Show confirm</Button>
                            <Popconfirm title="Question?">
                                <a href="/">Click to confirm</a>
                            </Popconfirm>
                            </div>
                            <div className="example">
                            <Transfer dataSource={[]} showSearch targetKeys={[]} render={item => item.title} />
                            </div>
                            <div style={{ width: 319, border: '1px solid #d9d9d9', borderRadius: 4 }}>
                            <Calendar fullscreen={false} value={moment()} />
                            </div>
                            <div className="example">
                            <Table dataSource={[]} columns={columns} />
                            </div>
                            <Modal title="Locale Modal" visible={this.state.visible} onCancel={this.hideModal}>
                            <p>Locale Modal</p>
                            </Modal>
                        </div>
                        </div>
                    </section>    
                </Content>
            </Layout>
                
            </>
        );
    }
}

export default Menu1;