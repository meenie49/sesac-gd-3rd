import { Component, createRef } from 'react';

export default class ClassRef extends Component {
  // 클래스 컴포넌트 내부에서 const 사용 안함
  input = createRef();
  // document.queryselector() 랑 같은말
  localVar = createRef();
  state = {
    state: 0,
  };

  render() {
    return (
      <>
        <h2>클래스형 컴포넌트에서 ref 사용</h2>
        <input type='text' ref={this.input} />
        {/* 나의 인풋에 접근해 focus하겠다. */}
        <button
          onClick={() => {
            this.input.current.focus();
          }}
        >
          버튼
        </button>

        <div>this.localVar.current : {this.localVar.current}</div>
        <div>state : {this.state.state}</div>

        <button onClick={() => this.localVar.current++}>localVar + 1</button>
        <button onClick={() => this.setState({ state: this.state.state++ })}>
          state + 1
        </button>
      </>
    );
  }
}
