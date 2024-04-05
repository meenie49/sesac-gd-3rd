import React from 'react';

export default function FoodProps({ food }) {
  return <div>저의 최애 음식은 : {food} 입니다.</div>;
}

FoodProps.defaultProps = {
  food: 'pasta',
};
