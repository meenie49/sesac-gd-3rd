import { useSelector, useDispatch } from 'react-redux';

export default function Counter() {
  // store에서 관리되는 state를 가져오는 hook
  // state라고만 작성시 이 store에 있는 모든 state 가져오게됨
  //   접급해서 가져옴
  const number = useSelector((state) => state);
  console.log(number);

  const dispatch = useDispatch();

  return (
    <>
      <h2>redux를 사용해 store에서 관리되는 state 가져오고, 사용하기</h2>
      <div>전역 관리되는 state 값 : {number}</div>

      <div>전역 관리되는 state 값 변경하기</div>
      {/* 이름이 없는 함수를 전달해줌으로써 바로 실행이되지 않게 */}
      {/* 클릭하면 디스패치 함수가 실행되고 인자가 reducer함수로 이동해 type에 맞게 실행되어 state값이 리턴됨 */}
      <button onClick={() => dispatch({ type: 'increment' })}>+1</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-1</button>
      <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
    </>
  );
}
