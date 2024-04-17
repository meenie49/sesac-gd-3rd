import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
// vscode 다시 시작했더니 됨
import Test from './components/Test';
import Board from './pages/Board';
import BoardDetail from './pages/BoardDetail';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import ProductDetail from './pages/ProductDetail';
import PhotoPage from './pages/PhotoPage';

function App() {
  return (
    <div className='App'>
      {/*      
      라우팅 연습
      <h1>routing!</h1>
      <Routes>
        <Route path='/test' element={<Test />} />
      </Routes> 
      */}

      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/board' element={<Board />} />
        <Route path='/board/1' element={<BoardDetail />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<NotFound />} />
      </Routes> */}

      <Header />

      {/*  */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/products/1' element={<ProductDetail />} />
        <Route path='/photos' element={<PhotoPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
