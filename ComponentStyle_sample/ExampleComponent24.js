import React from 'react';

const DEMO_PROPS = {
    userType: 'admin'
};

class App extends React.Component {
    render() {
        const { userType } = DEMO_PROPS;

        let userInfo = null;

        // 조건 별로 유저 정보 표시
        switch(userType) {
            case 'admin' :
                userInfo = (
                    <p>관리자인 경우</p>
                );
                break;
            case 'user' :
                userInfo = (
                    <p>사용자인 경우</p>
                );
                break;
            default :
                // 기본 값이 없으면 break만 처리
                userInfo = (
                    <p>조건이 없는 경우</p>
                );
                break;
        }

        return (
            <div>
                <h2>특정 영역 조건부 랜더링</h2>
                {/* 유저 종류에 따라 표시 */}
                {userInfo}
            </div>
        );
    }
}

export default App;
