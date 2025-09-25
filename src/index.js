import './styles.css';
import './reset.css';
import { loadHeader } from './modules/header';
import { loadContent } from './modules/content';
import { loadProjects } from './modules/main-projects';

loadHeader();

loadContent();

loadProjects();