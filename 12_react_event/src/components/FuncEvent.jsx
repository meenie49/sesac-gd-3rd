import { useState } from 'react';

export default function FuncEvent() {
  // 함수형 컴포넌트에서 State쓰려면 useState 필요
  // 화이팅 바꾸기
  const [msg, setMsg] = useState('힘내세요💗');
  const msgToEng = () => {
    setMsg('fighting😀');
  };
  const msgToKor = () => {
    setMsg('파이팅😀');
  };
  // 불태우기
  // 매개변수 msg는 밖의 함수의 이름이 똑같은 msg와는 상관 없음
  const alertMsg = (msg) => {
    alert(msg);
  };
  // 점심
  const [menu, setMenu] = useState('menu');
  // 핸들엔터
  const handleEnter = (e) => {
    console.log(e);
    if (e.key === 'Enter') {
      alert(`점심 메뉴는 ${menu}로 결정`);
    }
  };
  return (
    <>
      <h2>함수형 컴포넌트 event handling</h2>
      <div>{msg}</div>
      {/* 클릭 이벤트 발생 시 실행할 함수 자체를 onClick에 전달 -> 함수 호출 X */}
      <button onClick={msgToEng}>fighting😊</button>
      <button onClick={msgToKor}>파이팅😀</button>
      <br />
      {/* 함수에 매개변수를 전달하는 경우 */}
      {/* 방법 1. */}
      {/* onClick에서 익명 함수를 선언하고, 그 내부에 함수를 실행시킴 */}
      {/* 익명 함수 자체를 전달하는 것이 됨 -> alertMsg 함수 자체를 호출한 것이 X */}
      <button onClick={() => alertMsg('오늘은 금요일이잖아요😆')}>
        메세지 alert창에 띄우기
      </button>

      {/* 방법 2. */}
      {/* bind 메서드 사용 */}
      {/* this는 '나'를 의미 */}
      <button onClick={alertMsg.bind(null, '끝까지 불태워 봅시다아아🔥')}>
        메세지 alert창에 띄우기
      </button>
      <br />
      {/* input 태그에서 변경 사항 발생 시 해당 input의 value를 콘솔에 출력 */}
      {/* input 태그에서 enter */}
      <input
        type='text'
        value={menu}
        placeholder='오늘 점심 뭐 먹지'
        // 변경사항이 있을때마다 업데이트되게 -> onChange
        onChange={(e) => {
          // 여기서 사용되는 e는 브라우저의 native 이벤트 객체가 아닌
          // react의 synthetic 이벤트 객체
          //   console.log(e);
          //   console.log(e.target.value);
          setMenu(e.target.value);
        }}
        // 키보드의 키가 눌렸을 때
        // 이벤트객체 인자는 생략가능
        onKeyDown={handleEnter}
      />
    </>
  );
}
