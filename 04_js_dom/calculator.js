let value11 = document.getElementById('value1').value;
let value22 = document.getElementById('value2').value;
let oper = document.getElementById('operator').value;
let showResult = document.getElementById('result').value;
let calcul = document.getElementsByClassName('calculate').value;
let initial = document.getElementsByClassName('initialize').value;

initial.addEventListener('click', function () {
  value11.innerText = '';
  value22.innerText = '';
  oper.innerText = '';
  showResult.innerText = '';
});

calcul.addEventListener('click', function () {
  value11;
  value22;
});

// 폼 태그, 인풋창 4개, 버튼 2개 만들기
// 인풋창에 넣은 값들을 연결해주기
// 하나는 초기화 버튼 하나는 연산 버튼 함수로 만들기
