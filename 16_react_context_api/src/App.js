import { useState } from 'react';
import { ThemeContext } from './contexts/ThemeContext';
import Box from './components/Box';
import Profile from './components/Profile';
import UserProvider from './components/provider/UserProvider';
import AgeProvider from './components/provider/AgeProvider';

// default키워드 없이 사용했다면 {} 사용해서 가져옴
// default가 붙으면 대표 컴포넌트라는 뜻
// 내보내는 거 여러개 가능 -> 객체 형태로 내보내게 됨 -> {}안에 감싸서 가져와야함

// 테마 관리할때 리렌더링 필요

function App() {
  // 누군가 설정해야 다크모드를 가질수있게 초기값은 false로 설정
  const [isDark, setIsDark] = useState(false);

  return (
    <div className='App'>
      <h1>context api</h1>
      <div>
        전역적으로 접근할 수 있는 값이 있을 때 접근을 쉽게 하기 위해 사용
      </div>

      {/* key랑 value값을 전달해줌 만약 키와 valuer값이 동일하면 이름만 작성해줘도됨 */}
      {/* {isDark: isDark, setIsDark: setIsDark} -> { isDark, setIsDark } */}
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        {/* 이 내부에 작성된 컴포넌트만 ThemeContext가 관리하는 값에 접근할 수 있음 */}
        <Box />
      </ThemeContext.Provider>
      {/*
      </ThemeContext.Provider>내부에 <Box />가 작성되어 있지 않으면
      해당 context의 value에 접근해 사용할 수 없음
      isDark 사용하는 곳 부터 에러 발생
      context api 사용해서 전역적으로 관리하는 값에 접근하는 컴포넌트는
      재사용성이 떨어짐 -> context api 사용하기 전 해당 사항 고려 필요
      */}

      {/* 여러개의 context 사용 */}
      <AgeProvider>
        <UserProvider>
          <Profile />
        </UserProvider>
      </AgeProvider>
    </div>
  );
}

export default App;
