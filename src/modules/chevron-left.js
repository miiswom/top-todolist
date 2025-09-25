import chevronLeftImg from '../asset/chevron-left.svg';

export const chevronLeft = document.createElement('li');
chevronLeft.classList.add('list-icon');

const icon = document.createElement("img");
icon.classList.add("icons")

icon.src = chevronLeftImg;


chevronLeft.appendChild(icon)

chevronLeft.addEventListener("click", () => {
  // add collapsed class to sidebar
  sidebar.classList.toggle('collapsed')
})
