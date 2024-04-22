// store 안의 index.js : 여러 개의 리듀서를 하나로 묶어주고 관리하기
import { combineReducers } from '@reduxjs/toolkit';
// import { countReducer } from './modules/countReducer';
import { isLoggedinReducer } from './modules/loginReducer';
import { bankReducer } from './modules/bankReducer';
import { countReducer } from './modules/countReducer';

// combineReducers : 여러 개의 리듀서를 하나로 묶어줌
// bankReducer는 앞으로 money라는 이름으로 관리될 것이다
const rootReducer = combineReducers({
  count: countReducer,
  isLoggedIn: isLoggedinReducer,
  money: bankReducer,
});

export default rootReducer;
