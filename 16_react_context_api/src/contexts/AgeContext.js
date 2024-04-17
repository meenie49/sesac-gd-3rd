import { createContext } from 'react';

// 값이 없다면 defaultAge를 써
const defaultAge = {
  age: 0,
  // 나이를 변경하는 age state의 setter 함수가 될 예정(에러 발생하지 말라고)
  setAge: () => {},
};

export const AgeContext = createContext(defaultAge);
