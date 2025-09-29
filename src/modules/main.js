// *** Main *** //

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
  loadProjects()
}

function loadProjects() {
  for (let project of projectsList) {
    console.log(project.title);
    const projTitle = document.createElement('h4');
    projTitle.textContent = project.title;
    projectsDiv.appendChild(projTitle);
  }
};

export {loadMain} ;
