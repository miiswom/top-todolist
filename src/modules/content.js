// *** Content *** //
import {loadSidebar} from "./sidebar";
import { loadMain } from "./main";

export const contentDiv = document.querySelector('#content');


function loadContent() {
loadSidebar();
loadMain();
}

export {loadContent};