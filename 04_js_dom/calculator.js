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
