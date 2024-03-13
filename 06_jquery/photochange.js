// $('#apple').click((e) => {
//   //$('#apple').before('img');
//   // 내 생각 img태그를 추가해주고 그 뒤에 이미지 경로 속성을 추가하려했음
//   $('#').prepend('img');
//   $('#apple').attr('img', 'src: ./img/apple.jpg');
// });

$('.btn').click((e) => {
  // 클릭된 btn의 id 값 가져와 imgName이라는 변수에 저장
  const imgName = $(e.target).attr('id');
  console.log(imgName);
  // apple, bananas, grapes, peaches 중 클릭한 btn의 아이디 값으로 저장
  $('.fruit').attr('src', `./img/${imgName}.jpg`);
  $('.fruit').attr('src', `./img/${imgName}.jpg`);
});
