// 간단한 비동기 코드 예시
// setTimeout을 사용해 비동기적으로 코드를 실행

/* 
setTimeout은 해당 시간동안 코드가 실행을 멈추는 것이 아니라
setTimeout과 다음 줄에 작성된 코드가 모두 실행되고 있는 중
하지만 setTimeout의 두번째 인자인 ms 시간이 지난 뒤에
setTimeout 내부의 코드를 실행 
*/

// console.log('hi 1');

// 멈추는게 아니고 실행된 상태에서 기다림 그 상태에서 그 다음 코드를 읽음
// 함수가 인자로 들어가면 보통 화살표 함수 사용
// 1000 = 1초
// setTimeout(() => {
//   console.log('hi 2');
// }, 1000);

// console.log('hi 3');
// console.log('-----------------------------------------');
// 1, 3, 2 순으로 콘솔에서 확인할 수 있음

// -------------------------------------------
// 만약 비동기 코드를 동기적으로 또는 원하는 순서대로 실행시키고 싶다면
// 동기적으로 실행할 부분을 콜백 함수(비동기 코드) 내부에 작성하면 됨
// 함수안에 함수가 있는 것 -> 콜백 함수
// console.log('hi 1');

// setTimeout(() => {
//   console.log('hi 2');
//   console.log('hi 3');
// }, 1000);

// 1, 2, 3 순으로 콘솔에서 확인할 수 있음

// -------------------------------------------
// 사용자에게 아이디를 입력받고, 비동기적으로 서버 통신을 흉내내는 로그인 로직
// 아이디를 받음
// const id = prompt('ID를 입력하세요.');
// let userId;
// 로그인 시도를 찍음
// console.log('로그인 시도');
// 서버 통신 부분
// setTimeout(() => {
//   userId = 'meenie'; // 서버에서 받아온 id
// 2초 뒤에 입력 아이디를 받아 성공
//   console.log('서버에서 아이디를 성공적으로 받아옴');
// }, 2000);

// if (id === userId) {
//   console.log('로그인 성공');
// } else {
// 2초 기다리는 동안 undefined 이기 때문에 로그인 실패가 뜨고
//   console.log('로그인 실패');
// }

// 무조건 실패하는 이유
// setTimeout 내부의 콜백함수가 실행되기 전(서버에서 데이터를 받아오기 전)에
// 사용자에게 입력받은 id와 userId(undefined)를 비교하기 때문
// userId는 서버에서 데이터를 받아오지 못했기 때문에 값이 없음
// 즉, undefined와 비교해서 조건문에서 항상 false가 되어 else절만 실행함

// ---------------------------------------------------------------

// 정상적으로 입력받은 id와 서버에서 받은 userId를 비교하는 코드
// const id = prompt('ID를 입력하세요.');
// let userId;

// console.log('로그인 시도'); // 서버 통신 부분
// setTimeout(() => {
//   userId = 'meenie'; // 서버에서 받아온 id

//   console.log('서버에서 아이디를 성공적으로 받아옴');
//   if (id === userId) {
//     console.log('로그인 성공');
//   } else {
//     console.log('로그인 실패');
//   }
// }, 2000);

// 콜백지옥
// setTimeout(() => {
//     let teacherList = '';
//     let name = 'layla'; // 임의로 서버에서 받아온 name
//     if (!name) {
//       console.log('강사 이름을 찾을 수 없습니다!');
//     } else {
//       teacherList += name;
//       console.log(teacherList);
//     }
//     setTimeout(() => {
//       name = 'yuki'; // 임의로 서버에서 받아온 name
//       if (!name) {
//         console.log('강사 이름을 찾을 수 없습니다!');
//       } else {
//         teacherList += ', ' + name;
//         console.log(teacherList);
//       }
//       setTimeout(() => {
//         name = 'lily'; // 임의로 서버에서 받아온 name
//         if (!name) {
//           console.log('강사 이름을 찾을 수 없습니다!');
//         } else {
//           teacherList += ', ' + name;
//           console.log(teacherList);
//         }
//       }, 1000);
//     }, 1000);
//   }, 1000);

// Promise
// Promise를 사용해 비동기 처리를 구현하는 예시
// resolve, reject 순서는 중요
// const id = prompt('아이디를 입력해주세요.');
// let userId;

// const promise = new Promise((resolve, reject) => {
//   console.log('Promise 시작');

//   setTimeout(() => {
//     userId = 'meenie'; // 서버에서 아이디 받아와 변수에 저장

//     // userId id 자리 바꿨더니 됨
//     if (id === userId) {
//       resolve(userId);
//     } else {
//       reject(new Error('아이디가 틀렸습니다. 아이디를 다시 입력해주세요.'));
//     }
//   }, 2000);
// });

// // userId를 이제부터 data로 사용하겠따
// // 성공했을 때
// promise
//   .then((data) => {
//     console.log(`userId는 ${data}입니다.`);
//   })
//   // 실패했을 때
//   .catch((error) => {
//     console.log(error);
//   })
//   // 무조건 실행
//   .finally(() => {
//     console.log('Promise 종료');
//   });
// // . 으로 메서드체이닝 한것

// -------------------------------------------------------------

// async & await 사용
// promise는 then을 체이닝 할 수 있어 너무 많은 체이닝을 할 경우 가독성이 떨어짐
// 이를 해결하기 위해 나온 것이 async & await
// promise를 다르게 사용하는 방법
// async : 해당 함수 내부에 await를 사용할 것임을 알림
// await : 해당 함수가 실행될 때까지 기다리게 함

// try & catch
// try 스코프를 실행함
// 실행 도중 어떤 에러 발생이나 문제가 발생하면 바로 catch절로 이동
// finally 절은 무조건 실행

// const id = prompt('아이디를 입력해주세용☺'); // 성공
// let userId;

// // Promis를 함수에 담아 해당 함수 호출 시 Promise가 실행되도록 작성
// const promiseFunc = () => {
//   return new Promise((res, rej) => {
//     console.log('promise 시작');

//     // 서버에서 데이터 받아오는 시간 대체
//     setTimeout(() => {
//       userId = 'meenie';

//       if (id === userId) {
//         res(userId + '님 환영합니다!');
//       } else {
//         rej(new Error('아이디가 틀렸습니다. 아이디를 다시 입력해주세요.'));
//       }
//     }, 2000);
//   });
// };

// const checkUserId = async () => {
//   try {
//     const result = await promiseFunc();
//     // 실행된 결과값을 result에 저장
//     console.log(result);
//   } catch (error) {
//     // 실패하면 catch문으로
//     console.log(error);
//   } finally {
//     console.log('Promise 종료');
//   }
// };

// checkUserId();

// ---------------------------------------------------

// json
// 데이터를 전송하기 위한 경량의 데이터 포맷
// 여러 언어에서 쉽게 사용할 수 있어 서버와이 통신에서는 json으로 통신함
// [
//     {
//         "name": "장화",
//         "age": 13,
//         "Employed": true,
//         "position": "이사",
//         "address": {
//             "gu": "마포구",
//             "city": "서울시"
//         }
//     }
// ]

const jsonString =
  '{"name":"장화","age":13,"isEmployed":true,"position": "이사", "address":{"gu":"마포구","city":"서울시"}}';
// console.log(jsonString.name); // js 객체처럼 바로 사용할 수

// json -> js 객체로 파싱하기
const obj = JSON.parse(jsonString);
// json으로 가져오는 데이터는 꼭 파싱해줘야함
console.log(obj);
console.log(obj.name);

// js 객체 -> json으로 파싱하기
const jsonStr = JSON.stringify(obj);

console.log(jsonStr);

// ----------------------------------------------------

// open API 사용

// 고양이 사진 가져오기
// then은 성공했을 때 실행
// fetch('https://api.thecatapi.com/v1/images/search')
//   .then((response) => {
//     // 반환을 해줘야 data가 출력됨
//     return response.json();
//     // 위에서 파싱된 값이 data로 들어옴
//   })
//   .then((data) => {
//     console.log(data);
//     const img = document.createElement('img');
//     // 인덱스 0의 데이터의 url을 가져옴
//     img.src = data[0].url;
//     img.setAttribute('width', 500);

//     document.querySelector('#cat').append(img);
//   });

// ----------------------------------------------------
// OMDb api 사용해 영화 데이터 받아와 브라우저에 보여주기

async function getMovieData() {
  let word = 'love';
  const h3 = document.querySelector('h3');
  h3.innerText = `검색된 키워드 : ${word}`;
  // fetch로 데이터 불러오기
  // response 변수에는 서버에서 받아온 데이터가 저장됨
  const response = await fetch(
    // response 선언만
    // ? 뒤에 오는값 부터 파라미터
    // i와 그 값과 apikey와 그 값이 들어가 있음 -> &&연산자로 연결
    // s는 필수값으로 넣어줘야했음
    `http://www.omdbapi.com/?i=tt3896198&apikey=5de0113&s=${word}`
  );
  const movieData = await response.json();
  // response 실행
  console.log(movieData.Search);
  const ul = document.querySelector('ul');

  // 불러온 데이터는 movieData.Search 배열 안에 각각의 객체로 있음
  // movieData.Search 배열을 반복문을 통해 돌아서 각 요소를 만들고 DOM에 추가
  for (let movie of movieData.Search) {
    const img = document.createElement('img'); // 영화 카드 컨테이너
    const div = document.createElement('div'); // 영화 포스터
    const p = document.createElement('p'); // 영화 설명

    img.src = movie.Poster;
    img.alt = movie.Title;
    p.innerText = movie.Title;
    // img 먼저 넣고 p 태그 넣기
    div.append(img, p);
    ul.append(div);
  }
}

// ---------------------------------------------------------

// JSONPlaceholder API 사용해 가짜 데이터로 CRUD 작업 하기
// JSONPlaceholder API : JSON 형태의 mock data(더미 데이터)를 주는 open API

// get 요청
// 특정 게시물을 가져오는 함수
const getPost = () => {
  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};

// post 요청
// 새로운 게시물 생성하는 함수
const postPost = () => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: '제목제목제목',
        body: '게시물 내용내용내용'
        userId: 1,
    }),
    headers: {
        // 데이터를 보내려는 타입이 json
        'Content-type': 'application/json; charset=UTF-8',
    },
    // return 한줄일 때는 안적어도됨
  }).then((response) => response.json()).then((data) =>
  // 브라우저에 렌더링 등 응답으로 받은 데이터 사용
  console.log(data)
  ).catch((err) => {
    // 에러 발생 시 원하는 에러 처리
    console.log('err:', err);
  })
};

const deletePost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        // {}로 감싸는 이유 
        method: 'DELETE'
    }).then((respeonse) => response.json())
    .then((date) => console.log('Delete!'))
    .catch((err) => console.log('delete err: ', err))
}

// 확장자가 타입이랑 같은말