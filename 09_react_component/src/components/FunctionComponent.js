// function FunctionComponent() {
//   return <h1>함수형 컴포넌트</h1>;
// }
// // ()는 안써도 됨
// export default FunctionComponent;
// rfc + enter or tab :  파일명과 동일한 이름의 함수형 컴포넌트 만들어줌
// import React from 'react';

// export default function FunctionComponent() {
//   return <div>FunctionComponent</div>;
// }

// ---------------------------------------------------------------
// 모든 import는 export 위에 선언해줘야함
import cat from '../assets/jerry.jpg';
import React from 'react';

export default function FunctionComponent() {
  const text = '안녕하세요!';
  const name = 'jerry';
  const show = true;
  const textStyle = { backgroundColor: 'navy', color: 'pink', fontWeight: 900 }; // 객체

  const checkUser = () => {
    if (name === 'meenie') {
      return '안녕하세요!';
    } else if (name === 'jerry') {
      return '보고싶엉...';
    } else {
      return '나가주세요!';
    }
  };

  const handleClick = () => {
    alert('클릭했다!');
  };

  return (
    <>
      {/* 겉에 최상위 태그를 만들어주니 에러 없어짐 */}
      {/* 1. 하나의 최상위 부모 요소로 감싸서 return

        - virtual DOM에서 컴포넌트의 변화를 감지할 때
          효율적으로 비교할 수 있도록 컴포넌트 내부에는
          하나의 DOM 트리 구조로 이루어져야 한다고 React가 정함
        - div, section, article, header, footer 등
          최상위 부모 요소는 어떤 요소이든 상관 없음
        - 불필요한 태그를 만들지 않기 위해 <></> 와 같은 태그로 감싸는 경우도 많음
          (이를  Fragment 단축 문법이라함) -> React에서 제공해주는 것
          참고 (react 공식 문서) : https://react.dev/reference/react/Fragment
        - 실제 코드에서는 빈태그는 안보임 가상돔에서만 보임
    */}
      <div>함수형 컴포넌트 1</div>
      <div>함수형 컴포넌트 2</div>

      {/* 2-1. js 문법 사용 가능 (변수) */}
      <div>인사는 {text}</div>

      {/* 2-2. js 문법 사용 가능 (삼항 연산자를 사용한 조건부 렌더링 ver.간단) */}
      <h3>{name === 'meenie' ? `어서오세요 ${name}님` : '누구세요?'}</h3>

      {/* 2-3. js 문법 사용 가능 (위에서 함수를 만들어 사용 ver.복잡) */}
      <h3>{checkUser()}</h3>

      {/* 2-4. js 문법 사용 가능 (조건부 렌더링 && 사용) */}
      {/* && 앞이 참이라면 && 뒤 내용 실행 */}
      <h3>{show && '모달창 넣어주기!'}</h3>

      {/* 3. inline style 적용 방법 -> style 속성값으로 객체 전달 */}
      {/* 
        HTML 버전
        <div style="background-color: pink, color: navy"></div> 
      */}
      {/* 밑에 노란{}는 자바스크립트 객체를 사용할꺼란 의미, 숫자는 '' 안감싸도됨 */}
      <div style={{ backgroundColor: 'pink', color: 'navy', fontWeight: 900 }}>
        WOW!
      </div>
      <div style={textStyle}>OMG!</div>

      {/* 4. class와 onclick jsx에서 사용하기 */}
      {/* <div class= "text-css" onclick= "함수();">원래 html에서 사용하던 방식</div> */}
      <div className='text-css'>jsx에서 css 사용하기 (className)</div>

      {/* html에서는 함수를 "호출"했지만, jsx에서는 함수를 "선언함" */}
      {/* 방법 1 */}
      <button
        onClick={() => {
          // 함수();
          alert('클릭!!');
        }}
      >
        버튼
      </button>
      {/* 방법 2 */}
      <button onClick={handleClick}>버튼2(위에서 만든 함수 사용)</button>

      {/* 5. 닫는 태그 필수!!! */}
      <br />
      <br></br>

      <input></input>
      <input />
      {/* public이 기준 */}
      {/* 절대 경로는 public 폴더 내부 */}
      <img src='/logo192.png' alr='리액트 이미지' />
      {/* src폴더의 assets폴더를 만들어 여기 이미지 등을 저장 */}
      {/* src 내부의 이미지를 사용할 경우 해당 이미지를 위에 import한뒤 변수로 사용 */}
      <img src={cat} alt='귀여미 홍제리' style={{ width: 300 }} />
    </>
  );
}
