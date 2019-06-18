import React from 'react';

const DEMO_PROPS = {
    isLogin: true
};

// 로그인 상태에서만 노출 할 컴포넌트
const SubComponent = (props) => {
    const { isLogin } = props;

    return isLogin && (
        <p>로그인 일 때 노출</p>        
    );
};

class App extends React.Component {
    render() {
        const { isLogin } = DEMO_PROPS;

        return (
            <div>
                <p> 별도의 컴포넌트로 처리하는 방법 </p>
                {/* 로그인 상태에서만 표시 */}
                <SubComponent isLogin={isLogin} />
            </div>
        );
    }
}

export default App;
