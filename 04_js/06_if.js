console.log('connected!');

/* 
조건문
- 어떤 조건에 따라 논리 구조를 나눔
- 각 조건을 '분기'라고 함
- 조건에 따라 서로 다른 문장을 실행
*/

/* if문의 기본 구조
if(조건) {
    조건이 참인 경우 실행될 코드
}
*/

// 조건이 1개인 경우
// 만약 조건이 false라면 해당 코드 블럭이 실행되지 않고 넘어감
// 1.
if (5 > 3) {
  console.log('5는 3보다 큽니다.');
}
// 2.
if (5 > 7) {
  console.log('조건이 false이므로 이 코드블럭은 실행되지 않고 넘어감.');
}

// let number1 = Number(prompt('숫자를 입력해주세요.'));

// if else 문

// 입력 받은 수가 10보다 클 때 if 다음의 코드블럭을 실행
// 입력 받은 수가 10보다 작거나 같을 때 else문의 코드블럭을 실행
/* 
if (number1 > 10) {
  console.log('입력받은 수가 10보다 큽니다.');
} else {
    console.log('입력받은 수가 10보다 작습니다.');
} 
*/

// else if 문

// if else문에 다른 조건을 추가하는 형식
// else문은 하나만 사용 가능. 하지만 else if문은 여러개 사용 가능
// 여러개의 분기로 나누고 싶으면 else if를 여러개 사용해서 조건을 많이 작성할 수 있음
let number = 8;
if (number > 10) {
  console.log('입력받은 수가 10보다 큽니다.');
} else if (number === 10) {
  console.log('입력받은 수가 10입니다.');
} else {
  console.log('입력받은 수가 10보다 작습니다.');
}

console.clear(); // <- 위의 모든 콘솔 없애기

// 성적 계산하는 프로그램
// 조건이 true가 나온다면 해당 코드블럭을 실행하고, 나머지 조건문은 실행되지 않음
// 위의 조건을 통과하고 다음 조건문을 실행하는 경우 위의 조건들이 모두 false였음을 잊지말기!
// 그러므로 위의 조건과 겹치는 조건은 안써줘도 됨

// prompt로 입력받은 값은 문자로 해석되어 숫자로 바꿔주려면 Number()로 바꿔주기
const score = Number(prompt('성적을 입력해주세요.'));
if (score > 100) {
  // 100점보다 큰 점수는 없음
  console.log('점수가 잘못 입력되었습니다.');
} else if (90 <= score) {
  // score가 100 ~ 90 일때 실행
  console.log('A');
} else if (80 <= score) {
  // score가 80 ~ 89 일때 실행
  console.log('B');
} else if (70 <= score) {
  // score가 70 ~ 79 일때 실행
  console.log('C');
} else if (60 <= score) {
  // score가 60 ~ 69 일때 실행
  console.log('D');
} else {
  // score가 59이하 일때 실행
  console.log('F');
}

// 실습 연령대별 단어 출력하기
// if문 값을 가장 큰 조건을 적어주는게 좋음(가장 구체적)
console.log('---------------------------------------------------');
let age = Number(prompt('나이를 입력해주세요.'));

if (age >= 20) {
  console.log('성인');
} else if (17 <= age) {
  console.log('고등학생');
} else if (14 <= age) {
  console.log('중학생');
} else if (8 <= age) {
  console.log('초등학생');
} else if (0 <= age) {
  console.log('유아');
} else {
  console.log('음수값이 들어왔습니다.');
}
// 다른 방법
if (age < 0) {
  // age가 0보다 크거나 같으면서 8보다 작은 경우
  console.log('음수 값이 들어왔습니다.');
} else if (age < 8) {
  console.log('유아');
} else if (age < 14) {
  console.log('초등학생');
} else if (age < 17) {
  console.log('중학생');
} else if (age < 20) {
  console.log('고등학생');
} else if (age < 150) {
  console.log('성인');
} else {
  console.log('나이로 들어올 수 없는 값이 입력되었습니다.');
}
// 추가
/*
if(age >= 150 && age < 0) {
    console.log('나이로 들어올 수 없는 값이 입력되었습니다.')
}
*/
console.log('---------------------------------------------------');
// 조건문 중첩하기
// 조건문 안에 조건문 작성 가능
// 보통 조건문은 함수안에 구현함
const userId = 'user01';
const userPw = '1234qwer';

// 조건문 함수로 구현
function loginUser() {
  const inputId = prompt('아이디를 입력해주세요.');
  const inputPw = prompt('비밀번호를 입력해주세요.');

  // if문이 중첩되지 않고 밖에 있으면 Id가 틀려야 Pw를 확인함
  if (userId === inputId) {
    if (userPw === inputPw) {
      console.log('로그인 성공!');
      alert(`안녕하세요, ${inputId}님`);
    } else {
      console.log('로그인 실패');
      alert('비밀번호를 다시 입력해주세요.');
    }
  } else if (inputId === '') {
    alert('아이디가 입력되지 않았습니다.');
  } else {
    alert('아이디를 다시 입력해주세요.');
  }
}

// 호출
// 매개변수 없었으니 괄호만
// 호출하지 않으면 함수가 표시안됨
loginUser();

// 함수 설명 - 함수 바로 위에 써주기
// /** 치면 js doc이라고 나옴 -> 재사용성 높임
// https://ilimes.github.io/javascript/post29/
/**
 * 아이디와 비밀번호를 확인해 적절한 알림창을 띄움
 */

//  switch문
// switch의 괄호 안과 case의 조건으로 비교식이 들어갈 수 없음
// 부등호 안씀
// default가 나머지조건일 때를 뜻함 즉 else와 같음
// 여러조건이 같은 console일경우 나열해서 쓰면됨 ex. case 5: case 4:
// 값이 정확할 때는 swictch문을 쓰나 보통 if문을 더 많이 씀

// 1. 변수 x의 값과 첫 번째 case문의 값 3을 비교
// 2. 두 값이 동일하다면 : (콜론) 뒤의 코드가 실행
// 3. break문을 통해 해당 스코프에서 빠져나옴
// 4. 만약 첫 번째 case문의 값과 x가 다르다면 다음 case문의 값과 비교
// 5. 모든 case문의 값과 x의 값이 다르다면 default문 다음의 코드가 실행

// break는 필수 작성
// default문 생략 가능
let x = 305;

// switch문의 괄호 안에는 조건이 아닌 값이 들어감
// case에도 조건이 아닌 값을 작성
// switch (userType) {}
// case 'admin':
// console.log('관리자입니다.')
// break;
switch (x) {
  case 3:
    console.log('x는 3입니다.');
    // switch문 빠져나갈 때 -> break;
    // break 안쓰면 case3를 실행하고 싶을때 case4까지 모두 실행됨
    // 해당 스코프를 빠져나가지 못하는 것
    // 원하는 코드가 실행된 이후 꼭 break 사용해 스코프를 빠져나올 수 있도록 작성
    // break 이후에 작성한 코드는 실행되지 안됨
    break;
  case 4:
    console.log('x는 4입니다.');
    break;
  case 5:
    console.log('x는 5입니다.');
    break;
  default:
    console.log('x는 3,4,5가 아닌 다른 값입니다.');
}

// if문으로 작성한 성적 계산하는 프로그램 switch문 사용하도록 수정
/* 
switch(number) {
    case 100:
        console.log('A')
        break;
    ...
}
*/
// 위처럼 작성하는 경우 특정값이 아니면 원하는 동작을 하지 않음
// 이럴때 점수를 10으로 나눈 몫을 찾아와 number로 전달, case 값도 변경
number = 100;
switch (parseInt(number / 10)) {
  case 10:
  case 9:
    console.log('A');
    break;
  case 8:
    console.log('B');
    break;
  case 7:
    console.log('C');
    break;
  case 6:
    console.log('D');
    break;
  default:
    console.log('F');
}

// 삼항 연산자
// 조건식 ? 조건이 참 일때 실행될 코드 : 조건이 거짓일 때 실행될 코드
// 중첩 가능하나

// 홀수, 짝수 판별하기
// 홀짝은 보통 나머지 연산자 씀
let num = 5;
if (num % 2 === 1) {
  console.log('홀수');
} else {
  console.log('짝수');
}

// 삼항연산자로 변환
let result = num % 2 === 1 ? '홀수' : '짝수';
console.log(result);

let fruit = 'banana';
console.log(fruit === 'banana' ? '바나나' : '바나나 아니에요.');

let isLoggedIn = true;
isLoggedIn === true
  ? console.log('로그인 유저입니다')
  : console.log('로그인하지 않은 유저입니다.');

// 중첩해서 사용하면 이해하기 어렵기 때문에 ifelse문을 사용
isLoggedIn === true
  ? number > 10
    ? '로그인한 유저인데, number 값이 10보다 큼'
    : '로그인한 유저인데, number 값이 10보다 작음'
  : '로그인하지 않은 유저';

// 실습 오전 / 오후 출력하기
// new Date().getHours() <- 날짜의 시간만 뽑아줌
let now = new Date().getHours();
12 < now < 24 ? console.log('오후') : console.log('오전');
// console.log(now < 12 ? '오전' : '오후');
