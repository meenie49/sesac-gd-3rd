import { Component } from 'react';

export default class ClassEvent extends Component {
  // 꼭 constructor 안써줘도 됨 -> 자동으로 부모에서 받음
  /*     constructor(props) {
        super(props)
    } */
  constructor(props) {
    super(props);

    // 이 클래스에 handleClick이라는 함수를 묶어줄꺼야
    // 첫 인자 this 키워드 사용 이어지는 인자들은
    // hanleClick이라는 함수의 this를 함수 자체의 this가 아닌
    // 클래스 자체를 의미하는 this로 바인딩(묶어줌)
    this.handleClick = this.handleClick.bind(this);
  }
  state = {
    msg: '홍제리 보구싶당..😻',
  };
  // 함수 선언문을 사용해 메서드를 정의
  // 함수 내부의 this는 클래스의 this와 다른 자체적인 this가 됨
  // 생성자 함수 내부에서 this를 원하는 것으로 바인딩
  handleClick() {
    this.setState({ msg: '언제보지😐' });
  }
  render() {
    return (
      <>
        <h2>클래스형 컴포넌트에서 이벤트</h2>
        <div>{this.state.msg}</div>
        <button onClick={this.handleClick}>🐱</button>

        <input
          type='text'
          onChange={(e) => {
            console.log(e);
            console.log(e.target.value);
          }}
        />
      </>
    );
  }
}
