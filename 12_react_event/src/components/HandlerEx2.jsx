import { useState } from 'react';

export default function HandlerEx2() {
  const [textColor, setTextColor] = useState({
    color: 'black',
    text: '검정색',
  });
  const txtRed = () => {
    setTextColor({ color: 'red', text: '빨간색' });
  };

  return (
    <>
      {/* div 태그 안에 인라인으로 해주거나 아님 위에서 선언 */}
      <div style={{ color: textColor.color }}>
        <h2>{textColor.text}</h2>
      </div>
      <button onClick={txtRed}>빨간색</button>
      <button
        onClick={() => {
          setTextColor({ color: 'blue', text: '파란색' });
        }}
      >
        파란색
      </button>
    </>
  );
}
