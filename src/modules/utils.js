import plusImg from '../asset/plus.svg';
import trashImg from '../asset/trash.svg';
import { projectsDiv } from './main/loadMain';

const modal = document.querySelector('#modal');
const closeBtn = document.querySelector('#closeModal');
const addingBtn = document.querySelector('#adding');
const inputText = document.querySelector('#inputText');
const modalInner = document.querySelector('#modalInner');
const errorText = document.querySelector('#errorText');

addingBtn.addEventListener('click', () => {
  addTask();
});

function addUtil(id) {
  const el = document.getElementById(id);
  if (id.startsWith('collapsed')) {
    el.parentElement.parentElement.classList.toggle('collapsed');
  } else if (id.startsWith('open')) {
    modal.classList.remove('hidden');
    modal.classList.add('open');

    closeBtn.addEventListener('click', () => {
      modal.classList.remove('open');
    });
  }
}

function addTask() {
  if (inputText.value.length === 0 && errorText.textContent === '') {
    errorText.textContent = 'Cannot submit an empty task.';
    modalInner.appendChild(errorText);
  } else {
    const tasks = document.querySelector('#tasks');
    const projectTitle = tasks.parentNode.id;
    const newTaskTitle = inputText.value;
    const existingTasks = JSON.parse(localStorage.getItem(projectTitle));
    const newTaskObj = createTask(projectTitle, newTaskTitle);

    existingTasks.push({ title: newTaskTitle });
    localStorage.setItem(projectTitle, JSON.stringify(existingTasks));

    tasks.appendChild(newTaskObj.li);
    inputText.value = '';
    modal.classList.add('hidden');
  }
}

function getExistingTasks(projectTitle) {
  // *** localStorage ***
  const existingTasks = JSON.parse(localStorage.getItem(projectTitle));
  localStorage.setItem(projectTitle, JSON.stringify(existingTasks));
  return existingTasks;
}

function setTodos(projectTitle) {
  let todos = JSON.parse(localStorage.getItem(projectTitle));
  if (todos === null) {
    todos = [];
  }
  return todos;
}

function appendTasks(tasksList, existingTasks, projectTitle) {
  for (let task of existingTasks) {
    const taskObj = createTask(projectTitle, task.title);
    tasksList.appendChild(taskObj.li);
  }
}

function removeTask(projectTitle, taskTitle) {
  const existingTasks = JSON.parse(localStorage.getItem(projectTitle));
  console.log(existingTasks);

  let taskIndex;

  existingTasks.find((t, i) => {
      if (t.title === taskTitle) {
        taskIndex = i;
      }
    })
    
    existingTasks.splice(taskIndex, 1);

  console.log(taskIndex);
  console.log(existingTasks);
  localStorage.setItem(projectTitle, JSON.stringify(existingTasks));
  window.location.reload();
}

function createTask(projectTitle, taskTitle) {
  const taskObj = {
    li: document.createElement('li'),
    checkbox: document.createElement('input'),
    title: document.createElement('p'),
    removeBtn: document.createElement('a'),
    removeImg: document.createElement('img'),
  };

  taskObj.li.classList.add('new-task');
  taskObj.removeBtn.classList.add('small-icons');
  taskObj.checkbox.type = 'checkbox';
  taskObj.title.textContent = taskTitle;
  taskObj.removeImg.src = trashImg;
  taskObj.removeBtn.addEventListener('click', () => {
    removeTask(projectTitle, taskTitle);
  });

  taskObj.removeBtn.appendChild(taskObj.removeImg);
  taskObj.li.appendChild(taskObj.checkbox);
  taskObj.li.appendChild(taskObj.title);
  taskObj.li.appendChild(taskObj.removeBtn);

  return taskObj;
}

function createProject(projectTitle) {
  const projectObj = {
    li: document.createElement('li'),
    container: document.createElement('div'),
    title: document.createElement('h4'),
    addTaskBtn: document.createElement('a'),
    tasksList: document.createElement('ul'),
    image: document.createElement('img'),
    span: document.createElement('span'),
  };

  projectObj.li.classList.add('project-item');
  projectObj.li.id = projectTitle;
  projectObj.addTaskBtn.id = 'openAddTask';
  projectObj.title.textContent = projectTitle;
  projectObj.span.textContent = 'Add';
  projectObj.image.src = plusImg;
  projectObj.addTaskBtn.addEventListener('click', () => {
    addUtil(projectObj.addTaskBtn.id, projectTitle);
  });
  projectObj.tasksList.id = `tasks`;

  projectsDiv.appendChild(projectObj.li);

  projectObj.addTaskBtn.appendChild(projectObj.image);
  projectObj.li.appendChild(projectObj.container);
  projectObj.container.appendChild(projectObj.title);
  projectObj.container.appendChild(projectObj.addTaskBtn);
  projectObj.addTaskBtn.appendChild(projectObj.span);
  projectObj.li.appendChild(projectObj.tasksList);

  return projectObj;
}

export { addUtil, addTask, getExistingTasks, setTodos, appendTasks, removeTask, createTask, createProject };
