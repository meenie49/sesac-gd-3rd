import { useRef, useState } from 'react';

export default function FuncRef() {
  // react에서 DOM 요소 조작
  // react에서는 DOM 요소에 직접적으로 접근해 조작하지 않은 것이 좋음
  // virtual DOM을 사용하기 때문에 직접적인 DOM조작은 react에서 지양해달라고 함

  // input은 useRef에서 가져온다

  // useRef 훅
  const input = useRef();

  // ref를 **변수**로 사용
  // 변경은 감지하나 반영하지 않음
  const localVar = useRef(0);
  const [state, setState] = useState(0);
  let justVar = 0;

  const inCreLocalVar = () => {
    // 이 변수(localVar)의 현재값에서 1씩 더해지게 됨
    localVar.current++;
    console.log(localVar.current);
  };

  const focusInput = () => {
    // ref 사용할 때는 current속성은 꼭 해줘야함
    // 원래는 직접적인 접근을 못하나 ref로 접근하고 current를 사용해 접근
    console.log(input);
    console.log(input.current);
    input.current.focus();
  };

  // 그냥 변수는 렌더링하면 아예 다른 변수가 됨
  const increJustVar = () => {
    justVar++;
    console.log(justVar);
  };

  return (
    <>
      {/* useRef를 사용해 만든 ref는 DOM 요소와 연결해 사용 */}
      {/* ref 속성으로 만든 ref를 전달 */}
      <input type='text' ref={input} />
      {/* 버튼 클릭했을 때 input이 선택되어야하는데 e.target으로는 접근 불가 */}
      {/* 로그인 안될때 focus가는 거 */}
      <button onClick={focusInput}>버튼</button>

      <h2>localVar.current : {localVar.current}</h2>
      <h2>state : {state}</h2>
      <h2>justVar : {justVar}</h2>
      <button onClick={inCreLocalVar}>localVar + 1</button>
      <button
        onClick={() => {
          setState(state + 1);
        }}
      >
        state + 1
      </button>
      <button onClick={increJustVar}>justVar + 1</button>
    </>
  );
}
