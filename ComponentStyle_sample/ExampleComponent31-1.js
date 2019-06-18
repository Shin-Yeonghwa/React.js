import React from 'react';
import AppChild from './AppChild';

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

class App extends React.Component {
    render() {
        const { itemList } = DEMO_PROPS;

        return (
            <ul>
                {itemList.map((item) => (
                    // #2 key를 추가하고 item 속성들을 스프레드 연산자를 이용해 props로 전달
                    <AppChild key={item.id} {...item} />
                ))}
            </ul>
        );
    }
}

export default App;
