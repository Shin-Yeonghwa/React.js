import React from 'react';

const DEMO_PROPS = {
    id: 1234,
    title: '목록의 제목'
};

class AppChild extends React.Component {
    render() {
        const { id, title } = DEMO_PROPS;

        return (
            <React.Fragment>
                <p>{id}</p>
                <p>{title}</p>
            </React.Fragment>
        );
    };
}

export default AppChild;
