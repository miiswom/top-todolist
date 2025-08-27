const projectsSelectDropdown = document.createElement("select");

const projects = [
  {
    name: "Work"
  },
  {
    name: "Groceries"
  }
];

function loadProjectsDropdownOptions() {
  projects.forEach(project => {
    const opt = document.createElement("option");
    opt.text = project.name;
    projectsSelectDropdown.appendChild(opt)
  })
};

export { projectsSelectDropdown, loadProjectsDropdownOptions }