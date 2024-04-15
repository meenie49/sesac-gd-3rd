import { useState, useEffect, useCallback } from 'react';

export default function UseCallback1() {
  const [number, setNumber] = useState(0);
  const [isTrue, setIsTrue] = useState(true);

  // 일반적으로 선언된 함수의 경우 컴포넌트가 리렌더링 될 때마다 함수가 다시 선언됨
  // 그렇기 때문에 isTrue state에만 변경사항이 있어도 func1이라는 함수도 다시 선언됨
  // useEffect에서 의존성 배열로 func1에 변경사항이 생기면 내부 로직을 실행하도록 작성
  // 매번 useEffect의 콜백 함수가 실행됨
  const func1 = () => {
    // 콘솔안에서는 변수 같이 쓰려면 템플릿리터럴``으로
    // 그외에는 텍스트 쓰고 {변수}
    console.log(`number state : ${number}`);
  };

  // 의존성 배열에 전달한 number의 값이 바뀌지 않을 경우
  // 메모리제이션 한 콜백 함수를 그대로 사용하고,
  // number의 값이 바뀌면 useCallback hook의 첫 번째 인자로 전달한
  // 콜백 함수를 다시 메모리제이션
  const func2 = useCallback(() => {
    console.log(`number state : ${number}`);
  }, [number]);

  useEffect(() => {
    console.log('func1 함수 변경!!!📢');
  }, [func1]);

  useEffect(() => {
    console.log('func2 함수 변경!!!🔧');
  }, [func2]);

  return (
    <>
      <h2>UseCallback 사용1</h2>
      <input
        type='text'
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <br />
      {/* 함수 실행 및 변경 사항 확인 */}
      <button onClick={func1}>func1 실행</button>
      <button onClick={func2}>func2 실행</button>
      {/* 문자열로 바꿀 때 toString() -> 괄호 붙여야함 */}
      <button onClick={() => setIsTrue(!isTrue)}>{isTrue.toString()}</button>
    </>
  );
}

// useEffect의 의존성 배열에 함수가 들어가는 경우 useCallback hook을 사용하면
// 성능에 도움이 됨
// const [data, setData] = useState(null)
// const fetchData = useCallback(() => {
//    fetch -> then -> 파싱 ->
//     fetch(`~~~/${postId}`).then((response) => response.json());
// },[postId]);

// useEffect(() => {
//     fetchData().then((data) => setData(data));
// }, [fetchData]);

// 처음 컴포넌트 mount시 fetchData 함수 실행과 동시에 메모리에 콜백 함수 자체가 저장
// postId 값이 바뀌지 않는다면 fetchData 함수는 컴포넌트가 리렌더링 되어도
// 다시 선언되지 않음 -> 계속 사용되지 않는 함수나 연산이 너무 복잡해서
// 계산하는데 많은 자원이 드는 함수는 useCallback으로 저장하면 됨
