import { useState } from 'react';

// (initialValue)초기값 부여하면서 false라는 기본값 부여
// 토글이란 두 가지 상태만 가지고 있어 서로 다른 값으로 반전시키는 기능
// useToggle hook은 컴포넌트 조건부 렌더링, 체크박스, 다크/라이트 모드 전환, 모달창 열기
// 해당 로직을 반복할 필요 없이 커스텀 훅으로 만들어 사용하면 편리
// 배열 구조분해 할당은 순서가 중요
export default function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggleValue = () => setValue(!value);

  // return 값은 state인 value와 해당 state를 반전시키는 toggleValue 함수
  // 구조 분해 할당 위해 []로 사용
  // 두개의 데이터를 내보내야되는데 묶는 방법 중의 하나가 배열
  return [value, toggleValue];
}
