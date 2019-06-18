import React from 'react';

const DEMO_PROPS = {
    itemList: []
};

class App extends React.Component {
    render() {
        const { itemList } = DEMO_PROPS;

        // 배열 데이터가 있는 조건
        const visibleItemList = itemList && itemList.length > 0;

        // 아이템을 조건에 따라 노출
        return (
            <ul>
                {visibleItemList ? (
                    // 배열이 노출되는 조건
                    itemList.map((item) => (
                        // #2 key 추가
                        <li key={item.id}>목록</li>
                    ))
                ) : (
                    // 배열이 노출되지 않는 조건
                    <li>목록이 없습니다.</li>
                )}
            </ul>
        );
    }
}

export default App;
