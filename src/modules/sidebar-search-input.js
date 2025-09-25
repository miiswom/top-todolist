import searchImg from "../asset/search.svg";

export const searchInput = document.createElement('li');
const icon = document.createElement("img");

// design module attribute, style, textContent, etc.
searchInput.setAttribute('type', 'text');
searchInput.placeholder = '🔎 Search by keywords...';
searchInput.classList.add('search-input');
