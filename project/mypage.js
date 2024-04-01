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

let mypagenav = document.querySelectorAll('.mypagenav_acc');
// 네브바
for (let i = 0; i < mypagenav.length; i++) {
  mypagenav[i].addEventListener('click', function () {
    for (let j = 0; j < mypagenav.length; j++) {
      mypagenav[j].classList.remove('active');
    }
    this.classList.add('active');
  });
}

let reservbutton = document.querySelector('.reservation');
reservbutton.addEventListener('click', (e) => {
  e.style.display = 'block';
  // $(e.target).css('display', 'block');
});

// 펫 사진 등록하면 미리보기 되도록
function showimg() {
  let newImg = document.querySelector('.showpetimg').lastElementChild;
  newImg.style.visibility = 'visible';
}

function loadFile(input) {
  let file = input.files[0];

  let newImg = document.createElement('img');
  newImg.setAttribute('class', 'img');

  newImg.src = URL.createObjectURL(file);

  // 새로 저장될 이미지의 크기
  newImg.style.width = '200px';
  newImg.style.height = '200px';
  newImg.style.objectFit = 'contain';
  newImg.style.margin = '10px';

  // 이미지가 뒤에 추가되도록
  let container = document.querySelector('.showpetimg');
  container.append(newImg);
}

// 네브바와 연결
// function displayElement(event) {
//   let displaytg = event.target;
//   if ((displaytg.style.display = 'none')) {
//     displaytg.style.display = 'block';
//   } else {
//     displaytg.style.display = 'none';
//   }
// }
// function displayhp() {
//   document.querySelector('.myplace').style.display = 'block';
// }
// function displaysal() {
//   document.querySelector('.mysalon').style.display = 'block';
// }
// function displaypost() {
//   document.querySelector('.mypost').style.display = 'block';
// }
// function displaycomm() {
//   document.querySelector('.mycomment').style.display = 'block';
// }
// // function displaycon() {
// //   document.querySelector('.myhospital').style.display = 'block';
// // }
// // function displaybp() {
// //   document.querySelector('.myhospital').style.display = 'block';
// // }
// function displayinq() {
//   document.querySelector('.inquirysection').style.display = 'block';
// }
// // function displayani() {
// //   document.querySelector('.myhospital').style.display = 'block';
// // }
// function displaypw() {
//   document.querySelector('.pwchange').style.display = 'block';
// }
// // function displayalarm() {
// //   document.querySelector('.myhospital').style.display = 'block';
// // }

// function displayElement(event) {
//   event.target.style.display = 'block';
// }

/* 병원을 클릭하면 병원내용이 나와야해 나머지는 없어지고 */

// myhos.addEventListener('click', () => {

// })

function dishos() {
  document.querySelector('.myhospital').style.display = 'block';
  document.querySelector('.myplace').style.display = 'none';
  document.querySelector('.mysalon').style.display = 'none';
  document.querySelector('.mypost').style.display = 'none';
  document.querySelector('.mycomment').style.display = 'none';
  document.querySelector('.inquirysection').style.display = 'none';
  document.querySelector('.anichange').style.display = 'none';
  document.querySelector('.pwchange').style.display = 'none';
  document.querySelector('.alarmsetting').style.display = 'none';
}
function disrepl() {
  document.querySelector('.myhospital').style.display = 'none';
  document.querySelector('.myplace').style.display = 'block';
  document.querySelector('.mysalon').style.display = 'none';
  document.querySelector('.mypost').style.display = 'none';
  document.querySelector('.mycomment').style.display = 'none';
  document.querySelector('.inquirysection').style.display = 'none';
  document.querySelector('.anichange').style.display = 'none';
  document.querySelector('.pwchange').style.display = 'none';
  document.querySelector('.alarmsetting').style.display = 'none';
}
function dissal() {
  document.querySelector('.myhospital').style.display = 'none';
  document.querySelector('.myplace').style.display = 'none';
  document.querySelector('.mysalon').style.display = 'block';
  document.querySelector('.mypost').style.display = 'none';
  document.querySelector('.mycomment').style.display = 'none';
  document.querySelector('.inquirysection').style.display = 'none';
  document.querySelector('.anichange').style.display = 'none';
  document.querySelector('.pwchange').style.display = 'none';
  document.querySelector('.alarmsetting').style.display = 'none';
}
function dispos() {
  document.querySelector('.myhospital').style.display = 'none';
  document.querySelector('.myplace').style.display = 'none';
  document.querySelector('.mysalon').style.display = 'none';
  document.querySelector('.mypost').style.display = 'block';
  document.querySelector('.mycomment').style.display = 'none';
  document.querySelector('.inquirysection').style.display = 'none';
  document.querySelector('.anichange').style.display = 'none';
  document.querySelector('.pwchange').style.display = 'none';
  document.querySelector('.alarmsetting').style.display = 'none';
}
function discomme() {
  document.querySelector('.myhospital').style.display = 'none';
  document.querySelector('.myplace').style.display = 'none';
  document.querySelector('.mysalon').style.display = 'none';
  document.querySelector('.mypost').style.display = 'none';
  document.querySelector('.mycomment').style.display = 'block';
  document.querySelector('.inquirysection').style.display = 'none';
  document.querySelector('.anichange').style.display = 'none';
  document.querySelector('.pwchange').style.display = 'none';
  document.querySelector('.alarmsetting').style.display = 'none';
}
function disinq() {
  document.querySelector('.myhospital').style.display = 'none';
  document.querySelector('.myplace').style.display = 'none';
  document.querySelector('.mysalon').style.display = 'none';
  document.querySelector('.mypost').style.display = 'none';
  document.querySelector('.mycomment').style.display = 'none';
  document.querySelector('.inquirysection').style.display = 'block';
  document.querySelector('.anichange').style.display = 'none';
  document.querySelector('.pwchange').style.display = 'none';
  document.querySelector('.alarmsetting').style.display = 'none';
}
function disani() {
  document.querySelector('.myhospital').style.display = 'none';
  document.querySelector('.myplace').style.display = 'none';
  document.querySelector('.mysalon').style.display = 'none';
  document.querySelector('.mypost').style.display = 'none';
  document.querySelector('.mycomment').style.display = 'none';
  document.querySelector('.inquirysection').style.display = 'none';
  document.querySelector('.anichange').style.display = 'block';
  document.querySelector('.pwchange').style.display = 'none';
  document.querySelector('.alarmsetting').style.display = 'none';
}

function dispw() {
  document.querySelector('.myhospital').style.display = 'none';
  document.querySelector('.myplace').style.display = 'none';
  document.querySelector('.mysalon').style.display = 'none';
  document.querySelector('.mypost').style.display = 'none';
  document.querySelector('.mycomment').style.display = 'none';
  document.querySelector('.inquirysection').style.display = 'none';
  document.querySelector('.anichange').style.display = 'none';
  document.querySelector('.pwchange').style.display = 'block';
  document.querySelector('.alarmsetting').style.display = 'none';
}

function disala() {
  document.querySelector('.myhospital').style.display = 'none';
  document.querySelector('.myplace').style.display = 'none';
  document.querySelector('.mysalon').style.display = 'none';
  document.querySelector('.mypost').style.display = 'none';
  document.querySelector('.mycomment').style.display = 'none';
  document.querySelector('.inquirysection').style.display = 'none';
  document.querySelector('.anichange').style.display = 'none';
  document.querySelector('.pwchange').style.display = 'none';
  document.querySelector('.alarmsetting').style.display = 'block';
}
