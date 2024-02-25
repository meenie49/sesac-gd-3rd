console.log('connected!');

// 대입 연산자
// =
// 변수에 값을 할당할 때 사용하는 연산자
let a = 1;
const b = '1';

// 비교 연산자
// ==, !=
// 피연산자의 값이 같은지 비교
// 타입이 달라도 괜찮음 -> 값만 비교하기 때문
console.log(1 == 1); /*  true */
console.log(1 == 2); // false
console.log(1 == '1'); // true -> 값이 같기 때문
console.log(1 != 1); // false -> 1과 1이 같지 않다 -> 거짓 -> false
console.log(1 != 2); // true
console.log(1 != '1'); // false -> 값이 같기 때문
// =, ==, !=   <- 연산자
// a == b   <- a,b는 피연산자

// ===, !==
// 피연산자의 값과 타입을 모두 비교
// 엄격한 동등 연산자
console.log('---------------------');
console.log(1 === 1); /*  true */
console.log(1 === 2); // false
console.log(1 === '1'); // false -> 숫자 1과 문자 1은 다른 타입
console.log(1 !== 1); // false -> 1과 1이 같지 않다 -> 거짓
console.log(1 !== 2); // true -> 숫자 1과 숫자 2는 같지 않다
console.log(1 !== '1'); // true -> 숫자 1과 문자 1은 같지 않다

// 크기 비교
// >= , > , <, <=
console.log('---------------------');
console.log(2 > 1); // 2는 1보다 크다 -> true
console.log(1 >= 1); // 1은 1보다 크거나 같다 -> true
console.log(2 < 1); // 2는 1보다 작다 -> false
console.log(1 <= 1); // 1은 1보다 작거나 같다 -> true

// 산술 연산자
// +, -, *, /, %(나머지), **(제곱)
console.log('---------------------');
console.log(1 + 2); // 3
console.log(1 - 2); // -1
console.log(1 * 2); // 2
// 나누기 연산자는 몫을 출력하며 소수점 값을 갖는다.
console.log(1 / 2); // 0.5
console.log(5 / 7);
// 나머지 연산자 이면 음수랑 소수 표시 안됨
// 1은 2로 못나누니까 1이 출력이 된다 -> 즉 분자가 그대로 내려오게됨
console.log(1 % 2); // 1
console.log(5 % 3); // 2
console.log(1 ** 2); // 1

// 논리 연산자
// !, &&, ||(shift + \)
console.log(!true); // false
console.log(!false); // true
console.log(!!true); // -> true -> !때문에 false -> !때문에 true -> true
console.log(!!false); // false
console.log(true && true); // true
console.log(1 < 5 && 1 < 3); // true
console.log(1 > 5 && 1 < 3); // false
console.log(true || true); // true
console.log(true || false); // true
console.log(1 > 5 || 1 < 3); // true
console.log(1 > 5 || 1 > 3 || false); // false

// 연산자 응용
console.log(!(2 > 1));
console.log(1 > 5 && -2 < 3); // false
console.log((1 > 5 && -2 < 3) || 5 < 3); // false

// Quiz
// 코드 결과 작성
console.log(3 <= 1); // false
console.log(7 == '7'); // true
console.log(-10 >= -11); // true

// ''로 감싸면 문자가됨
const aa = 'a';
console.log('원하는 텍스트 콘솔창에 출력');

console.log(aa, '쉼표'); // 자동으로 띄어쓰기 됨
console.log(aa, '+ 연산자'); // 전부 연결해서 출력됨

const name = '정민';
console.log('안녕 나는', name, '이야');
console.log('안녕 나는' + name + '이야');
console.log(`안녕 나는 ${name}야`);
