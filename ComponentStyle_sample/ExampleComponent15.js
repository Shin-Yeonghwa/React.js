import React from 'react';

const DEMO_PROPS = {
    isLogin: true
};

class App extends React.Component {
    render() {
        const { isLogin } = DEMO_PROPS;

        // 로그인 상태에서만 컴포넌트 노출
        return isLogin && (
            <div>
                <h2>컴포넌트 조건부 랜더링</h2>
            </div>
        );
    }
}

export default App;
