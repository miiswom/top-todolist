// *** Main *** //
import plusImg from '../asset/plus.svg';
import { addClassFn } from './sidebar';

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
    // create li element
    const li = document.createElement('li');
    li.classList.add('project-item');

    // create div that will contain proJTitle and addTask btn
    const projDiv = document.createElement('div');
    const projTitle = document.createElement('h4');
    const addTaskBtn = document.createElement('a');
    addTaskBtn.id = "openAddTask"
    projTitle.textContent = project.title;
    // addTaskBtn.classList.add('#add-task-btn');

    // create ul that will contain all tasks
    const tasks = document.createElement('ul');

    addTaskBtn.addEventListener('click', () => {
      addClassFn(addTaskBtn.id)
    });
    const image = document.createElement('img');
    const span = document.createElement('span');
    span.textContent = 'Add';
    image.src = plusImg;

    addTaskBtn.appendChild(image);
    projectsDiv.appendChild(li);
    li.appendChild(projDiv);
    projDiv.appendChild(projTitle);
    projDiv.appendChild(addTaskBtn);
    addTaskBtn.appendChild(span)
    li.appendChild(tasks);
  }
}

export { loadMain };
