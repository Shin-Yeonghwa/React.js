# Component Style Guide

본 가이드는 React 프로젝트를 수행하는 UI 개발자 참고용으로 작성되었으며, 참여하는 프로젝트에서 일관된 컴포넌트 구조를 가지도록 컨벤션을 정하는데 활용할 수 있습니다.

## 목차

- [컴포넌트](#컴포넌트)
    - [컴포넌트파일구조](#컴포넌트-파일-구조)
    - [컴포넌트 기본 문법 구조](#컴포넌트-기본-문법-구조)
        - 클래스형
        - 함수형
        - 내부 컴퍼넌트
    - [상태값](#상태값)
        - [상태값 전달 방법](#상태값-전달-방법)
    - [동적 대응](#동적-대응)
        - [CSS 클래스 조건 처리](#CSS-클래스-조건-처리)
        - [영역 노출 조건 처리](#영역-노출-조건-처리)
        - [동적 목록 처리](#동적-목록-처리)

## 컴포넌트

컴포넌트의 구성에 대한 안내입니다.


### 컴포넌트 파일 구조

- 원칙은 해당 프로젝트의 가이드를 따릅니다.
특별한 가이드가 없는 경우 다음과 같이 컴포넌트 파일을 관리합니다.

```
src
├─── components // 컴포넌트 폴더
| ├─── ComponentName.js (컴포넌트)
| └─── ComponentName.scss (필요한 경우 생성, 컴포넌트용 SCSS 파일)
| └─── ComponentName-dummy.js (필요한 경우 생성, 컴포넌트용 테스트 props 모듈)
|
├─── pages // 화면 단위의 React 페이지 컴포넌트 저장 폴더
└─── scss // 전역으로 사용되는 스타일들(reset, mixin, variables ...)
```

> 보통은 fe 개발자에게 pages 파일과 마크업 최상위 컨테이너를 만들어달라고 요청하는 것을 권장합니다.


### 컴포넌트 기본 문법 구조

- 컴포넌트의 문법 구조는 함수형/클래스형 두 가지가 있습니다.
- 기본적으로 클래스형을 사용합니다.

#### 클래스형
- 클래스란 객체를 생성하고 상속을 다루기 위해 제공되는 ES6의 키워드입니다.
- 동적 랜더링이 필요한 컴포넌트를 만들 때 사용합니다.

```js
import React from 'react';

// React.Component를 상속한 클래스로 선언
class App extends React.Component {
    render() {
        return ( // render 함수 안에는 반드시 return을 가지고 있어야 합니다.
            <h2>클래스형</h2>
        );
    }
}

export default App;
```

#### 함수형
- 변하는 데이터 없는 정적인 마크업을 만들 때 사용됩니다.
- 컴포넌트 내부에 선언하는 서브 컴포넌트에서 사용됩니다.

##### ES5 문법
```js
import React from 'react';

const App = function () {
return (
    <div>
        <h2>함수형 - ES5</h2>
    </div>
    );
}

export default App;
```

##### ES6 문법 (화살표 함수)
```js
import React from 'react';

// 화살표 함수로 선언
const App = () => {
    return (
        <h2>함수형 - ES6</h2>
    );
};

export default App;
```

> **function과 Arrow Function 차이**
> - => 을 사용하여 함수를 정의하여 코드 간소화
> - 익명 함수이며 hoisting이 불가능하다.
> - [화살표 함수 참고](https://oss.navercorp.com/coboy/ES6/wiki/ES6-%EA%B8%B0%EC%B4%88%EA%B0%95%EC%A2%8C-2)


> 함수형 컴포넌트는 클래스형 컴포넌트에서 render 메서드만 분리한 형태라고 생각하면 됩니다.

#### 내부 컴퍼넌트
```js
import React from 'react';

// 서브 컴포넌트는 함수형으로 사용
const SubComponent = () => {
    return (
        <p>서브 컴포넌트입니다.</p>
    );
};

class App extends React.Component {
    render() {
        return (
            <div>
                <h2>메인 컴포넌트입니다.</h2>
                <SubComponent />
            </div>
        );
    }
}

export default App;
```
### 상태값
렌더링에 영향을 주는 데이터로 랜더링 처리에 필요한 값을 관리하는 방법을 안내합니다.
컴포넌트 외부에서 접근할 수 없는 상태 값은 state로 외부에서 제어하는 상태 값은 props로 관리합니다.

마크업 개발 단계에서는 비즈니스 로직을 예상할 수 없기 때문에 이 둘을 구분하지 않으며 `DEMO_PROPS` 예약어를 통해 전달합니다.

#### 상태값 전달 방법
import 구문 바로 아래에 `DEMO_PROPS`를 추가하여 데이터를 관리합니다.

> DEMO_PROPS를 정의할 때는 let 또는 const를 사용합니다.
let, const는 ES5의 var과 같은 역할을 하지만 아래와 같은 차이가 있습니다.

| 키워드 | 특징 |
| --- | --- |
| var | 변수를 선언할 때 사용되며 hoisting 가능하다 |
| let | 변수를 선언할 때 사용되며 hoisting 불가능하다.<br> 선언된 변수에 대해 중복 선언을 할 수 없다.|
| const | 상수를 선언할 때 사용되며 값을 재 할당할 수 없다.<br> 이외의 규칙은 let과 동일 |

> 변수 선언 시 값을 재 할당해야 될 경우를 제외하고 모두 const로 선언하는 것이 좋다.

##### 신규 컴포넌트 대응하는 경우
```js
import React from 'react';

// #1 마크업 개발용 데이터 정의
const DEMO_PROPS = {
    id: 1234,
    title: '마크업 데모 데이터'
};

class App extends React.Component {
    render() {
        // #2 props용 변수에 값 할당
        const { id, title } = DEMO_PROPS;

        // #3 데이터 적용
        return (
            <div>
                <p>{id}</p>
                <p>{title}</p>
            </div>
        );
    }
}

export default App;
```

##### 개발된 컴포넌트를 수정하는 경우
개발된 컴포넌트는 마크업에서 정의한 상태값을 적용하고 삭제한 상태이기 때문에 새로운 `DEMO_PROPS`를 추가하여 대응한다.
```js
import React from 'react';

// #1 마크업 개발용 데이터 추가
const DEMO_PROPS = {
    preview: '미리 보기 내용'
};

class App extends React.Component {
    render() {
        // #2 기존의 props의 위치와 상관 없이 첫 번째 라인에 별도로 추가
        const { preview } = DEMO_PROPS;

        const { id, title } = props;

        // #3 데이터 적용
        return (
            <div>
                <p>{id}</p>
                <p>{title}</p>
                {/* #3 추가 데이터 반영 */}
                <p>{preview}</p>
            </div>
        );
    }
}

export default App;
```

### 동적 대응

#### CSS 클래스 조건 처리
- 조건에 따른 클래스 처리는 항상 [classnames](https://www.npmjs.com/package/classnames) 라이브러리를 사용하고 별도의 변수로 처리합니다.

##### 조건 처리를 위한 연산자

| 연산자 | 기호 | 의미 |
| --- | --- | --- |
| 논리연산자 | ! | A가 false이면 값은 true |
| 비교연산자 | !== | A와 B가 다르면 값은 true |
| 비교연산자 | === | A와 B가 같으면 값은 true |

###### 상태에 따른 className 적용
```js
import React, { Component } from 'react';
import classnames from 'classnames';
import './Login.css';

const DEMO_PROPS = {
  isLogin: false
};

class Login extends Component {
  render() {

    const { isLogin } = DEMO_PROPS;

    const expandClass = classnames({
      // Login이 아닌 경우 user 클래스 노출
      'main': !isLogin
    });

    // 고정된 class 처리
    // const expandClass = classnames('main', {
    //     'wide': !isLogin
    // });
    
    return (
      <div className={expandClass}>
        ...
      </div>   
    );
  }
}

export default Login;
```

```js
const DEMO_PROPS = {
  isLogin: false,
  userType: 'admin'
};

class Login extends Component {
  render() {

    const { isLogin, userType } = DEMO_PROPS;

    const expandClass = classnames('main', {
      'wide': !isLogin, // 로그인이 아닌 경우라면 wide 클래스 노출
      'info-wrap': userType !== 'admin' // admin이 아니면 info-wrap 클래스 노출
    });

    const loginClass = classnames({
        'login': isLogin, // 로그인이면 login 클래스 노출
        'sign': userType === 'admin', // admin이면 user-admin 클래스 노출
        'user-staff': userType !== 'admin' // admin이 아니면 user-staff 클래스 노출
    });
    
    return (
      <div className={expandClass}>
        <p className={loginClass} align="center">Sign in</p>
        ...
      </div>   
    );
  }
}
```

#### 영역 노출 조건 처리
컴퍼넌트의 일부 영역의 노출을 제어

##### 조건 처리를 위한 연산자

| 연산자 | 기호 | 의미 |
| --- | --- | --- |
| 논리연산자 | && | A와 B 모두 true이면 값은 true |
| 삼항연산자 | (조건) ? 실행값1: 실행값2 | 조건이 true면 실행값1, false면 실행값2 |

```js
import React, { Component } from 'react';
import classnames from 'classnames';
import './Login.css';

const DEMO_PROPS = {
  isLogin: true,
};

class Login extends Component {
  render() {

    const { isLogin } = DEMO_PROPS;
    
    return (
      <div className="main">
        <p className="sign" align="center">Sign in</p>
        {/* 로그인 한 경우 메세지 노출 */}
        {isLogin && (
          <p class="info">로그인 되었습니다.</p>
        )}

        {/* 삼항 연산자 로그인 한 경우 좌측값 : 안 한 경우 우측 값 노출 */}
        {/* {isLogin ? 
          <p class="info">로그인 되었습니다.</p> : <p class="info">로그인 해주세요.</p>
        } */}
      </div>   
    );
  }
}

export default Login;
```

#### 동적 목록 처리
동적으로 처리할 배열의 요소는 id 속성만 가진 객체를 사용합니다. 이외의 값은 정의하지 않습니다.

- 배열 데이터에 따라 반복 처리는 Array.prototype.map 메서드를 사용합니다.

```js
import React, { Component } from 'react';
import './Login.css';

const DEMO_PROPS = {
    itemList: [
        {id: 1},
        {id: 2},
        {id: 3}
    ]
};

class Login extends Component {
    render() {
        const { itemList } = DEMO_PROPS;

        // 아이템을 조건에 따라 노출
        return (
            <ul className="list">
                {// 배열이 노출되는 조건
                  itemList.map((item) => (
                      // #2 key 추가
                      <li key={item.id}>목록</li>
                  ))
                }
            </ul>
        );
    }
}

export default Login;
```

- 배열 데이터가 없는 조건은 배열의 length 값으로 판단합니다.

```js
import React, { Component } from 'react';
import './Login.css';

const DEMO_PROPS = {
  itemList: [
  ]
};

class Login extends React.Component {
  render() {
      const { itemList } = DEMO_PROPS;

      // 배열 데이터가 있는 조건
      const visibleItemList = itemList && itemList.length > 0;

      // 아이템을 조건에 따라 노출
      return (
          <ul className="list">
              {visibleItemList ? (
                  // 배열이 노출되는 조건
                  itemList.map((item) => (
                      // #2 key 추가
                      <li key={item.id}>목록</li>
                  ))
              ) : (
                  // 배열이 노출되지 않는 조건
                  <li class="none">목록이 없습니다.</li>
              )}
          </ul>
      );
  }
}

export default Login;
```

- 목록 자체 노출을 조건 처리 하는 경우

```js
import React from 'react';
import './Login.css';

const DEMO_PROPS = {
  itemList: [
  ]
};

class Login extends React.Component {
  render() {
      const { itemList } = DEMO_PROPS;

      // 배열 데이터가 있는 조건
      const visibleItemList = itemList && itemList.length > 0;

      // 배열을 조건에 따라 노출
      return visibleItemList ?
          (
              // 배열이 노출되는 조건
              <ul className="list">
                  {itemList.map((item) => (
                      // #2 key 추가
                      <li key={item.id}>목록</li>
                  ))}
              </ul>
          ) : (
              // 배열이 노출되지 않는 조건
              <div className="list">
                <div className="none">목록이 없습니다.</div>
              </div>
          );
  }
}

export default Login;
```

- 목록의 데이터 전달

```js
import React from 'react';
import './Login.css';

// #1 목록 데이터 정의
const DEMO_PROPS = {
    itemList: [
        {
            id: 1,
            title: '제목 1입니다.'
        },
        {
            id: 2,
            title: '제목 2는 길게 한번 써봅니다.'
        },
        {
            id: 3,
            title: '제목 3은 2보다 더 길게 사용하여 말줄임 되는지 보도록 하겠습니다.'
        }
    ]
};

class Login extends React.Component {
    render() {
        const { itemList } = DEMO_PROPS;

        return (
            <ul class="list">
                {itemList.map((item) => (
                    // #2 key를 추가하고 item 값을 직접 접근해서 사용
                    <li key={item.id}>
                        <p>{item.title}</p>
                    </li>
                ))}
            </ul>
        );
    }
}

export default Login;
```