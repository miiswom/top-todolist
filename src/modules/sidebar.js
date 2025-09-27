import chevronLeftImg from '../asset/chevron-left.svg';
import plusImg from '../asset/plus.svg';
import searchImg from '../asset/search.svg';
import sliderImg from '../asset/sliders.svg';
import clockImg from '../asset/clock.svg';
import listImg from '../asset/list.svg';
// find due today image
const sidebarNav = document.querySelector('#sidebar-nav');

const sidebarList = [
  {
    icon: chevronLeftImg,
    label: '',
  },
  {
    icon: plusImg,
    label: 'New Project',
  },
  {
    icon: searchImg,
    label: 'Search by keyword...',
  },
  {
    icon: sliderImg,
    label: 'Sort Items',
  },
  // {
  //   icon: todayImg,
  //   label: "Due Today"
  // },
  {
    icon: clockImg,
    label: 'Upcoming',
  },
  {
    icon: listImg,
    label: 'My Projects',
  },
];

export function loadSibarNav() {
  for (let item of sidebarList) {
    // create li element
    const li = document.createElement('li');

    // add list-icons class
    li.classList.add('list-icon');

    // create img element
    const image = document.createElement('img');
    image.src = item.icon;

    // add icons class
    image.classList.add('icons');

    // create p element
    const label = document.createElement('p');
    label.textContent = item.label;

    // append img & p to li
    li.appendChild(image);
    li.appendChild(label);

    // append li to sidebarNav
    sidebarNav.appendChild(li);
  }
}
