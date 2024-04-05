import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionComponent from './components/FunctionComponent';
import Prac1 from './components/Prac1';

// 주석 사용
// Ctrl + . :
function App() {
  return (
    <div className='App'>
      {/* 불러와 사용하는 방법 1 */}
      <ClassComponent />
      {/* 불러와 사용하는 방법 2 */}
      <ClassComponent></ClassComponent>
      FunctionComponent
      {/* 함수형 컴포넌트 */}
      <FunctionComponent />
      {/* Prac1 */}
      <Prac1></Prac1>
    </div>
  );
}

export default App;
