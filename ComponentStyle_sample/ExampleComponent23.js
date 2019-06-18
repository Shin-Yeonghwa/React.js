import React from 'react';

const DEMO_PROPS = {
    userType: 'admin'
};

class App extends React.Component {
    render() {
        const { userType } = DEMO_PROPS;

        // 조건 별로 컴포넌트 출력
        switch(userType) {
            case 'admin' :
                return (
                    <h2>관리자인 경우</h2>
                );
            case 'user' :
                return (
                    <h2>사용자인 경우</h2>
                );
            default :
                /*
                    // 기본 값이 없는 경우
                    return null;
                */
                return (
                    <h2>값이 없는 경우</h2>
                );
        }
    }
}

export default App;