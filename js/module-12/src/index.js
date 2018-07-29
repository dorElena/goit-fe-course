import gridItemTpl from './templetes/grit-item.hbs';
import * as storage from './services/storage';

const grid = document.querySelector('.grid');
const form = document.querySelector('.form');
const input = document.querySelector('.input');

const persistedBookmarks = storage.get();
const fetchedBookmarks = persistedBookmarks ? persistedBookmarks : [];

form.addEventListener('submit', handleFormSubmit);
grid.addEventListener('click', deleteUrlBookmark);



function handleFormSubmit(e) {
    e.preventDefault();
  
    if (fetchedBookmarks.includes(input.value)) {
        alert('такая закладка уже есть');
        return;
    }

    fetchedBookmarks.unshift(input.value);

    bookmarkGid(fetchedBookmarks);
}

function bookmarkGid(bookmarks) {
    const markup = createGridItems(bookmarks);
    updateBookmarkGid(markup);
}

function createGridItems(items) {
    console.log(items);
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