// console.log()는 log를 찍는다라는 의미
// 둘다 경고창인데 alert는 확인만 , confirm()는 확인 취소 버튼 까지 , console은 f12의 console창에서 확인가능
// 바로 출력하고 싶으면""로 감싸주기
console.log('connected!');
/* 변수에 값을 출력하고 싶을때는 ()만 */
console.log(varName);
// ; 은 문장의 끝이라는 뜻(문장의 .와 같음)

// 변수 선언하고 사용하기
/*
var 키워드
1. 변수 선언 -> 값 할당
2. 변수 선언 값 할당을 동시에
*/
// 변수 선언
var varName; /* undefined */
// 변수 할당
varName = 'JEONGMIN';
console.log('varName'); /* JEONGMIN 출력 */
// 변수 재할당
varName = 'MINI'; /* varName 변수의 값이 "jeongmin" -> "MINI" 로 변경 */
console.log('varName'); /* MINI 출력 */
// 변수 선언과 값 할당을 동시에
var varName2 = 'lily';

// var의 이상한 점
// 1. 변수를 동일한 이름으로 재선언 할 수 있음
var varName2 = 'lily';
console.log(varName); // lily 출력

// 2. 변수를 선언하기 전 값을 할당할 수 있음
// 장점같아 보일 수 있으나, 유지보수할 때 최악임
aa = 123;
console.log(aa);

/* 
let 키워드
1. 변수 선언 -> 값 할당
2. 변수 선언과 값 할당을 동시에
*/
// 변수 선언
let letName;
// 값 할당
letName = '홍길동';
console.log(letName); // 홍길동 출력

// 변수 선언과 값 할당을 동시에
let letName2 = '심청이';
console.log(letName2); // 심청이 출력

// let letName2 = "심봉사"; /* error: 중복 선언 불가 */
// console.log(letName2);

letName2 = '심봉사'; /* 값 재할당 가능 */
console.log(letName2);

/* 
const 키워드
- 반드시 변수 선언과 값 할당이 동시에 이뤄져야함
- 변수 재선언, 재할당 불가능
- 사용처 : 변하지 않는 값을 변수에 저장할 때 사용
*/
//const constName; // error: 선언과 동시에 값 할당 필요
const constName = 'JEONGMIN';
console.log(constName); //JEONGMIN

/* 
CSS 참조방식
내장방식이나 링크방식 사용 -> <script></script> 사용

정리
- var: es6 이전에 사용되던 변수 선언 키워드 -> 사용 지양하자
- let: 변수 선언 키워드
    - 변수 선언 -> 값 할당
    - 변수 재선언은 불가능
    - 변수 재할당은 가능 (값을 수정할 수 있음)
- const: 상수 선언 키워드 ( 변수는 바뀔수 있는 값, 상수는 바뀌지 않는 값 )
    - 상수: 변하지 않는 값
    - 변수 선언과 값 할당을 동시에 해야 함 (상수지만 변수라고 칭하자)
    - 재선언, 재할당 불가능

식별자 규칙
: 이름을 지정할 때 사용하는 단어 (변수명,함수명 등)
- 키워드 사용 불가
    - 키워드(예약어): 특별한 역할을 이미 하고 있는 단어
        ex ) var, let, const, if, function, for, return, ...
    - 숫자로 시작 불가
    - 특수문자는 _ , $ 만 허용
    - 공백 문자 사용 불가

- 사용 가능한 식별자
    a, name, name1, myName, name$, my_name 등
- 사용 불가능한 식별자
    var, let, const, 1st, my Name, my-name 등
*/
