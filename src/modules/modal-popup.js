const modal = document.querySelector('#modal');
const closeBtn = document.querySelector('#closeModal');
const openBtn = document.querySelector('#openModal');

openBtn.addEventListener('click', () => {
  modal.classList.add('open');
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('open');
});
