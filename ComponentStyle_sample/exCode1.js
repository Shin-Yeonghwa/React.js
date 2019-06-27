import React from 'react';

// #1 마크업 개발용 데이터 정의
const DEMO_PROPS = {
    id: '상태값 적용하기',
    title: 'import 구문 바로 아래에 DEMO_PROPS를 추가하여 데이터를 관리합니다.'
};

class App extends React.Component {
    render() {
        // #2 props용 변수에 값 할당
        const { id, title } = DEMO_PROPS;

        // #3 데이터 적용
        return (
            <div>
                <p>{id}</p>
                <p>{title}</p>
            </div>
        );
    }
}

export default App;