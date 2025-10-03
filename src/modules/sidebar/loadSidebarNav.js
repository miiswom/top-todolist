// *** loadSibarNav ***

import { sidebarList } from './sidebarList';
import { createNavItem } from '../utils';

const sidebarNav = document.querySelector('#sidebar-nav');

export function loadSibarNav() {
  for (let item of sidebarList) {
    const newNavItem = createNavItem(item);
    sidebarNav.appendChild(newNavItem.li);
  }
}
