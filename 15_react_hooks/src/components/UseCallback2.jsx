import { useState, useCallback } from 'react';

export default function UseCallback2() {
  const [text, setText] = useState('');

  // const handleChange = useCallback(() => {
  // }, [text])

  // input 태그에 onChange 속성으로 연결된 함수의 경우
  // 업데이트가 매우 잦아 리렌더링 될 때마다 이벤트 핸들러 함수가 생성
  // 로직 자체에는 아무 변화가 없지만 불필요하게 계속 함수가 생성되는 중
  //   현재 이벤트가 발생한 요소의 value값에 접근한 것 뿐
  //   const handleChange = (e) => {
  //     setText(e.target.value);
  //   };

  // useCallback hook을 사용해서 콜백 함수 자체를 저장하고, 사용
  // 불필요하게 함수가 생성되지 않음
  // 의존성 배열이 빈 배열인 경우 useCallback hook을 사용한 함수는
  // 다시 선언되지 않음
  // 어떤 변화가 일어나도 다시 선언되지 않으므로 빈배열
  const handleChange = useCallback((e) => {
    // 값을 저장하는게 아니고 값만 업데이트 해주고 있음
    setText(e.target.value);
  }, []);

  // 결과는 동일하지만 함수가 메모리에 저장되어 다시 선언되지 않고
  // 불러와 사용하는 중

  return (
    <>
      <h2>useCallback 사용 2</h2>
      {/* 만약 텍스트가 빈배열이거나 없다면 '없음'을 내보내라 */}
      <div>text state : {text || '없음'}</div>
      {/* value값은 text값으로 */}
      <input type='text' value={text} onChange={handleChange} />
    </>
  );
}

// useMemo vs useCallback
// const memoizationValue = useMemo(() => function, [dependency arr]);
// const memoizationCallback = useCallback(() => function, [dependency arr]);

// useCallback은 useMemo를 기반으로 만들어진 Hook
// useCallback은 useMemo에서 "값"이 아닌 "함수를 사용할 때"의
// 편의성을 높이기 위해 만들어진 hook

// 공통점 : 성능 최적화
// 차이점 : 특정 "값"(useMemo)를 재사용할지, 특정 "함수"(usecallback)를 재사용할지에
//          따라 선택적으로 사용

// useMemo는 값의 재사용을 위해 전달된 함수를 실행하고, "그 결과(리턴값)"을 메모이제이션
// useCallback은 함수의 재사용을 위해 전달된 "함수 자체"를 메모이제이션
