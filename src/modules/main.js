// *** Main *** //
import plusImg from '../asset/plus.svg';
// import { openModal } from './modal-popup';
const mainContent = document.querySelector('#main');
mainContent.classList.add('#main');

const mainTitle = document.createElement('h2');
mainTitle.textContent = 'Due Today';
mainTitle.classList.add('main-title');

// Projects

const projectsList = [
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

const projectTitle = document.createElement('h3');
const projectsDiv = document.createElement('div');

projectsDiv.classList.add('projects-div');
projectTitle.textContent = 'My Projects';

function loadMain() {
  mainContent.appendChild(mainTitle);
  mainContent.appendChild(projectTitle);
  mainContent.appendChild(projectsDiv);
  loadProjects();
}

function loadProjects() {
  for (let project of projectsList) {
    console.log(project.title);
    // create li element
    const li = document.createElement('li');
    li.classList.add('project-item');

    // create div that will contain proJTitle and addTask btn
    const projTitleDiv = document.createElement('div');
    const projTitle = document.createElement('h4');
    const addTaskBtn = document.createElement('a');
    projTitle.textContent = project.title;
    // addTaskBtn.classList.add('#add-task-btn');

    // create ul that will contain tasks
    const tasks = document.createElement('ul');

    addTaskBtn.addEventListener('click', () => {
      openModal;
    });
    const image = document.createElement('img');
    image.src = plusImg;

    addTaskBtn.appendChild(image);
    projectsDiv.appendChild(li);
    li.appendChild(projTitleDiv);
    projTitleDiv.appendChild(projTitle);
    projTitleDiv.appendChild(addTaskBtn);
    li.appendChild(tasks);
  }
}
// Inside projects-div
// create project-item (ul)
// create project-item li
// create project-item li h4
// create project-item li a > img
// create project-item li ul*
export { loadMain };
