import React from 'react';
import classnames from 'classnames';

const DEMO_PROPS = {
    isLogin: false,
    userType: 'admin'
};

class App extends React.Component {
    render() {
        const { isLogin, userType } = DEMO_PROPS;

        const expandClass = classnames({
            'expand': !isLogin, // 로그인이 아닌 경우라면 expand 클래스 노출
            'info-wrap': userType !== 'admin' // admin이 아니면 info-wrap 클래스 노출
        });

        const loginClass = classnames({
            'login': isLogin, // 로그인이면 login 클래스 노출
            'user-admin': userType === 'admin', // admin이면 user-admin 클래스 노출
            'user-staff': userType !== 'admin' // admin이 아니면 user-staff 클래스 노출
        });

        return (
            // 조건 처리된 클래스 적용
            <div className={expandClass}>
                <h2 className={loginClass}>CSS 복잡한 조건 처리</h2>
            </div>
        );
    }
}

export default App;