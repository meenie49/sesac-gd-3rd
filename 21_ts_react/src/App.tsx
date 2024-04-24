import EventObj from './components/EventObj';
import PropsTypes from './components/PropsTypes';
import UseRef from './components/UseRef';
import Usestate from './components/Usestate';

function App() {
  return (
    <div className='App'>
      <PropsTypes name='meenie' age={26} />
      <PropsTypes name='meenie' />
      {/* ctrl + . 하면 불러오기 가능 */}
      <Usestate />
      <UseRef />
      <EventObj />
    </div>
  );
}

export default App;
