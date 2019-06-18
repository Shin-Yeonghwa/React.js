import React from 'react';
import AppChild from './AppChild';

// #1 자식 컴포넌트와 공유할 category 값을 부모 컴포넌트에서 정의
const DEMO_PROPS = {
    category: 'food',
    title: '자식 컴포넌트 상태 값 전달'
};

class App extends React.Component {
    render() {
        const { title, category } = DEMO_PROPS;

        return (
            <div>
                <h2>{title}</h2>

                {/* #2 자식 컴포넌트의 props로 category 상태 값 전달 */}
                <AppChild category={category} />
            </div>
        );
    }
}

export default App;
