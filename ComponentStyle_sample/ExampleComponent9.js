import React from 'react';

// #1 자식 컴포넌트와 공유할 category 값을 부모 컴포넌트에서 정의
const DEMO_PROPS = {
    category: 'food',
    title: '컨퍼넌트 IN 컴퍼넌트 props 전달',
    content: '파라미터로 받아서 처리'
};

// #2 서브 컴포넌트(함수형)의 파라미터에 props를 추가하고 변수에 할당
const SubComponent = (props) => {
    const { category, content } = props;

    // #3 props 적용
    return (
        <div className={category}>
            <p>{content}</p>
        </div>
    );
};

class App extends React.Component {
    render() {
        const { category, title, content } = DEMO_PROPS;

        return (
            <div>
                <h2>{title}</h2>

                {/* #4 서브 컴포넌트에 props 전달 */}
                <SubComponent
                    category={category}
                    content={content}
                />
            </div>
        );
    }
}

export default App;
