// c새로운 변수로 만들어 선언하는게 필수가 아님
// document.querySelector('#comment-form')뒤에 써도되지만 이게 더 간편
const commentForm = document.querySelector('#comment-form');
const commentResult = document.querySelector('.commentresult');

commentForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // 속성에 속성값까지 쓰면 더 구체적인 선택 가능
  // getattribute는 속성을 가져오지 속성 값을 가져오는게 아님
  const idValue = document.querySelector('[name=idinput]').value;
  const commentValue = document.querySelector('[name=comment]').value;

  if (idValue !== 0) {
    if (commentValue !== 0) {
      const newComment = document.createElement('li');
      // 새로운 <li> 요소를 생성하여 newTodo 변수에 할당
      // document.createElement('li').getAttribute('name') <- 내 생각
      // idinput + ' - ' + comment 이 아닌 이 name에 해당하는 value 값이니 ->
      // 템플릿리터럴로 바꿔서 innerHtml로 바꾸면 b태그 적용까지 할 수 있음
      newComment.innerHTML = `<b>${idValue}</b> - ${commentValue}`;
      // 새로운 <li> 요소의 텍스트 내용을 설정하며 todo 변수에 저장된 값을 가져와서 <li> 요소의 텍스트로 설정
      //이것은 사용자가 입력한 할 일을 목록에 표시하는 데 사용됩니다.
      // newComment.append(idinput + ' - ' + comment); <- 이유를 몰랐었는데 없어도됨
      commentResult.append(newComment);
      // 부모 요소.append(추가될 자식 요소)

      // 폼 안에 인풋 2개 버튼 하나 넣어주기
      // 인풋에 입력되는 값을 연결해주기
      // 인풋에 입력되는 값을 li로 넣어주기
    }
  }
  idValue.value = '';
  commentValue.value = '';
});

// /*
// comment.js

// 댓글을 등록하는 함수
// function addComment(event) {
//   // 폼의 제출을 막음
//   event.preventDefault();

//   // 입력된 아이디와 댓글을 가져옴
//   const idInput = document.querySelector('input[name="idinput"]');
//   const commentInput = document.querySelector('input[name="comment"]');
//   const id = idInput.value;
//   const comment = commentInput.value;

//   // 입력값이 비어있는지 확인
//   if (id.trim() === '' || comment.trim() === '') {
//     alert('아이디와 댓글을 모두 입력해주세요.');
//     return;
//   }

//   // 새로운 댓글 아이템 생성
//   const newComment = document.createElement('li');
//   newComment.textContent = `${id}: ${comment}`;

//   // 목록에 새로운 댓글 아이템 추가
//   const commentList = document.querySelector('.commentresult');
//   commentList.appendChild(newComment);

//   // 입력 필드 초기화
//   idInput.value = '';
//   commentInput.value = '';
// }

// // 등록 버튼에 이벤트 리스너 추가
// const commentForm = document.getElementById('comment-form');
// commentForm.addEventListener('submit', addComment);
// */

//{
/* <form id="comment-form">
      아이디 <input type="text" id="idinput" /> 댓글
      <input type="text" id="comment" />
      <button class="write">등록</button>
    </form>
    <ul class="commentresult"></ul> */
//}
