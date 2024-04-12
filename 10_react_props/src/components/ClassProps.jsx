import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ClassProps extends Component {
  render() {
    // this 라고 찍어줘야함
    console.log(this.props);
    // 힌트 : {this.props.drink} -> 아메리카노
    /* 
    this.props = 객체
    {
        drink: '아메리카노',
        payment: '카드';
    }
    */
    return (
      <>
        <h1 className='title'>클래스형 컴포넌트에서의 props 사용</h1>
        {/* 나라는 클래스 this, children은 content내용 다 받음 */}
        <div>
          주문하신 음료는 {this.props.drink}이고, 결제는 {this.props.payment}{' '}
          맞으실까요?
        </div>
        <div>비용은 {this.props.price}원 입니다.</div>
      </>
    );
  }
  // 클래스형 컴포넌트에서 props 관련 속성을 추가하는 방법 1
  // static 키워드 사용해 컴포넌트 선언 내부에서 작성
  // price props가 undefined라면 기본값으로 8500 사용
  static defaultProps = {
    price: 8500,
  };
}

// 클래스형 컴포넌트에서 props 관련 속성을 추가하는 방법 2
// 클래스 컴포넌트 선언 밖에서 점 접근법으로 props 속성을 지정
// drink, payment props는 string / price props는 number로 타입 제한
// 위에는 속성이어서 카멜이고 안에는 파스칼
ClassProps.propTypes = {
  drink: PropTypes.string,
  payment: PropTypes.string.isRequired, // payment props는 필수 값으로 지정
  price: PropTypes.number,
};
