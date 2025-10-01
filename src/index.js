import './styles.css';
import './reset.css';
import './modal.css';
import { loadHeader } from './modules/header/loadHeader';
import { loadSibarNav } from './modules/sidebar/loadSidebarNav';
import { loadMain } from './modules/main/loadMain';

loadHeader();
loadSibarNav();
loadMain();

// comment