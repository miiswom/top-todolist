import trashImg from '../../asset/trash.svg';

export function appendTasks(tasksList, existingTasks, projectTitle) {
  console.log(projectTitle);
  for (let task of existingTasks) {
    /* *********** */
    const taskObj = createTask(projectTitle, task.title)
    /* ********* */
    tasksList.appendChild(taskObj.li);

    // console.log('obj.li', obj.li);
  }
  // console.log("tasksList", tasksList)
}

function removeTask(projectTitle, taskTitle) {
  const existingTasks = JSON.parse(localStorage.getItem(projectTitle));
  console.log(existingTasks);

  let taskIndex;

  existingTasks
    .find((t, i) => {
      if (t.title === taskTitle) {
        taskIndex = i;
      }
    })
    .splice(taskIndex, 1);

  console.log(taskIndex);
  console.log(existingTasks);
  localStorage.setItem(projectTitle, JSON.stringify(existingTasks));
  window.location.reload();
}

export function createTask(projectTitle, taskTitle) {
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
