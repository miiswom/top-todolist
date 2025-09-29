import chevronLeftImg from '../../asset/chevron-left.svg';
import plusImg from '../../asset/plus.svg';
import searchImg from '../../asset/search.svg';
import sliderImg from '../../asset/sliders.svg';
import clockImg from '../../asset/clock.svg';
import listImg from '../../asset/list.svg';

export const sidebarList = [
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
    id: 'enterSearch',
    icon: searchImg,
    label: 'Search by keyword...',
    classFn: 'openModal',
  },
  // {
  //   id: 'openSort',
  //   icon: sliderImg,
  //   label: 'Sort Items',
  //   classFn: 'openModal',
  // },
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