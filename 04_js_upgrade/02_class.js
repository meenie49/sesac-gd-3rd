class House {
  // constructor : 생성자 함수
  // House라는 클래스의 속성을 초기화
  constructor(name, age, window) {
    // 이 클래스에는 name이라는 key를 가질 것이고, vaule는 생성자 함수에서 전달받은 name이다.
    this.name = name;
    this.age = age;
    this.window = window;
  }
  //  이 객체에 함수가 필요하다면 함수를 쓴다.
  // 메서드
  consoleInfo() {
    console.log(
      `이 아파트의 이름은 ${this.name}이고, ${this.age}년 건축되었습니다.`
    );
  }

  consoleWindow() {
    console.log(`${this.name} 아파트의 창문은 ${this.window}개 입니다.`);
  }
}
// House 클래스를 사용해 오브젝트 만들기
const house1 = new House('고덕 그라시움', 2019, 10);
const house2 = new House('고덕 아르테온', 2019, 10);
const house3 = new House('고덕 리앤파크', 2019, 10);
const house4 = new House('래미안 힐스테이트', 2019, 10);
console.log(house1);
console.log(typeof house1);
house1.consoleInfo();
// 변수 초기화 변수 찜
// let a;

// obj = { a: 1, b: 2 };
// ---------------------------------------------------------

// 상속

// House를 상속받아 확장시켜 Apartment 클래스를 만든다
class Apartment extends House {
  constructor(name, age, window, floor, password) {
    // super(상속받을 속성) : 인자로 상속받고 싶은 속성만 써주기
    super(name, age, window);
    this.floor = floor; // Apartment 클래스에서 사용할 속성
    this.password = password;
  }

  consolePassword() {
    console.log(`이 아파트의 비밀번호는 ${this.password}입니다🤫`);
  }

  // 오버라이딩 : 기존 메서드를 재정의
  consoleWindow() {
    console.log(
      `이 아파트의 창문은 모두 ${this.window}개 이고, 총 ${
        this.floor
      }층이므로 모든 창문의 갯수는 ${this.window * this.floor}개 입니다.`
    );
  }
}

// 새로운 객체를 만들어 apr1에 저장
const apt1 = new Apartment('Ipark', 2017, 6, 20, 12345);
console.log(apt1);
apt1.consoleWindow(); // 새롭게 정의된 메서드 사용
apt1.consolePassword(); // 새로운 메서드 추가 가능
apt1.consoleInfo(); // 부모 메서드 그대로 사용 가능

// ---------------------------------------------------------
// 실습 2. Shape 클래스 만들기

class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
    // 반환이니까 return
  }
}
//  rec1이 인스턴스
let rec1 = new Shape(3, 4);
console.log(rec1.getArea());

// class Rectangle extends Shape {

// }
class Circle extends Shape {
  constructor(width, height, radius) {
    super(width, height);
    this.radius = radius;
  }
  getArea() {
    return this.radius * (this.width / 2) ** 2;
  }
}
const cir = new Circle(5, 5, 3.14);
// cir이라는 인스턴스의 getArea()를 실행시켜 주면
console.log(cir.getArea());
