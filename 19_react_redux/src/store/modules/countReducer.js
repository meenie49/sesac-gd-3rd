// 초기값
const initialState = 0;

// 액션 타입 정의
// action.type에 count/~~로 작성하는 이유
// decrement, increment, reset은 다른 state들에서 type으로 사용될 수 있음
// 이에 대한 type의 특정을 통해 원하는 로직을 실행시키기 위함
// ex. count를 increment하는 타입이다

// counterMinus는 함수 -> counterMinus() 형식으로 호출 시 {type: 'decrement'}를 반환
// dispatch(counterMinus()) == dispatch({type: 'decrement'})

// type으로 increment와 reset 전달하는 액션 타입 정의하기
// { type: 'increment';}
export const counterPlus = () => ({ type: 'count/increment' });
// {type: 'decrement';}
export const counterMinus = () => ({ type: 'count/decrement' });
console.log(counterMinus()); // {type: 'decrement'} 콘솔에 찍힘
// {type: 'reset';}
export const counterReset = () => ({ type: 'count/reset' });

// 리듀서 작성
export const countReducer = (state = initialState, action) => {
  switch (action.type) {
    // 중괄호 딱히 필요 없고 case는 ''로 감싸기
    case 'count/increment':
      return state + 1;

    case 'count/decrement':
      return state - 1;

    case 'count/reset':
      return 0;

    default:
      return state;
  }
};
