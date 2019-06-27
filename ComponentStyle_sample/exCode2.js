import React from 'react';

const DEMO_PROPS = {
    id: '컴퍼넌트 IN 컴퍼넌트',
    title: '마크업 데모 데이터'
};

// #1 서브 컴포넌트 개발용 데이터 정의
const DEMO_PROPS_BADGE = {
    sub_title: '서브 컴포넌트 개발용 데이터'
};

const Badge = () => {
    // #2 서브 컴포넌트의 props를 변수에 할당
    const { sub_title } = DEMO_PROPS_BADGE;

    return <p>{sub_title}</p>
};

class App extends React.Component {
    render() {
        const { id, title } = DEMO_PROPS;

        return (
            <div>
                <h2>{id}</h2>
                <p>{title}</p>
                {/* #3 서브 컴포넌트 적용 */}
                <Badge />
            </div>
        );
    }
}

export default App;