import React from 'react';

class AppChild extends React.Component {
    render() {
        return (
            <div className="box">
                <div className="content">
                    {/* #2 this.props.children을 이용하여 외부에서 입력한 내용을 출력 */}
                    {this.props.children}
                </div>

                <button>내용 펼치기</button>
            </div>
        );
    }
}

export default AppChild;
