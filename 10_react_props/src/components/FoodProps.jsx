import React from 'react';
const StyledFood = styled.food`
  color: red;
`;
export default function FoodProps({ food }) {
  return (
    <div>
      저의 최애 음식은 : <StyledFood>{food}</StyledFood> 입니다.
    </div>
  );
}

FoodProps.defaultProps = {
  food: 'pasta',
};
