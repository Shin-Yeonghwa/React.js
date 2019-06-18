import React from 'react';
import classnames from 'classnames';

const DEMO_PROPS = {
    isLogin: true
};

class App extends React.Component {
    render() {
        const { isLogin } = DEMO_PROPS;

        const expandClass = classnames({
            // 로그인 상태가 아닌 경우 expand 클래스 노출
            'expand': !isLogin
        });

        return (
            // 로그인을 안한 상태면 expand 클래스 추가
            <div className={expandClass}>
                <h2>CSS 클래스 조건 처리</h2>
            </div>
        );
    }
}

export default App;