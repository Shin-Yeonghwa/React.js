import React from 'react';

const DEMO_PROPS = {
    itemList: []
};

class App extends React.Component {
    render() {
        const { itemList } = DEMO_PROPS;

        // 배열 데이터가 있는 조건
        const visibleItemList = itemList && itemList.length > 0;

        // 배열을 조건에 따라 노출
        return visibleItemList ?
            (
                // 배열이 노출되는 조건
                <ul>
                    {itemList.map((item) => (
                        // #2 key 추가
                        <li key={item.id}>목록</li>
                    ))}
                </ul>
            ) : (
                // 배열이 노출되지 않는 조건
                <div>목록이 없습니다.</div>
            );
    }
}

export default App;
