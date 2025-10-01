// *** loadProjects ***

import plusImg from '../../asset/plus.svg';
import { addUtil } from '../utils';
import { projectsList } from './projectsList';
import { projectsDiv } from './loadMain';
import { appendTasks } from './appendTasks';


export function loadProjects() {
  for (let project of projectsList) {
    // create li element
    const li = document.createElement('li');
    const projDiv = document.createElement('div');
    const projTitle = document.createElement('h4');
    const addTaskBtn = document.createElement('a');
    const tasksList = document.createElement('ul');
    const image = document.createElement('img');
    const span = document.createElement('span');
    const existingTasks = JSON.parse(localStorage.getItem(project.title));

    console.log(existingTasks.length);

    li.classList.add('project-item');
    li.id = project.title;
    addTaskBtn.id = 'openAddTask';
    projTitle.textContent = project.title;
    span.textContent = 'Add';
    image.src = plusImg;
    addTaskBtn.addEventListener('click', () => {
      addUtil(addTaskBtn.id, project.title);
    });
    tasksList.id = `tasks`;

    appendTasks(tasksList, existingTasks, projTitle.textContent);

    addTaskBtn.appendChild(image);
    projectsDiv.appendChild(li);
    li.appendChild(projDiv);
    projDiv.appendChild(projTitle);
    projDiv.appendChild(addTaskBtn);
    addTaskBtn.appendChild(span);
    li.appendChild(tasksList);
  }
}

// storeTasks({ title: 'new task' });
// storeTasks({ title: 'bla task' });
// storeTasks({ title: 'skdoskdvsdkmf sdkdm' });
