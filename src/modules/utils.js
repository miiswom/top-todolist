const modal = document.querySelector('#modal');
const closeBtn = document.querySelector('#closeModal');

export function addUtil(id, classFn) {
  const el = document.getElementById(id);
  if (id.startsWith('collapsed')) {
    el.parentElement.parentElement.classList.toggle(classFn);
  } else if (id.startsWith('open')) {
    modal.classList.remove('hidden');
    modal.classList.add('open');

    console.log(modal);
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('open');
    });
  }
}