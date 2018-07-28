import gridItemTpl from './templates/grid-item.hbs';

const grid = document.querySelector('.grid');
const form = document.querySelector('.form');
const input = document.querySelector('.input');

const bookmarks = [];

form.addEventListener('submit', handleFormSubmit);
grid.addEventListener('click', deleteUrlBookmark);



function handleFormSubmit(e) {
    e.preventDefault();
  
    if (bookmarks.includes(input.value)) {
        alert('такая закладка уже есть');
        break;
    }

    bookmarks.unshift(input.value);

    bookmarkGid(bookmarks);
}

function createGridItems(items) {
    return items.reduce((markup, item) => markup + gridItemTpl(item), '');
}

function bookmarkGid(bookmarks) {
    const markup = createGridItems(bookmarks);
    updateBookmarkGid(markup);
}
  
  function createGridItems(items) {
    return items.reduce((markup, item) => markup + gridItemTpl(item), '');
}

function updateBookmarkGid(markup) {
    grid.insertAdjacentHTML('beforeend', markup);
}

function deleteUrlBookmark({ target }) {
    if (target.nodeName === 'BUTTON') {
        target.parentNode.remove();
    }
}