import { useState, useReducer } from 'react';

// prevState는 이름 뭐로 해도 상관없음 밑에 money랑 같은 의미는 맞으나
// money는 export안에서만 선언되어 있으므로 상관이 없음
const reducer = (prevState, action) => {
  console.log('dispatch 호출 시 reducer 동작함');
  console.log(prevState, action);

  // reducer 함수 내부에는 조건문을 많이 사용함
  // switch나 if else 등등
  // 복잡한 state를 관리한다는 것은 state가 한 가지만 있는 것이 아니고,
  // 업데이트 로직이 한 가지 있다는 것이 아니기 때문
  // Number()로 안감싸니까 문자로 인식해 값이 쌓임
  switch (action.type) {
    case 'deposit':
      return Number(prevState) + Number(action.payload);
    case 'withdraw':
      return Number(prevState) - Number(action.payload);
    case 'withdrawAll':
      return Number(prevState === 0);
    default:
      return prevState;
  }
};
export default function UseReducer() {
  // 출금하고 입금할 값 -> 입력받을 예정
  const [number, setNumber] = useState(0);

  // const [스테이트, 디스패치] = useReducer(리듀서, 스테이트의 초기값);
  const [money, dispatch] = useReducer(reducer, 0);
  // reducer는 따로 만들어줘야함
  // 잔고 (money state)를 수정하고 싶은 경우 리듀서가 디스패치를 불러줌
  // 디스패치는 인자로 action을 가지고 있음
  // 디스패치는 state를 바꿔주는 것이 아니라 state를 업데이트 시켜주기 위한 요구를 담아 리듀서로 전달
  // 여기서 reducer만 선언해주고 나머지는 사용만 해주면 됨

  return (
    <>
      <h2>useReducer 사용</h2>
      <div>잔고 {money}원</div>
      <input
        type='number'
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        // step : 화살표로 값을 정할 때 값의 단위(정도)를 정해줌 (인풋 넣는값과는 상관 없음)
        step='1000'
      />
      <button
        onClick={() => {
          // action은 객체이므로 {}안에 씀
          // 디스패치가 리듀서를 불러줌
          // dispatch로 type은 deposit이고 payload는 이거야 라고 정해주는 것
          dispatch({ type: 'deposit', payload: number });
        }}
      >
        입금
      </button>
      <button
        onClick={() => {
          // action은 객체이므로 {}안에 씀
          // 디스패치가 리듀서를 불러줌
          dispatch({ type: 'withdraw', payload: number });
        }}
      >
        출금
      </button>
      <button
        onClick={() => {
          // action은 객체이므로 {}안에 씀
          // 디스패치가 리듀서를 불러줌
          dispatch({ type: 'withdrawAll', payload: null });
          alert('당신은 거지가 되고싶습니까?');
          setNumber(0);
          // , setNumber(0) 도 되나 웬만하면 ;으로 나눠주기
        }}
      >
        전액 출금
      </button>
    </>
  );
}

// 왜 타입과 페이로드만 넘겨주는 지 첫번째 인자를 prevstate로 했는데 money로 하면 안되는지
