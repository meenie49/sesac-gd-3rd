/* 
JS 표준 내장 객체
자바 스크립트가 기본적으로 가지고 있는 객체
String, Number, Array, Date, Math, ...
*/

// 1. Date 객체
// 시간, 날짜에 대한 정보를 얻기 위해 사용

// 현재 날짜
let now = new Date();
console.log(now); // Mon Mar 04 2024 11:48:34 GMT+0900 (한국 표준시)

// 1000ms === 1s
// 1000ms * 3600 = 1000ms * 60 * 60 === 1s * 60 * 60 = 1h
// 1000ms * 3600 * 24 === 24h

// 1970년 1월 1일 기준으로 해당 ms만큼 지난 시간
let Jan_02_1970 = new Date(1000 * 3600 * 24);
console.log(Jan_02_1970); // Fri Jan 02 1970 09:00:00 GMT+0900 (한국 표준시)

// 원하는 날짜 뽑아내기
// new Date(year, month, date, hour, minutes, seconds, ms)
// year: 4자리 입력해주기
// month: 0(1월) ~ 11(12월)
// date: 1 ~ 31 <- date 값 작성 안하면 1로 처리
// hour, minutes, seconds, ms: 값이 없으면 0으로 처리
console.log(new Date(2021, 2, 15, 18, 30, 15));

// Date 객체 메서드
// 연, 월, 일 등의 값을 얻을 수 있음
console.log(now.getFullYear()); // 연도 (4자리)
console.log(now.getFullYear() + '년'); // 연도 (4자리)
console.log(now.getMonth()); // 월 (0 ~ 11)
console.log(now.getDate()); // 일
console.log(now.getHours()); // 시
console.log(now.getMinutes()); // 분
console.log(now.getSeconds()); // 초
console.log(now.getMilliseconds()); // 밀리초
console.log(now.getDay()); // 요일 (0 ~ 6) 일요일: 0 -> 일 ~ 토(6)

// 실습 1. Date 객체 사용해 오늘 요일 얻기
console.log(now.getDate());
// 실습 2. switch-case문 / if문으로 오늘 날짜를 기준으로 평일인지 주말인지 구분하기
// switch today {
//     case 1, 2, 3, 4, 5:
//         console.log('평일')
// } default {
//     console.log('주말')
// }
// 1. switch문
// 0(일) ~ 6(토) 까지의 값
function checkWeekend() {
  switch (now.getDay()) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      return '평일';
    // break; // return 작성 시 break 키워드 작성하지 않아도 알아서 해당 스코프 빠져나감
    case 0:
    case 6:
      return '주말';
    // break;
    default:
      return '알수없음';
    // break;
  }
}
console.log(checkWeekend()); // checkWeekend 함수의 반환값을 콘솔에 출력

// 2. if문
if (
  now.getDay() === 1 ||
  now.getDay() === 2 ||
  now.getDay() === 3 ||
  now.getDay() === 4 ||
  now.getDay() === 5
) {
  console.log('평일');
} else {
  console.log('주말');
}

// 3. 삼항연산자
const todayStatus =
  now.getDay() === 0 || now.getDay() === 6
    ? console.log('주말')
    : console.log('평일');
// console(todayStatus);

// 속성
console.log(Math.E); // 자연로그
console.log(Math.PI); // 파이
console.log(Math.SQRT2); // 2의 제곱근

// 메서드
console.log(Math.min(10, 2, 6, -50)); // 인자로 전달받은 값 중에서 최소값을 구해줌
console.log(Math.max(10, 2, 6, -50)); // 인자로 전달받은 값 중에서 최대값을 구해줌
console.log(Math.random()); // 인자를 받지 않고, 0 <= x < 1 의 난수를 생성해줌(소수점으로 생성)
console.log(Math.round(3.8)); // 4 -> 소수를 반올림하여 정수로 변환
console.log(Math.floor(3.8)); // 3 -> 소수를 내림하여 정수로 변환
console.log(Math.ceil(3.8)); // 소수를 올림하여 정수로 변환

// Math.random() 응용
// 곱하는 수: 원하는 범위 크기
// 0 ~ 9 사이의 난수 생성
console.log(Math.floor(Math.random() * 10));

// 0 ~ 10 사이의 난수 생성
console.log(Math.floor(Math.random() * 10));

// 1 ~ 100 사이의 난수 생성
console.log(Math.floor(Math.random() * 100) + 1);

// 20 ~ 22 사이의 난수 생성
console.log(Math.floor(Math.random() * 3) + 20);
