interface Props {
  name: string;
  age?: number; // age props를 옵셔널하게 받으려면 interface에서 ?선언해줘야함
}
// 리턴값이 Props가 아니고 인자들의 타입이 Props이기 때문에 {}뒤에 선언
// 구조분해할당
export default function PropsTypes({ name, age }: Props) {
  return (
    <>
      <h2>props로 전달받은 데이터의 타입 interface로 지정하기</h2>
      <div>name: {name}</div>
      {/* 삼항 연산자 또는 &&연산자 */}
      {/* age가 true면 <div>age: {age}</div> */}
      {age && <div>age: {age}</div>}
    </>
  );
}

// export default function PropsTypes(props: Props) {
//   const { name, age }: Props = props;
//   return (
//     <>
//       <h2>props로 전달받은 데이터의 타입 interface로 지정하기</h2>
//       <div>name: {name}</div>
//       <div>age: {age}</div>
//     </>
//   );
// }

// export default function PropsTypes(props: Props) {
//   const name = props.name;
//   const age = props.age;
//   return (
//     <>
//       <h2>props로 전달받은 데이터의 타입 interface로 지정하기</h2>
//       <div>name: {name}</div>
//       <div>age: {age}</div>
//     </>
//   );
// }
