import React from 'react';

class AppChild extends React.Component {
    render() {
        // #3 DEMO_PROPS 대신 this.props로 부모 컴포넌트가 전달하는 값을 직접 사용
        const { id, title } = this.props;

        return (
            <li>
                <p>{id}</p>
                <p>{title}</p>
            </li>
        );
    };
}

export default AppChild;
