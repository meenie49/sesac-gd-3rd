import { Component } from 'react';

export default class ClassState extends Component {
  /*   // 처음 클래스형 컴포넌트가 나왔을 때 state를 사용한 방법
    constructor(props) {
        super(props); // Components 클래스에서 props를 상속
        // this객체 사용해 state를 추가함
        this.state = {
            banana : '바나나',
        }
    }
    */
  // 현재 클래스형 컴포넌트에서 state를 사용하는 방법
  // constructor 생성자 함수를 작성하는 대신 state만 바로 작성
  // constructor 생성자 함수를 작성하지 않음 자동으로 아래의 코드 실행 됨
  // constructor(props) {
  // super(props);
  // }
  state = {
    banana: '바나나', // banana라는 state를 선언 해당 state의 값으로 '바나나'를 저장
  };
  render() {
    // state는 보통 여러개 이기 때문에 {} 안에 작성해주고 this.state에서 가져올 꺼니까
    const { banana } = this.state;
    return (
      <>
        <h2>클래스형 컴포넌트에서 state 사용하기</h2>
        {/* 바나나라는 state의 값을 문자열 'banana'로 바꿀거야 */}
        <button onClick={() => this.setState({ banana: 'banana' })}>
          영어로 변경
        </button>
        {/* this.state까지만 쓰면 에러 */}
        {/* <div>{this.state.banana}</div> */}
        {/* banana만 쓰고싶으면 객체구조분해할당 이용해서 const로 위에 정의 */}
        <div>{banana}</div>
      </>
    );
  }
}
