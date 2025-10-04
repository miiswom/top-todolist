import plusImg from '../asset/plus.svg';
import trashImg from '../asset/trash.svg';
import { mainObj } from './main';
import { loadMain } from './main/loadMain';

const modal = document.querySelector('#modal');
const closeBtn = document.querySelector('#closeModal');
const addingBtn = document.querySelector('#adding');
const inputText = document.querySelector('#inputText');
const modalInner = document.querySelector('#modalInner');
const errorText = document.querySelector('#errorText');
let currentProjectTitle = '';

addingBtn.addEventListener('click', () => {
  addTask();
});

function addUtil(id, projectTitle) {
  const el = document.getElementById(id);
  if (id.startsWith('collapsed')) {
    el.parentElement.parentElement.classList.toggle('collapsed');
  } else if (id.startsWith('open')) {
    modal.classList.remove('hidden');
    modal.classList.add('open');
    currentProjectTitle = projectTitle;
    console.log(currentProjectTitle);
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('open');
    });
  }
}

function addTask() {
  // if (inputText.value.length === 0 && errorText.textContent === '') {
  //   errorText.textContent = 'Cannot submit an empty task.';
  //   modalInner.appendChild(errorText);
  // } else {
  inputText.required;
  console.log(inputText.required);

  const tasks = document.querySelector(`#${currentProjectTitle}`);
  const newTaskTitle = inputText.value;
  console.log('newTaskTitle', newTaskTitle);

  const existingTasks = JSON.parse(localStorage.getItem(currentProjectTitle));
  console.log('existingTasks', existingTasks);
  console.log('projectTitle', currentProjectTitle);

  const newTaskObj = createTask(currentProjectTitle, newTaskTitle, tasks);

  existingTasks.push({ title: newTaskTitle });
  localStorage.setItem(currentProjectTitle, JSON.stringify(existingTasks));

  tasks.appendChild(newTaskObj.li);
  inputText.value = '';
  modal.classList.add('hidden');
  //}
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
    const taskObj = createTask(projectTitle, task.title, tasksList);
    tasksList.appendChild(taskObj.li);
  }
}

function removeTask(projectTitle, taskTitle, tasksList) {
  const existingTasks = JSON.parse(localStorage.getItem(projectTitle));

  const taskIndex = existingTasks.map((t) => t.title).indexOf(taskTitle);
  console.log(taskIndex, taskTitle);
  console.log(existingTasks);

  existingTasks.splice(taskIndex, 1);
  console.log(existingTasks);
  localStorage.setItem(projectTitle, JSON.stringify(existingTasks));
  window.location.reload()
  // appendTasks(tasksList, existingTasks, projectTitle)
}

function createTask(projectTitle, taskTitle, tasksList) {
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
    removeTask(projectTitle, taskTitle, tasksList);
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
  projectObj.addTaskBtn.class = 'openAddTask';
  projectObj.title.textContent = projectTitle.toUpperCase();
  projectObj.span.textContent = 'Add';
  projectObj.image.src = plusImg;
  projectObj.addTaskBtn.addEventListener('click', () => {
    addUtil(projectObj.addTaskBtn.class, projectTitle);
  });
  projectObj.tasksList.id = projectTitle;

  mainObj.projectsDiv.appendChild(projectObj.li);

  projectObj.addTaskBtn.appendChild(projectObj.image);
  projectObj.li.appendChild(projectObj.container);
  projectObj.container.appendChild(projectObj.title);
  projectObj.container.appendChild(projectObj.addTaskBtn);
  projectObj.addTaskBtn.appendChild(projectObj.span);
  projectObj.li.appendChild(projectObj.tasksList);

  return projectObj;
}

function createNavItem(item) {
  const navItemObj = {
    li: document.createElement('li'),
    image: document.createElement('img'),
    label: document.createElement('p'),
  };

  navItemObj.li.id = item.id;
  navItemObj.li.classList.add('list-icon');
  navItemObj.li.addEventListener('click', () => {
    addUtil(item.id, item.classFn);
  });
  navItemObj.image.src = item.icon;
  navItemObj.image.classList.add('icons');
  navItemObj.label.textContent = item.label;

  navItemObj.li.appendChild(navItemObj.image);
  navItemObj.li.appendChild(navItemObj.label);

  return navItemObj;
}

export {
  addUtil,
  addTask,
  getExistingTasks,
  setTodos,
  appendTasks,
  removeTask,
  createTask,
  createProject,
  createNavItem,
};
