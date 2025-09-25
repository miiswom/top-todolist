import { projectsDiv, projectTitle } from "./main-projects";

// *** Main *** //
const mainContent = document.querySelector('#main');
mainContent.classList.add('#main');

const mainTitle = document.createElement('h2');
mainTitle.textContent = 'Due Today';
mainTitle.classList.add('main-title');

function loadMain() {
  mainContent.appendChild(mainTitle);
  mainContent.appendChild(projectTitle);
  mainContent.appendChild(projectsDiv)
}

export { loadMain };
