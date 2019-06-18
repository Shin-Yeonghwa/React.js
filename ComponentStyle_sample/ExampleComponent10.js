import React from 'react';

class AppChild extends React.Component {
    render() {
        // this.props는 부모 컴포넌트가 전달하는 값
        const { title } = this.props;

        return (
            // 클래스 적용
            <div>
                <p>{title}</p>
            </div>
        );
    }
}

// title props에 대한 기본 값 설정
AppChild.defaultProps = {
    title: '제목이 없습니다.'
};

export default AppChild;
