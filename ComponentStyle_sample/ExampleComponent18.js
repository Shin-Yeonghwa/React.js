import React from 'react';

const DEMO_PROPS = {
    isLogin: true
};

class App extends React.Component {
    render() {
        const { isLogin } = DEMO_PROPS;

        return (
            <div>
                <h2> 특정 영역 조건부 랜더링 </h2>
                {/* 로그인 상태에서만 표시 */}
                <p>
                    {/* 로그인 했을 때만 표시 */}
                    {isLogin ?
                        <span>로그인 했을 때</span> : <span>로그인 안 했을 때</span>
                    }
                </p>
            </div>
        );
    }
}

export default App;