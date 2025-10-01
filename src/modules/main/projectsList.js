// *** projectsList ***
import { setTodos } from '../utils';

export const projectsList = [
  {
    title: 'Work',
    todos: setTodos('Work'),
  },
  {
    title: 'Groceries',
    todos: setTodos('Groceries'),
  },
  {
    title: 'Lunchboxes',
    todos: setTodos('Lunchboxes'),
  },
];

// ****** store projectList in localStorage ******
projectsList.forEach((project) => {
  // create
  localStorage.setItem(project.title, JSON.stringify(project.todos));
});
