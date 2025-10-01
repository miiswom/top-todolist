// *** loadProjects ***

import plusImg from '../../asset/plus.svg';
import { addUtil, getStoredTasks } from '../utils';
import { projectsList } from './projectsList';
import { projectsDiv } from './loadMain';
import { todoObject } from './taskObject';

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
    li.id = project.title;

    const stored = getStoredTasks(project.title);
    appendTasks(tasks, stored);
    // storedTasks.forEach((task) => {
    //   const newTask = document.createElement('li');
    //   const checkbox = document.createElement('input');
    //   const title = document.createElement('p');

    //   newTask.classList.add('new-task');
    //   checkbox.type = 'checkbox';
    //   title.textContent = inputText.value;

    //   tasks.appendChild(newTask);
    // });

    addTaskBtn.id = 'openAddTask';
    projTitle.textContent = project.title;
    span.textContent = 'Add';
    image.src = plusImg;
    addTaskBtn.addEventListener('click', () => {
      addUtil(addTaskBtn.id);
    });
    tasks.id = 'tasks';

    addTaskBtn.appendChild(image);
    projectsDiv.appendChild(li);
    li.appendChild(projDiv);
    projDiv.appendChild(projTitle);
    projDiv.appendChild(addTaskBtn);
    addTaskBtn.appendChild(span);
    li.appendChild(tasks);
  }
}

function appendTasks(tasks, proj) {
  for (let task of proj) {
    console.log('task', task);
    const t = document.createElement('li');
    const checkbox = document.createElement('input');
    const title = document.createElement('p');

    t.classList.add('new-task')
    checkbox.type = 'checkbox';
    title.textContent = task.title;

    t.appendChild(checkbox);
    t.appendChild(title);
    tasks.appendChild(t);
  }
}

// storeTasks({ title: 'new task' });
// storeTasks({ title: 'bla task' });
// storeTasks({ title: 'skdoskdvsdkmf sdkdm' });
