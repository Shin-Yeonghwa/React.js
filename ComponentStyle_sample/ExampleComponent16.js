import React from 'react';

const DEMO_PROPS = {
    isLogin: true
};

class App extends React.Component {
    render() {
        const { isLogin } = DEMO_PROPS;

        return (
            <div>
                <h2>특정 영역 조건부 랜더링</h2>
                {/* 로그인 상태에서만 표시 */}
                {isLogin && (
                    <p>
                        로그인 상태에서만 노출
                    </p>
                )}
            </div>
        );
    }
}

export default App;
