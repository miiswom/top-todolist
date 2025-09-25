// *** Sidebar *** //
import { addProjectBtn } from './sidebar-add-project-btn';
import { searchInput } from './sidebar-search-input';
import {
  sortTasksDropdown,
  loadTasksDropdownOptions,
} from './sidebar-tasks-dropdown';
import {
  projectsSelectDropdown,
  loadProjectsDropdownOptions,
} from './sidebar-projects-dropdown';
import chevronLeftImg from '../asset/chevron-left.svg';

const sidebar = document.querySelector('#sidebar');

const dueTodayTitle = document.createElement('h3');
const upcomingTitle = document.createElement('h3');
const chevronLeft = document.createElement('img');

sidebar.classList.add('#sidebar');

dueTodayTitle.textContent = 'Today';
dueTodayTitle.classList.add('selected-title');

upcomingTitle.textContent = 'Upcoming';
chevronLeft.src = chevronLeftImg;
chevronLeft.classList.add('chevron-left');

// *******/ LOGICS ********
export function loadSidebar() {
  sidebar.appendChild(chevronLeft);
  sidebar.appendChild(addProjectBtn);
  sidebar.appendChild(searchInput);
  sidebar.appendChild(sortTasksDropdown);
  sidebar.appendChild(dueTodayTitle);
  sidebar.appendChild(upcomingTitle);
  sidebar.appendChild(projectsSelectDropdown);
  loadTasksDropdownOptions();
  loadProjectsDropdownOptions();
}
