// *** loadProjects ***
import { createProject, appendTasks } from '../utils';
import { projectsList } from './projectsList';

export function loadProjects() {
  for (let project of projectsList) {
    const projectObj = createProject(project.title);
    const existingTasks = JSON.parse(localStorage.getItem(project.title));
    appendTasks(projectObj.tasksList, existingTasks, project.title);
  }
}
