// es6
// 바로 export 시키기
// 예약어이기 때문에 한칸 띄고 선언
export const animals = ['cat', 'dog', 'rabbit'];

export function showAnimal() {
  // 각 요소를 ani라고 하며 animals 배열을 돌면서 각 요소를 찍어줌
  animals.forEach((ani) => console.log(ani));
}

export const addAnimal = (newAni) => {
  // animals 배열에 인자로 전달받은 newAni를 추가한 후
  // 해당 배열을 반환하는 함수 만들기
  // 위에 배열을 바꾸고 싶지 않다면 새로운 변수에 배열 넣어주기

  animals.push(newAni);
  return animals;
};
