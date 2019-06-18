import React from 'react';

const DEMO_PROPS = {
    isLogin: true
};

class App extends React.Component {
    render() {
        const { isLogin } = DEMO_PROPS;

        // 로그인 일 때 노출
        const userImage = isLogin && (
            <p>
                로그인 일 때 노출
            </p>
        );

        return (
            <div>
                <h2> 변수에 담아서 처리하는 방법 </h2>
                {/* 로그인 상태에서만 표시 */}
                {userImage}
            </div>
        );
    }
}

export default App;
