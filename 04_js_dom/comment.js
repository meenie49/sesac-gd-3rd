const idValue = document.querySelector('#idnumber');
const comments = document.querySelector('#comment');
const wc = document.querySelector('.write');

idValue.addEventListener('submit', (e) => {
  e.preventDefault();
  const idInput = document.querySelector('input');

  if (idValue !== 0) {
    if (comments !== 0) {
      const newComment = document.createElement('li');
      newComment.innerText = comments;
    }
  }
});
