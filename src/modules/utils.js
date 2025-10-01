import { taskObject } from "./main/taskObject";
const modal = document.querySelector('#modal');
const closeBtn = document.querySelector('#closeModal');
const addingBtn = document.querySelector('#adding');
const inputText = document.querySelector('#inputText');
const modalInner = document.querySelector('#modalInner');
const errorText = document.querySelector('#errorText');

addingBtn.addEventListener('click', () => {
  addTask();
});

export function addUtil(id, classFn) {
  const el = document.getElementById(id);
  if (id.startsWith('collapsed')) {
    el.parentElement.parentElement.classList.toggle(classFn);
  } else if (id.startsWith('open')) {
    modal.classList.remove('hidden');
    modal.classList.add('open');

    closeBtn.addEventListener('click', () => {
      modal.classList.remove('open');
    });
  }
}

export function addTask(e) {
  if (inputText.value === '' && errorText.textContent === '') {
    errorText.textContent = 'Cannot submit an empty task.';
    // errorText.classList.add('error-text');
    modalInner.appendChild(errorText);
  } else if (inputText.value.length > 0) {
    console.log(taskObject.checkbox)
    console.log(taskObject.title)
    const tasks = document.querySelector('#tasks');
    const newTask = document.createElement('li');
    const checkbox = document.createElement('input');
    const title = document.createElement('p');

    newTask.classList.add('new-task');
    checkbox.type = 'checkbox';
    title.textContent = inputText.value;

    const stored = getStoredTasks(tasks.parentNode.id);
    console.log('stored', stored);

    stored.push({
      title: title.textContent,
    });

    localStorage.setItem(tasks.parentNode.id, JSON.stringify(stored));

    newTask.appendChild(checkbox);
    newTask.appendChild(title);
    tasks.appendChild(newTask);
    inputText.value = '';
    modal.classList.add('hidden');
  }
}

export function getStoredTasks(project) {
  // *** localStorage
  const stored = JSON.parse(localStorage.getItem(project));
  // stored.push(task);
  localStorage.setItem(project, JSON.stringify(stored));
  console.log(JSON.stringify(stored));
  return stored;
}

export function setTodos(proj) {
  let todos = JSON.parse(localStorage.getItem(proj));
  console.log(todos === null);
  if (todos === null) todos = [];
  return todos;
}
