// 함수 내보내는 방법
// 1. 함수 앞에 export 키워드 작성

function consoleName(name) {
  console.log(`당신의 이름은 ${name}`);
}
// export function consoleName2(name) {
//   console.log(`당신의 이름은 ${name}222`);
// }
export default function consoleNameMain(name) {
  console.log(`당신의 이름은 ${name} main 함수`);
}
export { consoleName };
