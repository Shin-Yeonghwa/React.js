import React from 'react';
import AppChild from './AppChild';

class App extends React.Component {
    render() {
        return (
            // #1 Box 컴포넌트에서 출력할 내용을 부모 컴포넌트가 전달
            <Box>
                <p>Box 컴포넌트에서 출력할 내용</p>
                <p>Box 컴포넌트에서 출력할 내용</p>
                <p>Box 컴포넌트에서 출력할 내용</p>
            </Box>
        );
    }
}

export default App;
