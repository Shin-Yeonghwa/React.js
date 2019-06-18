import React from 'react';
import AppChild from './AppChild';

const DEMO_PROPS = {
    itemList: [
        {id: 1},
        {id: 2},
        {id: 3}
    ]
};

class App extends React.Component {
    render() {
        const { itemList } = DEMO_PROPS;

        return (
            <ul>
                {/*#1 map을 이용하여 필요한 위치에 목록 출력*/}
                {itemList.map((item) => (
                    // #2 반복되는 최상위 요소에 key 추가
                    <li key={item.id}>
                        {/*#3 반복할 컴포넌트 추가*/}
                        <AppChild />
                    </li>
                ))}
            </ul>
        );
    }
}

export default App;
