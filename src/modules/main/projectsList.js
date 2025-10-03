// *** projectsList ***
import { appendTasks, createTask, setTodos } from '../utils';

export const projectsList = [
  {
    title: 'work',
    todos: setTodos('Work'),
  },
  {
    title: 'groceries',
    todos: setTodos('Groceries'),
  },
  {
    title: 'lunchboxes',
    todos: setTodos('Lunchboxes'),
  },
];

// ****** store projectList in localStorage ******
projectsList.forEach((project) => {
  // create
  localStorage.setItem(project.title, JSON.stringify(project.todos));
});
