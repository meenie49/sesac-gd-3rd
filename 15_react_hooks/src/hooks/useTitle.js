import { useEffect } from 'react';

export default function useTitle(title) {
  useEffect(() => {
    // 도큐먼트 안의 타이틀이라는 태그안에 컨텐트 (현재 React App)
    // jsx가 아니고 js이기 때문에 dom에 접근가능
    const prevTitle = document.title;
    // 오른쪽 항 title은 위의 인자 title
    document.title = title;

    // unmount 될 때 원래 title로 돌려놓기 위해서 return문 안에 작성
    return () => (document.title = prevTitle);
  }, [title]);
  return <></>;
}

// useTitle은 title이라는 매개변수를 받는 커스텀 훅

// 새로운 컴포넌트가 mount되고, 해당 컴포넌트에서 useTitle hook을 호출하는 동시에
// 변경하고자 하는 title을 매개변수로 전달받아서 해당 title로 document.title의 컨텐트를 바꿔줌
// useEffect 내부에 title이 변경되면 document.title을 매개변수로 받은 값으로 변경
// 사용한 컴포넌트가 unmount 되면 원래 title 값으로 되돌려 놓음(clean up 함수)
