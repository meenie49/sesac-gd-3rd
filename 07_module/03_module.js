// default 키워드 사용해 내보내기
// 제일 마지막에 export 하기

// function sayStatus(status) {
//   console.log(`now I'm ${status}.`);
// }
// js 한 파일 내에서 default는 한번만 가능
// export default sayStatus;

// 바로 export 하기
export default function sayStatus2(status) {
  console.log(`now I'm not ${status}`);
}
