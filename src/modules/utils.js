const modal = document.querySelector('#modal');
const closeBtn = document.querySelector('#closeModal');
const addingBtn = document.querySelector('#adding');
const inputText = document.querySelector('#inputText');
const modalInner = document.querySelector('#modalInner');
const errorText = document.querySelector('#errorText');
import { projectsList } from "./main/projectsList";

addingBtn.addEventListener('click', () => {
  addTask();
});

export function addUtil(id ) {
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

export function addTask() {
  if (inputText.value === '' && errorText.textContent === '') {
    errorText.textContent = 'Cannot submit an empty task.';
    modalInner.appendChild(errorText);
  } else {

    /*   ****************   */
    const tasks = document.querySelector('#tasks');
    const newTask = document.createElement('li');
    const checkbox = document.createElement('input');
    const title = document.createElement('p');

    newTask.classList.add('new-task');
    checkbox.type = 'checkbox';
    title.textContent = inputText.value;
    /*   ****************   */

    const existingTasks = getExistingTasks(tasks.parentNode.id);
    console.log('parentNode', tasks.parentNode.id);

    existingTasks.push({
      title: title.textContent,
    });

    localStorage.setItem(tasks.parentNode.id, JSON.stringify(existingTasks));

    newTask.appendChild(checkbox);
    newTask.appendChild(title);
    tasks.appendChild(newTask);
    inputText.value = '';
    modal.classList.add('hidden');
  }
}

export function getExistingTasks(projectTitle) {
  // *** localStorage ***
  const existingTasks = JSON.parse(localStorage.getItem(projectTitle));
  localStorage.setItem(projectTitle, JSON.stringify(existingTasks));
  return existingTasks;
}

export function setTodos(projectTitle) {
  let todos = JSON.parse(localStorage.getItem(projectTitle));
  if (todos === null) {
    todos = [];
  }
  return todos;
}
