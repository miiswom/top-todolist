const sortTasksDropdown = document.createElement("select");
const tasksSortOptions = [{
  name: "Name",
},
{
  name: "Date",
}];

sortTasksDropdown.classList.add("task-sort-options-dropdown")


function loadTasksDropdownOptions() {
  tasksSortOptions.forEach(sortOption => {
    const opt = document.createElement("option");
    opt.text = sortOption.name;
    sortTasksDropdown.appendChild(opt)
  })
};

export {loadTasksDropdownOptions, sortTasksDropdown}