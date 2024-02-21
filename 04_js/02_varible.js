// console.log()는 log를 찍는다라는 의미
// 바로 출력하고 싶으면""로 감싸주기
console.log("connected!");
/* 변수에 값을 출력하고 싶을때는 ()만 */
console.log(varName);

// 변수 선언하고 사용하기
/*
var 키워드
1. 변수 선언 -> 값 할당
2. 변수 선언 값 할당을 동시에
*/
// 변수 선언
var varName; /* undefined */
// 변수 할당
varName = "JEONGMIN";
console.log("varName"); /* JEONGMIN 출력 */
// 변수 재할당
varName = "MINI"; /* varName 변수의 값이 "jeongmin" -> "MINI" 로 변경 */
console.log("varName"); /* MINI 출력 */
// 변수 선언과 값 할당을 동시에
var varName2 = "lily";
console.log(varName);

// var의 이상한 점
// 1. 변수를 동일한 이름으로 재선언 할 수 있음
var varName2 = "lily";
console.log(varName);

// 2. 변수를 선언하기 전 값을 할당할 수 있음
// 잠점같아 보일 수 있으나, 유지보수할 때 최악임
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
letName = "홍길동";
console.log(letName); // 홍길동 출력

// 변수 선언과 값 할당을 동시에
let letName2 = "심청이";
console.log(letName2); // 심청이 출력

// let letName2 = "심봉사"; /* error: 중복 선언 불가 */
// console.log(letName2);

letName2 = "심봉사";
console.log(letName2);
