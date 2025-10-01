// *** projectsList ***

export const projectsList = [
  {
    title: 'Work',
    todos: setTodos('Work'),
  },
  {
    title: 'Groceries',
    todos: [],
  },
  {
    title: 'Lunchboxes',
    todos: [],
  },
];
// ****** localStorage ******
projectsList.forEach((project) => {
  localStorage.setItem(project.title, JSON.stringify(project.todos));
});

function setTodos(proj) {
  let todos = JSON.parse(localStorage.getItem(proj));
  console.log(todos === null);
  if (todos === null) {
    todos = [];
  } else {
    console.log("todos", todos)
    console.log(JSON.stringify(document.body))
  }
  return todos;
}
