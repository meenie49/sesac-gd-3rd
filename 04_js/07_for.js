console.log('connected!');

// for문
/*
for (for문 내에서 사용할 변수 선언; 조건식 (어디까지 증가/감소할지 작성); 증감) {
    반복할 코드
}
*/
/*
i + 1 = i / i += 1 / i++ -> 모두 동일함
i - 1 = i / i -= 1 / i-- -> 모두 동일함
i++: 변수 i에서 값을 꺼낸 뒤, 1을 더함
i--: 변수 i에서 값을 꺼낸 뒤, 1을 뺌
5씩 늘리고 싶을 때 -> i += 5 -> i를 5씩 늘림
*/
// let i 선언 안해줘도 상관은 없음
// for문 안에서만 사용되기 때문에 동일한 변수 사용해도 상관없음
// const 안되는 이유 -> i값이 계속 바뀌기 때문
for (let i = 0; i < 10; i++) {
  // console.log('안녕', i); 0~9까지 10번 반복되며 i가 10이 되면 for문을 빠져나감
  console.log(`안녕 ${i}`);
}
for (i = 0; i < 10; i += 3) {
  console.log(`3씩 늘어나는 ${i}`);
}

// 1부터 5까지 출력하는 방법
//    1. i <= 5
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
//    2. i < 6
for (let i = 1; i < 6; i++) {
  console.log(i);
}

// 실습 1. 5부터 1까지 1씩 감소하면서 출력하기
for (i = 5; i > 0; i--) {
  console.log(i);
}

// 실습 2. 1부터 n까지 모든 수를 더해 result로 콘솔에 찍기
let n = 10;
let result = 0;

// for(n = 10; n > 0; n--) {
//     result = n +
// }

for (let i = 1; i <= n; i++) {
  result = result + i;
  //   result += i;
  console.log(result);
}
console.log(result);

// for문과 배열 함께 사용하기
// 배열의 모든 요소 출력하기
let cafe = ['americano', 'latte', 'espresso', 'tea'];
console.log(cafe.length); // .length: 배열의 길이를 출력

// cafe.length는 언제든지
for (let i = 0; i < cafe.length; i++) {
  // [] 는 배열을 뽑아서 넣는다는 것
  console.log('cafe menu', cafe[i]);
  // 1번째 반복 cafe[0]
  // 2번째 반복 cafe[1]
  // 3번째 반복 cafe[2]
  // 4번째 반복 cafe[3]
  // 5번째 반복 하지 않아요! -> i가 4이기 때문 -> 조건식이 false이어서 for문 종료
}

// 배열 요소의 총 합 구하기
let numArr = [99, 88, 77, 66, 55];
let numSum = 0;
for (let i = 0; i < numArr.length; i++) {
  numSum = numSum + numArr[i];
  // numSum += numArr[i];
  console.log(numSum);
}
console.log(numSum); // for문 밖에 쓰면 출력 한번만 되고, 안에 쓰면 돌때마다 출력됨

// for문과 if문 함께 사용
// 짝수만 출력
// 1. for문만 사용
for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}

// 2. if문과 함께 사용
for (let i = 2; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 실습 3. 2단 출력
console.log('2단');
let result3 = 1;
for (let i = 1; i < 10; i++) {
  result3 = 2 * i;
  console.log(`2 * ${i} = ${result3}`);
}

// 구구단 출력하기
console.clear();
const number = Number(prompt('구구단을 게산할 숫자를 입력해주세요.'));
// const number = 2;
console.log(number + '단');
for (let i = 1; i < 10; i++) {
  //   console.log(number + '*' + i + '=' + number * i);
  console.log(`${number} * ${i} = ${number * i}`);
}

// 이중 for문
// 순서 i =0 일때 j가 0~9일 때 까지 돌고 i=1이 되고의 반복
// 내부 for문이 다 실행된다음 바깥 i문이 다음으로 실행
for (let i = 0; i < 5; i++) {
  console.log('i : ', i);

  for (let j = 0; j < 10; j++) {
    console.log(`현재 i는 ${i}이고, j는 ${j}이다.`);
  }
}
