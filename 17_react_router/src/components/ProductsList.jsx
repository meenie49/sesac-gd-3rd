import ProductItem from './ProductItem';

// 구조분해할당하기 위해 {} 에 넣어서 인자 전달
export default function ProductsList({ prodData }) {
  return (
    <>
      {/* 체크박스, 페이지네이션 */}
      {prodData.map((prod) => {
        return <ProductItem key={prod.id} prod={prod} />;
      })}
    </>
  );
}
