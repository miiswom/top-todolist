// *** loadSibarNav ***

import { sidebarList } from './sidebarList';
import { addUtil } from '../utils';

const sidebarNav = document.querySelector('#sidebar-nav');

export function loadSibarNav() {
  for (let item of sidebarList) {
    // create elements
    const li = document.createElement('li');
    const image = document.createElement('img');
    const label = document.createElement('p');

    // add classes, textContent and attributes to elements
    li.id = item.id;
    li.classList.add('list-icon');
    li.addEventListener('click', () => {
      addUtil(item.id, item.classFn);
    });
    image.src = item.icon;
    image.classList.add('icons');
    label.textContent = item.label;

    // appending 
    li.appendChild(image);
    li.appendChild(label);
    sidebarNav.appendChild(li);
  }
}
