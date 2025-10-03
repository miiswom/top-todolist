// *** loadMain *** //
import { loadProjects } from './loadProjects';
import { createMain } from '../main.js';
  

export function loadMain() {
  createMain()
  loadProjects();
}