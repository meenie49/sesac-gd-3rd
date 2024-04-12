import { Component } from 'react';
export default class HandlerEx extends Component {
  constructor(props) {
    super(props);
    // 이 줄 써줘야함
    this.handleClick = this.handleClick.bind(this);
  }
  state = {
    msg: 'Hello World!',
  };
  handleClick() {
    this.setState({ msg: 'Goodbye World!' });
  }
  render() {
    return (
      <>
        <br />
        <br />
        <br />
        <div>{this.state.msg}</div>
        <button onClick={this.handleClick}>클릭</button>
        <br />
        <br />
        <br />
      </>
    );
  }
}
