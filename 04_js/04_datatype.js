// 기본형(Primitive type)
// 1. String
// - 텍스트 정보
// - 따옴표로 감싸야 함
// - 숫자, 특수문자, true, false 모두 따옴표 안에 있으면 문자열임

const myName = '신데렐라';
const email = 'glassshose@google.com';
const gender = 'female';
console.log(myName);
console.log(email);
console.log(gender);

// 문자와 변수를 동시에 사용하기
const aa = 'a';
console.log('aa');

console.log('원하는 텍스트 콘솔창에 출력');

console.log(aa, '쉼표'); // 자동으로 띄어쓰기 됨
console.log(aa, '+ 연산자'); // 전부 연결해서 출력됨

const name = '정민';
console.log('안녕 나는', name, '이야');
console.log('안녕 나는' + name + '이야');

// 템플릿 리터럴
// 문자열 내 변수를 간결하게 표현
// 백틱(``) 기호와 달러, 중괄호 ${} 사용
console.log(`안녕 나는 ${name}이야`);
const printHello = '안녕 나는 ${name}이야'; // -> 문자열로 저장됨

// 2. number
// 숫자 (정수, 소수)
// 연산 가능
let number = 123;
let opacity = 0.7;
let add = 1 + 2;

// 3. boolean
// true, false 중에서 하나의 값을 가지는 논리 요소
let checked = true;
let isShow = false;

// 4. undefined
// 값도 없고 타입도 지정되어 있지 않은 상태
let undef;
console.log(undef); //undefined
// 중괄호에 감싸진게 오브젝트 abc가 키 123이 value
let obj = {
  abc: 123,
};
console.log(obj.abc); //123
console.log(obj.efg); //undefined -> 없는 것 출력하면 undefined

// 5. null
// 빈 값. null 타입으로 타입 존재하지만 값이 없음
// 값이 없다는 것을 의도적으로 명시할 때 사용 -> 개발자가 직접 null 값을 할당
let empty = null;
console.log(empty);

// 6. array - 배열
// 순서가 있는 데이터의 묶음
let fruits = ['apple', 'banana', 'strawberry', 'grape'];
let fruits2 = new Array('apple', 'banana', 'strawberry', 'grape');
console.log(fruits);
// 배열이름[몇번째]
console.log(fruits[2]); // 2번 인덱스 요소를 뽑아 콘솔에 찍기

// 다양한 타입으로 배열 가능
let arr = [1, 'str', false, null, undefined];

// Quiz. 아래의 배열에서 "아이스크림" 콘솔에 찍기
const letters = [
  '사', //0
  '스', //1
  '자', //2
  '크', //3
  '진', //4
  '안', //5
  '리', //6
  '이', //7
  '가', //8
  '수', //9
  '림', //10
  '나', //11
  '아', //12
  '으', //13
  '차', //14
  '운', //15
];

console.log(letters[12] + letters[7] + letters[1] + letters[3] + letters[10]);

// 배열 응용
// 다차원 배열
// 배열 안에 배열이 있는 형태
const korean = [
  ['가', '갸', '거', '겨'],
  ['나', '냐', '너', '녀'],
  ['다', '댜', '더', '뎌'],
];

console.log(korean[0]);
console.log(korean[1]);
console.log(korean[2]);
// 인덱스를 연결해 작성
console.log(korean[1][1]);

// Quiz. 아래의 배열에서 "아이스크림" 콘솔에 찍기
const letters2 = [
  ['사', '스', '자', '크'],
  ['진', '안', '리', '이'],
  ['가', '수', '림', '나'],
  ['아', '으', '차', '운'],
];

console.log(
  letters2[3][0] +
    letters2[1][3] +
    letters2[0][1] +
    letters2[0][3] +
    letters2[2][2]
);

// 7. object - 객체
// 배열은 순서가 있는 반면에 객체는 키-값 형태로 작성
// 여러개 쓰려면 배열로
// 키:value
// { key1: value1, key2: value2, ...}
let cat = {
  name: '홍제리',
  age: 1,
  isCute: true,
  mew: function () {
    return '냐옹';
  },
};

// 점 표기법 (변수이름.키)
console.log(cat.name);
console.log(cat.age);
console.log(cat.mew);

// 대괄호 사용 (변수이름['키'])
console.log(cat['name']); // 홍제리
console.log(cat['age']); // 1

// 변경, 추가 가능
cat.like = 'Meenie';
console.log(cat);
cat.like = '제리';
console.log(cat);

/* 
JS의 자료형 -> 데이터 타입
- 기본형 (Primitive)
  - string
  - number
  - boolean
  - null
  - undefined
- 객체 (Object)
  - array(배열) - 순서있는 ['']
  - object(객체) -> 키와 값을 쌍으로 가지고 중괄호{} 안에 감싸여 작성된 것 , 순서없는 {키:value}
*/

// JS의 이상한 자동 형변환
let a = '3';
let b = 2;
let c = '10';

// 문자 + 문자
console.log(a + c); // '310' -> 문자 나열
console.log(c - a); // 7 -> 숫자가 됨
console.log(a * c); // 30 -> 숫자가 됨
console.log(c / a); // 계산됨

// 숫자 + 문자
console.log(b + a); //'23' -> 숫자가 문자열로 변환되어 문자 나열
console.log(b - a); //'-1' -> 문자가 숫자로 변환되어 계산됨 나머지 * -, /도 동일

// 자기소개
// function , 객체
// const 변수이름 = {}
const me = {
  myname: 'Jeongmin',
  mbti: 'ISFJ',
  capcolor: 'blue',
  notebookcolor: 'silver',
  hobby: ['youtube', 'netflix'],
};
console.log(me);

//  자료형 확인
// typeof
// 피연산자의 데이터 타입을 문자열로 변환
console.log('----------------------------');
console.log(typeof '문자열'); // string
console.log(typeof 234); // 234
console.log(typeof {}); // object
console.log(typeof []); // object
/* 숫자아닌걸 숫자 취급해놓아서 */
console.log(typeof NaN); // NaN: Not a Number -> number
let und;
console.log(typeof und); // undefined

prompt('값을 입력해주세요.');

// 형 변환
console.log('--------------------------');
// 1. ? -> 문자
let str1 = true;
let str2 = 132;
let str3 = null;
console.log(String(str1));
console.log(typeof String(str1));
console.log(String(str2)); //132
console.log(String(str3)); //null
console.log(str1.toString()); //true
console.log(str2.toString()); //132

// 2. ? -> 숫자
let n1 = true;
let n2 = false;
let n3 = '12345';
let n4 = '123.9';

console.log(Number(n1)); // 1 -> true
console.log(Number(n2)); // 0 -> false

console.log(Number(n3)); // 12345
console.log(Number(n4)); //123.9
console.log(parseInt(n3)); //12345
console.log(parseInt(n4)); //123 -> 소수점 버림
console.log(parseFloat(n4)); // 123.9 -> 소수점 남음

let mathScore = '77';
let engScore = '88';
let avgScore;
avgScore = (Number(mathScore) + Number(engScore)) / 2;
console.log(avgScore);

//prompt 사용 (사용자에게 값을 입력받아 활용하는 예시)
//prompt로 입력받은 값은 문자열로 저장되기 때문에 숫자로 형변환 함
let mathScore2 = Number(prompt('수학 점수를 입력하세요.'));
let engScore2 = Number(prompt('영어 점수를 입력하세요.'));

let avgScore2 = (mathScore + engScore) / 2;
console.log(avgScore2);
alert(`당신의 평균 점수는 ${avgScore2} 점 입니다`);
