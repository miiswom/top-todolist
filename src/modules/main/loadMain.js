// *** loadMain *** //
import { loadProjects } from './loadProjects';
import { createMain } from '../main.js';
  

function loadMain() {
  createMain()
  loadProjects();
}

export { loadMain };
