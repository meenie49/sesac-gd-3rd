/* 
commonjus 에서 모듈 사용을 위해
package.json 파일에 "type": "commonjs"를 추가해야 함

npm init 명령어를 통해 자동으로 해당 프로젝트의 package.json 생성 가능

cjs 확장자는 commonjs를 사용하는 파일이라는 것을 알림
*/

// 01_module01.cjs 사용
// requre('불러올 파일 경로')
const person = require('./01_module01.cjs');
// 01_module02  에서 exports한 모든 데이터가 Person에 저장됨
console.log(person);

// Person에 저장된 변수, 클래스, 함수 사용
// 변수 사용
console.log(person.colors);
// 함수 사용
console.log(person.sayName('장원영'));
// 쿨래스 사용
// Person이라는 클래스 사용해서 새로운 객체 만듦
const chaewon = new person.Person('채원', 20);
console.log(chaewon);
console.log(chaewon.getBornYear());

// 가져오고싶은 변수, 함수, 클래스만 가져오기
const { sayName } = require('./01_module01.cjs'); // 구조분해할당 사용
sayName('안유진');

// -----------------------------------------------------------------

// 01_module02.cjs 사용
// const person2 = require('./01_module02.cjs');
const { colors2, sayName2 } = require('./01_module02.cjs');

console.log(colors2);
console.log(sayName2('강동원'));
