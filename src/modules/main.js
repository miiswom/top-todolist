export const mainObj = {
  mainContent: document.querySelector('#main'),
  mainTitle: document.createElement('h2'),
  projectTitle: document.createElement('h3'),
  projectsDiv: document.createElement('div'),
};

export function createMain() {
  mainObj.mainContent.classList.add('#main');
  mainObj.mainTitle.textContent = 'Due Today';
  mainObj.mainTitle.classList.add('main-title');
  mainObj.projectsDiv.classList.add('projects-div');
  mainObj.projectTitle.textContent = 'My Projects';

  mainObj.mainContent.appendChild(mainObj.mainTitle);
  mainObj.mainContent.appendChild(mainObj.projectTitle);
  mainObj.mainContent.appendChild(mainObj.projectsDiv);

  return mainObj;
}
