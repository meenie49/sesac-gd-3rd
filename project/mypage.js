// let acc = document.getElementsByClassName('accordion_nav');
// // let i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener('click', function () {
//     this.classList.toggle('active');

//     let panel = this.nextElementSibiling;
//     if (panel.style.display === 'block') {
//       panel.style.display === 'none';
//     } else {
//       panel.style.display = 'block';
//     }
//   });
// }

let mypagenav = document.querySelectorAll('.mypagenav_acc');
/* 
mypagenav를 클릭하면 
모든 mypagenav_acc의 active를 제거하고
클릭한 mypagenav_acc에만 active를 추가한다.
 */
// 단일요소가 아니고 배열로 들어오기 때문에 바로 addeventlister 하면 안됨
// console.log(accordionnav); -> 결과가 배열로 나옴
/* 
mypagenav[0].addEventListner('click', function() {})
mypagenav[1].addEventListner('click', function() {})
mypagenav[2].addEventListner('click', function() {})
... 이렇게 다 쓸 수 없으므로 반복문으로 쓰기
*/
for (let i = 0; i < mypagenav.length; i++) {
  mypagenav[i].addEventListener('click', function () {
    for (let j = 0; j < mypagenav.length; j++) {
      mypagenav[j].classList.remove('active');
    }
    this.classList.add('active');
  });
}

let reservbutton = document
  .querySelector('.reservation')
  .reservbutton.addEventListener(click, (e) => {
    $(e.target).css('display', 'block');
  });
