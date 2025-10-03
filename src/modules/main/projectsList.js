// *** projectsList ***
import { setTodos } from '../utils';

export const projectsList = [
  {
    title: 'work',
    todos: setTodos('work'),
  },
  {
    title: 'groceries',
    todos: setTodos('groceries'),
  },
  {
    title: 'lunchboxes',
    todos: setTodos('lunchboxes'),
  },
];

// ****** store projectList in localStorage ******
projectsList.forEach((project) => {
  // create
  localStorage.setItem(project.title, JSON.stringify(project.todos));
});
