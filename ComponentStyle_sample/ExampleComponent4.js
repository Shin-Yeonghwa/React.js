import React from 'react';

// 동적 처리에 필요한 데이터
const DEMO_PROPS = {
    title: '동적 처리에 필요한 데이터'
};

class App extends React.Component {
    render() {
        // 임시 데이터를 변수에 할당
        const { title } = DEMO_PROPS;

        // 임시 데이터 적용
        return (
            <h2>{title}</h2>
        );
    }
}

export default App;