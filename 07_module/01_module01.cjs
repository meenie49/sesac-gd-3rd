// commonjs
// 한 번에 module.exports 시키기
const colors = ['pink', 'blue', 'yellow'];

const sayhi = function () {
  console.log('안녕하세요! 이 함수는 sayhi 함수 입니다.');
};

function sayName(name) {
  console.log('my name is ' + name + ' 이 함수는 sayName 함수입니다.');
  // 위에 콘솔 찍고 sayhi 함수 호출
  sayhi();
}

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getBornYear() {
    // 현재 날짜를 불러와 getFullYear로 년도만 나오게 해서 현재 나이 빼서 태어난해 구하기
    return new Date().getFullYear() - this.age;
  }
}

// colors, sayName, Person를 내보냄
// 함수를 내보낼 때 호출하는게 아니므로 ()쓰면 안됨
// 함수안에 함수호출이 있더라도 정상적으로 실행됨
// 다른 파일에서 사용할 변수 함수만 내보내면 됨
module.exports = { colors, sayName, Person };
