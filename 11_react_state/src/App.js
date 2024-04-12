import ClassState from './components/ClassState';
import FuncState from './components/FuncState';
import Prac1 from './components/Prac1';
import CharacterContainer from './components/CharacterContainer';
import CharacterInfo from './components/CharacterInfo';
import { useState } from 'react';

function App() {
  // 브라우저에 보여주는 부분이 return문 다음
  const [show, setShow] = useState(false);

  return (
    <div className='App'>
      <ClassState />
      <FuncState />
      <Prac1 />
      <CharacterContainer />
      <CharacterInfo />
      {/* 처음에는 setShow가 false이나 클릭을 하면 true로 보이게됨*/}
      <button onClick={() => setShow(true)}>모달 보이기</button>
      {show && <Modal msg='확인하시겠습니까?' setShow={setShow} />}
      {show && (
        <Modal msg='확인하시겠습니까?IN' isInput={true} setShow={setShow} />
      )}
      {show && (
        <Modal
          msg='확인하시겠습니까?Can'
          isCancelBtn={true}
          setShow={setShow}
        />
      )}
    </div>
  );
}

export default App;
