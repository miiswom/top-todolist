// *** loadProjects ***

import plusImg from '../../asset/plus.svg';
import { addUtil } from '../utils';
import { projectsList } from './projectsList';
import { projectsDiv } from './loadMain';

export function loadProjects() {
  for (let project of projectsList) {
    // create li element
    const li = document.createElement('li');
    const projDiv = document.createElement('div');
    const projTitle = document.createElement('h4');
    const addTaskBtn = document.createElement('a');
    const tasks = document.createElement('ul');
    const image = document.createElement('img');
    const span = document.createElement('span');

    li.classList.add('project-item');
    addTaskBtn.id = 'openAddTask';
    projTitle.textContent = project.title;
    span.textContent = 'Add';
    image.src = plusImg;
    addTaskBtn.addEventListener('click', () => {
      addUtil(addTaskBtn.id);
    });

    addTaskBtn.appendChild(image);
    projectsDiv.appendChild(li);
    li.appendChild(projDiv);
    projDiv.appendChild(projTitle);
    projDiv.appendChild(addTaskBtn);
    addTaskBtn.appendChild(span);
    li.appendChild(tasks);
  }
}
