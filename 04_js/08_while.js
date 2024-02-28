// while 문
/* 
while (조건) {
    조건에 만족하는 동안 실행될 코드
}
*/
// 조건을 제어하는 구문이 없기 때문에 무한 루프에 빠지지 않도록 주의해서 사용
// 9 부터 4까지 콘솔에 찍기
let num = 9;
while (num >= 4) {
  console.log(num);
  num--; // <- 선언해 주지 않으면 무한루프 됨
  // num = num - 1
}

// while문 사용해 1부터 10까지 짝수 출력
num = 1;
while (num <= 10) {
  if (num % 2 === 0) {
    console.log(num);
    // num++; -> 계속 1값으로 무한루프
  }
  num++; // 그러므로 밖에 써줘야함
}

// 실습 1. while문 사용해 10부터 1까지 홀수 출력
num = 10;
while (num >= 1) {
  if (num % 2 === 1) {
    console.log(num);
  }
  num--;
}

// 무한루프 -> 조건식이 참이면 무한히 while문을 빠져나올 수 없음
let num2 = 0;
while (true) {
  console.log(num2);
  num2++;
  // break; // break없다면 무한루프 또는 빠져나가야 할 조건을 설정
  // num2가 11이 되는 순간 아래의 조건이 참이 되면서 while문 종료
  if (num2 > 10) {
    break;
  }
}

num2 = 0;
// confirm이 조건일때 참이면
while (confirm('계속 할까요?')) {
  // confirm의 확인 버튼은 true, 취소 버튼은 false를 반환
  // 취소 버튼 클릭 시 조건이 false가 되어 반복문 종료
  num2++;
  alert(`${num2}번째 alert 창`);
}

// 실습 2. 합계 구하기
// while문
// let num3 = 0
// let result = 0;
// let result1 = num3 * 2;
// let result2 = num3 * 5;
// while (num3 <= 100) {
//     if (num3 % 2 === 0 || num3 % 5 === 0) {
//         result1 = result1;
//         if (num3 % 2 === 0 && num3 % 5 === 0) {
//             result2 = result2;
//         }
//         result = result1 - result2;
//     }
// }
let pracNum = 0;
let pracSum2 = 0;

while (pracNum <= 100) {
  // 공배수는 한번만 계산됨
  if (pracNum % 2 === 0 || pracNum % 5 === 0) {
    pracSum2 += pracNum;
  }
  pracNum++;
}
console.log(pracSum2);
// for문
let pracSum = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0 || i % 5 === 0) {
    pracSum += i;
  }
}
console.log(pracSum);
// 실습 3. 13의 배수이면서 홀수 찾기 (입력받은 수)
// prompt로 받은 값은 string이기 때문에 숫자로 쓰려면 형변환을 해줘야함
// while문 break; 필요없으면 안써줘도됨
let num4 = Number(prompt('숫자를 입력해주세요.'));
while (num4 <= 10000) {
  if (num4 % 13 === 0 && num4 % 2 === 0) {
    console.log(num4);
  }
  // 증감 값은 보통 while문 마지막 괄호 전에 넣음
  num4++;
}
// for (let i = 1; i <= 10000; i++) {
//   if (i % 13 === 0 && i % 2 === 0) {
//     console.log(i);
//   }
// }
