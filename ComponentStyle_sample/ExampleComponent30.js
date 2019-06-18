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

class ListComponent extends React.Component {
    render() {
        const { itemList } = DEMO_PROPS;

        return (
            <ul>
                {itemList.map((item) => (
                    // #2 key를 추가하고 item 값을 직접 접근해서 사용
                    <li key={item.id}>
                        <p>{item.title}</p>
                    </li>
                ))}
            </ul>
        );
    }
}

export default ListComponent;
