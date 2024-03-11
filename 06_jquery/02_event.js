// click 이벤트
// 발생하는 event 객체 확인 가능
// target 은 해당 이벤트가 발생한 요소
$('.container').click((e) => {
  console.log('event', e); // event 객체
  console.log('event.target', e.target); // event가 발생한 요소(자기 자신)
  // 색상도 다 ''로 감싸줘야함
  // event가 발생한 요소의 css 만 수정
  $(e.target).css('background-color', 'skyblue');
  // 클릭되지 않은 .container도 css 적용됨
  $('.container').css('background-color', 'skyblue');
});

// mouseover, mouseout 네비게이션 바에서 해당 요소가 보이고, 네비게이션 바를 마우스가 나가면 사라질 때 많이 사용
// mouseover 이벤트 -> 해당 요소에 마우스가 올라갔을 때 실행
// nav바 에서 마우스 올라가면 내려오고 나가면 올라가는
// $('.container').mouseover(() => {
//   console.log('마우스 올라감');
// });

// mouseout 이벤트 -> 해당 요소에 마우스가 나갔을 때 실행
// display: none으로 지우는
// $('.container').mouseout(() => {
//   console.log('마우스 나감');
// });

// hover 이벤트 -> css에서 더 많이 작성
// mouseover, mouseout을 한 번에 지정 -> 인자로 함수 2개 작성
// 첫 번째 인자인 콜백함수는 mouseover일 때 실행할 코드 작성
// 두 번째 인자인 콜백함수는 mouseout일 때 실행할 코드 작성
$('.container').hover(
  () => {
    // mouseover일 때 실행할 코드
    console.log('hover 이벤트에서 마우스 올라감');
  },
  () => {
    // mouseout일 때 실행할 코드
    console.log('hover 이벤트에서 마우스 나감');
  }
);

// scroll 이벤트
$(document).scroll(() => {
  console.log('스크롤 발생');
});

// 지금까지 마우스 이벤트
// ----------------------------------------------------------
// 키보드 이벤트

// keydown 이벤트 : 선택한 요소에서 키보드를 누르는 이벤트가 발생할 경우
// 키보드를 누르고 있는 동안에도 계속 이벤트 발생
// 실시간 입력을 처리하거나 특수 키 (ex. 화살표 키, enter 키 등)을 감지하는데 사용

// keyup 이벤트 : 선택한 요소에서 키보드를 떼는 이벤트 발생할 경우
// 키보드를 누르고 있는 동안에는 이벤트가 발생하지 않음
// 사용자가 입력을 완료하거나 특정 키를 눌렀다가 뗄 때 필요한 동작 처리하는데 사용

// input중에서 name이 pw요소만 선택
$('input[name=pw]').keydown((e) => {
  console.log('event', e);
  console.log('e.key', e.key);
  if (e.key === 'Enter') {
    console.log('엔터를 입력하셨습니다');
    console.log(e.target.value); // 로그인 로직, 검색 로직
  }
});

// ketup 이벤트
// on() : 이벤트를 걸겠다. addEventListener와 비슷
$('input[name=pw').on('keyup', (e) => {
  console.log('e.key', e.key);
});

// input 값을 출력
// $('input[name=pw').on('keydown', (e) => {
//     // console.log('e.key', e.key);
//     if (e.key === 'Enter') {
//       console.log('input 값 :', e.target.value);
//     }
//   });
