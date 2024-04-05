// 생성하고 원래 있는 import를 지워주자!
export default function Prac1() {
  const helloStr = 'Hello, this is first practice';

  return (
    <div
      style={{ marginTop: 32, backgroundColor: 'pink' }}
      onClick={() => {
        alert('클릭!');
      }}
    >
      {helloStr}
    </div>
  );
}
