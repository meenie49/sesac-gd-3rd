import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        {/* 경로를 바꿀 때는 Link태그 파일 불러올link태그 */}
        <Link to='/'>홈으로</Link>
        <br />
        <Link to='board'>게시판</Link>
        <br />
        <Link to='profile'>마이페이지</Link>
      </nav>
    </header>
  );
}
