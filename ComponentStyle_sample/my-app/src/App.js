import React from 'react';

// #1 목록 데이터 정의
const DEMO_PROPS = {
    itemList: [
        {
            id: 1,
            title: '제목 1'
        },
        {
            id: 2,
            title: '제목 2'
        },
        {
            id: 3,
            title: '제목 3'
        }
    ]
};

// #2 서브 컴포넌트에 props 파라미터 추가
const AppChild = (props) => {
    const { title } = props;

    // #3 props 적용
    return <li>{title}</li>;
};

class App extends React.Component {
    render() {
        const { itemList } = DEMO_PROPS;

        return (
            <ul>
                {itemList.map((item) => (
                    // #4 key를 추가하고 item 속성들을 스프레드 연산자를 이용해 props로 전달
                    <AppChild key={item.id} {...item} />
                ))}
            </ul>
        );
    }
}

export default App;