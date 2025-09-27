import { projectsDiv, projectTitle } from './main-projects';

// *** Main *** //
const mainContent = document.querySelector('#main');
mainContent.classList.add('#main');

const mainTitle = document.createElement('h2');
mainTitle.textContent = 'Due Today';
mainTitle.classList.add('main-title');

function loadMain() {
  mainContent.appendChild(mainTitle);
  mainContent.appendChild(projectTitle);
  mainContent.appendChild(projectsDiv);
}

//////////////////////////

// Projects

const projects = [
  {
    title: 'Work',
  },
  {
    title: 'Groceries',
  },
  {
    title: 'Lunchboxes',
  },
];

export const projectTitle = document.createElement('h3');
export const projectsDiv = document.createElement('div');

projectsDiv.classList.add('projects-div');
projectTitle.textContent = 'My Projects';

function loadProjects() {
  for (let project of projects) {
    console.log(project.title);
    const projTitle = document.createElement('h4');
    projTitle.textContent = project.title;
    projectsDiv.appendChild(projTitle);
  }
}

export { loadProjects };

export { loadMain };
