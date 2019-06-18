import React from 'react';

const DEMO_PROPS = {
    contents: '자식 컴포넌트에서 부모 컴포넌트의 상태 값 사용'
};

class AppChild extends React.Component {
    render() {
        const { contents } = DEMO_PROPS;

        // #3 부모에서 전달하는 category 값은 DEMO_PROPS 가 아닌 this.props 를 통해서 사용
        const { category } = this.props;

        // 카테고리명-wrap 으로 클래스 가공
        const wrapClass = `${category}-wrap`;

        return (
            // 클래스 적용
            <div className={wrapClass}>
                <p>{contents}</p>
            </div>
        );
    }
}

export default AppChild;
