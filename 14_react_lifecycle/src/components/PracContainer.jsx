// props.child -> app.js에서 <PracContainer><div>aa</div></PracContainer>
// 안의 컨텐츠 내용(<div>aa</div>)을 받아오기 위함

// export default function PracContainer({ props }) {
// const {children} =props; 와 같은 의미
export default function PracContainer({ children }) {
  return (
    <>
      <header>PostList📕</header>
      <main>{children}</main>
      <footer>footer</footer>
    </>
  );
}
