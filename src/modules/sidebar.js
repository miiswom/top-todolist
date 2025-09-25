// *** Sidebar *** //
import { addProjectBtn } from './sidebar-add-project-btn';
import { searchInput } from './sidebar-search-input';
import { sortTasksDropdown, loadTasksDropdownOptions } from './sidebar-tasks-dropdown';

import { projectsSelectDropdown, loadProjectsDropdownOptions } from './sidebar-projects-dropdown';
import { chevronLeft } from './chevron-left';

const sidebar = document.querySelector('#sidebar');
const sidebarNav = document.querySelector('#sidebar-nav');

const dueTodayTitle = document.createElement('h3');
const upcomingTitle = document.createElement('h3');

sidebar.classList.add('#sidebar');

dueTodayTitle.textContent = 'Today';
dueTodayTitle.classList.add('selected-title');

upcomingTitle.textContent = 'Upcoming';

// *******/ LOGICS ********
function loadSidebar() {
  sidebar.appendChild(sidebarNav);
  sidebarNav.appendChild(chevronLeft);
  sidebarNav.appendChild(addProjectBtn);
  sidebarNav.appendChild(searchInput);
  sidebarNav.appendChild(sortTasksDropdown);
  sidebarNav.appendChild(dueTodayTitle);
  sidebarNav.appendChild(upcomingTitle);
  sidebarNav.appendChild(projectsSelectDropdown);
  loadTasksDropdownOptions();
  loadProjectsDropdownOptions();
}

export { loadSidebar };
