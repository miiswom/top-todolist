// define main module to export:
export const searchInput = document.createElement('input');

// design module attribute, style, textContent, etc.
searchInput.setAttribute('type', 'text');
searchInput.placeholder = '🔎 Search by keywords...';
searchInput.classList.add('search-input');
