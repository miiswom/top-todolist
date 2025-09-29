import chevronLeftImg from '../asset/chevron-left.svg';
import plusImg from '../asset/plus.svg';
import searchImg from '../asset/search.svg';
import sliderImg from '../asset/sliders.svg';
import clockImg from '../asset/clock.svg';
import listImg from '../asset/list.svg';

const sidebar = document.querySelector('#sidebar');

const modal = document.querySelector('#modal');
const closeBtn = document.querySelector('#closeModal');

const sidebarNav = document.querySelector('#sidebar-nav');

// sidebarNav.children.item(0).addEventListener("click", () => {
//   sidebar.classList.toggle('collapsed')
// })

console.log(sidebarNav.children.namedItem('lool'));

const sidebarList = [
  {
    id: 'collapsedLeft',
    icon: chevronLeftImg,
    label: '',
    classFn: 'collapsed',
  },
  {
    id: 'openAddProject',
    icon: plusImg,
    label: 'New Project',
    classFn: 'openModal',
  },
  {
    id: 'openSearch',
    icon: searchImg,
    label: 'Search by keyword...',
    classFn: 'openModal',
  },
  {
    id: 'openSort',
    icon: sliderImg,
    label: 'Sort Items',
    classFn: 'openModal',
  },
  // {
  //   icon: todayImg,
  //   label: "Due Today"
  // },
  {
    id: 'upcoming',
    icon: clockImg,
    label: 'Upcoming',
    classFn: 'openModal',
  },
  {
    id: 'projectsDropdown',
    icon: listImg,
    label: 'My Projects',
    classFn: 'openModal',
  },
];

export function loadSibarNav() {
  for (let item of sidebarList) {
    console.log('id', item.id);
    // create li element
    const li = document.createElement('li');
    li.id = item.id;

    // add list-icons class to li element
    li.classList.add('list-icon');
    // li.classList.add(item.classFn);
    li.addEventListener('click', () => {
      addClassFn(item.id, item.classFn);
    });

    // create img element
    const image = document.createElement('img');
    image.src = item.icon;

    // add icons class to img element
    image.classList.add('icons');

    // create p element
    const label = document.createElement('p');
    label.textContent = item.label;

    // append image & label to li
    li.appendChild(image);
    li.appendChild(label);

    // append li element to sidebarNav
    sidebarNav.appendChild(li);
  }
}

function addClassFn(id, classFn) {
  const el = document.getElementById(id);
  if (id.startsWith('collapsed')) {
    el.parentElement.parentElement.classList.toggle('collapsed');
  } else if (id.startsWith('open')) {
    modal.classList.remove('hidden');
    modal.classList.add('open');

    console.log(modal);
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('open');
    });
  }
}
