import { Link } from 'react-router-dom';

export default function ProductItem({ prod }) {
  return (
    <div>
      {/* localhost:3000/product/1 경로로 이동 */}
      <Link to={'/product/' + prod.id}>상세페이지로 이동</Link>
      <div>상품명 : {prod.name}</div>
      <div>상세설명 : {prod.body}</div>
    </div>
  );
}
