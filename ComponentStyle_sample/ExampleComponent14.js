import React from 'react';
import classnames from 'classnames';

const DEMO_PROPS = {
    isLogin: false
};

class App extends React.Component {
    render() {
        const { isLogin } = DEMO_PROPS;

        // box, item 클래스는 항상 노출하고 로그인 한 상태에 따라 expand 클래스 노출
        const expandClass = classnames('box item', {
            'expand': !isLogin
        });

        return (
            // 로그인 상태면 'box item'만 출력하고 로그인이 아니면 'box item expand'를 출력
            <div className={expandClass}>
                <h2>고정 클래스가 있는 경우</h2>
            </div>
        );
    }
}

export default App;
