// package.json에서 "type": "module" 로 수정
// 02_module01.js 사용
import { flowers, getFlower, getFlowersLength } from './02_module01.js';

console.log(flowers);
// 함수 내부에 console.log가 있기 때문에 같이 안써줘도됨
getFlowersLength();
// 함수 내부에 return만 있고 console.log가 없기 때문에 같이 써줘야됨
console.log(getFlower(0));
console.log(getFlower(10));

// 한 번에 export 한 변수, 함수 등을 가져오는 방법

// * 하고 뭐로 이름 붙일지
// *을 사용해 한 번에 가져오는 방법은 처리 속도와 메모리 효율이 안좋음
// 되도록이면 사용할 변수명이나 메소드 명을 명시하는 것이 좋음
// import * as flower from './02_module01.js';
// console.log(flower);

// -------------------------------------------------------------------
import { showAnimal, addAnimal } from './02_module02.js';
showAnimal();
// console.log(addAnimal(dog));
// 문자니까 ''로 감싸줘야함
console.log(addAnimal('horse'));

// -------------------------------------------------------------------
// 03_module.js 사용
// import sayStatus from './03_module.js';
// sayStatus('sleepy');
// sayStatus('hungry');
// sayStatus('boring');
// sayStatus('hard');
// sayStatus('happy');

import sayStatus2 from './03_module.js';
sayStatus2('sleepy');
sayStatus2('hungry');
sayStatus2('boring');
