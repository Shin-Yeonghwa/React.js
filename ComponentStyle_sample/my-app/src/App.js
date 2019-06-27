import React from 'react';

const DEMO_PROPS = {
    itemList: [
    ]
};

class App extends React.Component {
    render() {
        const { itemList } = DEMO_PROPS;

        return (
            <ul>
                {/*#1 map을 이용하여 필요한 위치에 목록 출력*/}
                {itemList.map((item) => (
                    // #2 key 추가
                    <li key={item.id}>목록</li>
                ))}
            </ul>
        );
    }
}

export default App;
