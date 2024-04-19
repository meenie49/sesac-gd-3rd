import styled, { keyframes } from 'styled-components';

export default function StyledComponents() {
  const rertate = keyframes`
  0%{
    transform: rotate(0);
  }
  50%{
    transform: rotate(50);
  }`;
  const MyDiv = styled.div`
    border: 1px solid gray;
    padding: 10px;
    margin: 10px 0;
  `;

  const MyDiv2 = styled.div`
    border: 1px solid gray;
    padding: 10px;
    margin: 10px 0;
  `;

  const Child = styled.span`
    background-color: pink;
    color: purple;

    &:hover {
      color: blue;
      animation: ${rotate} 1s infinite linear;
    }
    @media screen and (min-width: 720px) {
      background-color: lightblue;
    }

    const rotateDiv = styled.div``
  `;

  return (
    <>
      <div>일반 div</div>
      <MyDiv>styled-components 사용해 만든 MyDiv</MyDiv>
      <MyDiv2>styled-components 사용해 만든 MyDiv</MyDiv2>
      <Child>Child 컴포넌트</Child>
      <rotateDiv></rotateDiv>
    </>
  );
}
