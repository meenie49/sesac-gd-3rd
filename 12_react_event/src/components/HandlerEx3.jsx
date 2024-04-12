import { useState } from 'react';

export default function HandlerEx3() {
  const [display, setDisplay] = useState(true);
  return (
    <>
      <br />
      <button
        onClick={() => {
          // 그냥 (false)라고만 한다며 다시 뒤집어지지 않음
          setDisplay(!display);
        }}
      >
        {display ? '사라져라' : '보여라'}
      </button>
      {/* 더 많이 걸리지는 것부터 앞에 써주기 */}
      {/* 앞에가 true가 아니면 뒤에 꺼를 읽지 않음 */}
      {display && <h2>안녕하세요😀</h2>}
    </>
  );
}
