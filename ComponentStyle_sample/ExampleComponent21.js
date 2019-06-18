import React from 'react';

const DEMO_PROPS = {
    isLogin: true,
    userType: 'admin'
};

class App extends React.Component {
    render() {
        const { isLogin, userType } = DEMO_PROPS;

        // admin 유저가 로그인한 상태
        const visible = isLogin && userType === 'admin';

        // admin 유저가 로그인 했을 때만 컴포넌트 출력
        return visible && (
            <div>
                <p>노출 조건이 복잡한 경우는 별도의 변수로 관리합니다.</p>
                <h2>컴포넌트 조건부 랜더링</h2>
                <p>admin 유저가 로그인 했을 때만 컴포넌트 출력</p>
            </div>
        );
    }
}

export default App;
