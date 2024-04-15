// 데이터 불러오거나 검색창에서 사용
import { useState, useEffect } from 'react';

const MyComponent = (props) => {
  const { number } = props;
  const [text, setText] = useState('');

  //   // 컴포넌트 Mount시 실행
  //   // mount될 때는 return문위에 unmount될 때 빈배열인 return문 안에가 실행됨
  //   useEffect(() => {
  //     console.log('함수형 컴포넌트 Mount 💥');
  //     // 컴포넌트 unMount시 실행
  //     // 컴포넌트 mount 시점과 unmount 시점에만 실행되는 로직의 경우
  //     // 하나의 useEffect에 작성 가능

  //     return () => {
  //       console.log('함수형 컴포넌트 Unmount 💤');
  //     };
  //   }, []);

  //   // 컴포넌트 unMount시 실행
  //   /*  useEffect(() => {
  //     console.log('함수형 컴포넌트 Unmount 💤');
  //   }, []); */

  // 컴포넌트 Mount & Update시 실행 (number)
  useEffect(() => {
    console.log('함수형 컴포넌트 Update 💌(number)');
  }, [number]);

  // 컴포넌트 Mount & Update시 실행 (text)
  useEffect(() => {
    console.log('함수형 컴포넌트 Update ✏(text)');
  }, [text]);

  //   // 의존성 배열 내부에 여러 요소 작성 가능
  //   useEffect(() => {'함수형 컴포넌트 Update 🖌(number, text)'}, [number, text])

  // 컴포넌트 Mount & update시 실행
  //   useEffect(() => {
  //     console.log('함수형 컴포넌트 Mount & Update✨(의존성 배열 작성 X');
  //   });
  return (
    <>
      <div>MyComponent 함수형{number}</div>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div>text state : {text}</div>
    </>
  );
};

export default function FuncLifeCycle() {
  const [number, setNumber] = useState(0);
  const [visible, setVisible] = useState(true);
  return (
    <>
      <button onClick={() => setNumber(number + 1)}>number + 1</button>
      <button onClick={() => setVisible(!visible)}>컴포넌트 토글</button>

      {/* 조건부 렌더링 && 사용 */}
      {/* && 앞이 참이라면 && 뒤 내용 실행 */}
      {visible && <MyComponent number={number} />}
    </>
  );
}
