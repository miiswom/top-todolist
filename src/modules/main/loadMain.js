// *** Main *** //
import { loadProjects } from './loadProjects';

const mainContent = document.querySelector('#main');
const mainTitle = document.createElement('h2');
const projectTitle = document.createElement('h3');
const projectsDiv = document.createElement('div');

function loadMain() {
  mainContent.classList.add('#main');
  mainTitle.textContent = 'Due Today';
  mainTitle.classList.add('main-title');
  projectsDiv.classList.add('projects-div');
  projectTitle.textContent = 'My Projects';

  mainContent.appendChild(mainTitle);
  mainContent.appendChild(projectTitle);
  mainContent.appendChild(projectsDiv);
  loadProjects();
}

export { loadMain, projectsDiv };
