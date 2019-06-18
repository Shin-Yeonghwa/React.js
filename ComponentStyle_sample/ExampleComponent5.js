import React from 'react';

const DEMO_PROPS = {
    title: '클래스형 예제'
};

// 서브 컴포넌트의 DEMO_PROPS
const DEMO_PROPS_SUB_COMPONENT2 = {
    title: '서브 컴포넌트 2'
};

// DEMO_PROPS 를 사용하지 않는 서브 컴포넌트
const SubComponent1 = () => <p>서브 컴포넌트 1</p>;

// DEMO_PROPS 를 사용하는 서브 컴포넌트
const SubComponent2 = () => {
    const { title } = DEMO_PROPS_SUB_COMPONENT2;

    return <p>{ title }</p>
};

class App extends React.Component {
    render() {
        const { title } = DEMO_PROPS;

        return (
            <div>
                <SubComponent1 />
                <SubComponent2 />
            </div>
        );
    }
}

export default App;
