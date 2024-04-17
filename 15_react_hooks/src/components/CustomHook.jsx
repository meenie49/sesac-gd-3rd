import useTitle from '../hooks/useTitle';
import useToggle from '../hooks/useToggle';

export default function CustomHook() {
  // toggle state에 이름만 바꿔서 사용한 것
  // 이렇게 두개 선언해도 각자 다르게 작동 -> 독자적으로 선언된 것과 같으므로
  // 여기서 두 번째 구조분해할당 요소인 setIsShow는 state의 setter 함수가 아니라
  // useToggle hook에서 선언한 원래 isShow state의 값을 반전시키는 함수
  const [isShow, setIsShow] = useToggle();
  // const [isShow, setIsShow] = useState(false);
  // const setIsShow = () => {setIsShowState(!isShow)} 이 두개와 동일
  const [isQnaOpen, setIsQnaOpen] = useToggle();
  // const [isQnaOpen, setIsQnaOpen] = useState(false);
  // const setIsQnaOpen = () => {setIsQnaOpenState(!isQnaOpen)} 이 두개와 동일

  // useTitle 커스텀 훅 사용
  useTitle('커스텀 훅 사용');

  return (
    <>
      <h1>커스텀 훅 사용</h1>
      {/* toggleValue라는 값이 setIsShow에 들어감 */}
      <button onClick={setIsShow}>useToggle hook 사용하기</button>
      {isShow && <div>안녕!</div>}

      <div onClick={setIsQnaOpen}>
        Q. 리액트에서 custom hook 만들 수 있나요?
      </div>
      {isQnaOpen && <dir>A. 네 가능합니다~!</dir>}
    </>
  );
}
