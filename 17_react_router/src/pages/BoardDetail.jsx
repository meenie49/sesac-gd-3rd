import { useNavigate } from 'react-router-dom';

export default function BoardDetail() {
  const navigate = useNavigate();
  return (
    <>
      {/* 이전 주소로 감 */}
      <button onClick={() => navigate(-1)}>뒤로가기</button>
      <button onClick={() => navigate('/board')}>게시판으로</button>
      <button onClick={() => navigate('/')}>홈으로</button>
      <h1>여기는 Board Detail Page 입니다!</h1>
    </>
  );
}
