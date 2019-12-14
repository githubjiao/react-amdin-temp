import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from "../../store/actions";

class HeaderInfo extends Component {

    handelLogin = () => {
        // this.props.history.push({
        //     pathname: '/login'
        // })
    }

    handelLogOut = () => {
        console.log('=======退出=============================');
        console.log('退出');
        console.log('====================================');
        sessionStorage.clear();
        localStorage.clear();
        this.props.changeUserInfo({});
        this.props.history.push({
            pathname: '/login'
        })
    }
    render() {
        let {userName} = this.props.userInfoList;
        console.log('======userInfoList==============================');
        console.log(this.props.userInfoList);
        console.log('====================================');
        return (
            <>
                <div className="header-info-wrap">
                    <span onClick={this.handelLogin}>
                        {
                            userName ? userName : '--'
                        }
                    </span>
                    /
                    <span onClick={this.handelLogOut}>退出</span>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state,
        userInfoList: state.commonState.userInfoList
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeUserInfo(param){
            dispatch(actions.switchUserInfo(param));
        },
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderInfo);