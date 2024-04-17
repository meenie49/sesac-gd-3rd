import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
// 여러개 context에서 가져오는 것

export default function Box() {
  // useContext() : context api를 사용해서 전역적으로 접근할 수 있는 context에 접근하겠다
  // 인자로 전달되는 ThemeContext : 작성되어 있는 context중 ThemeContext에 접근하겠다
  const { isDark, setIsDark } = useContext(ThemeContext);

  return (
    <>
      <h2>ThemeContext 사용</h2>
      {/* 빈 객체가 들어가 아무 스타일 안들어가도록 */}
      <div style={isDark ? { backgroundColor: '#000', color: '#fff' } : {}}>
        Theme : {isDark ? '다크 모드' : '라이트 모드'}
      </div>
      <button onClick={() => setIsDark(!isDark)}>테마 변경</button>
    </>
  );
}
