import gridItemTpl from './templetes/grit-item.hbs';
import * as storage from './services/storage';
import './styles.css';

const grid = document.querySelector('.grid');
const form = document.querySelector('.form');
const input = form.querySelector('.input');

const bookmarks = storage.get() || [];

form.addEventListener('submit', handleFormSubmit);
grid.addEventListener('click', deleteBookmark);

init();

function handleFormSubmit(e) {
    e.preventDefault();

    const url = input.value;
    
    const bookmark = {
        id: Date.now(),
        url
    };
    
    bookmarks.unshift(bookmark);
    storage.set(bookmarks);
    bookmarkGrid(bookmarks);
    form.reset();
}

function bookmarkGrid(arr) {
    const markup = createGridItems(arr);
    updateBookmarkGrid(markup);
}

function createGridItems(arr) {
    return arr.reduce((markup, item) => markup + gridItemTpl(item), '');
}

function updateBookmarkGrid(markup) {
    grid.innerHTML = "";
    grid.insertAdjacentHTML('beforeend', markup);
}

function deleteBookmark({ target }) {
    if (target.nodeName === 'BUTTON') {
        const idBookmark = Number(target.parentNode.getAttribute('date-set'));
        const newBookmarks = storage.get().filter(bookmark => bookmark.id !== idBookmark);
        storage.set(newBookmarks);
        target.parentNode.remove();
    }
}

function init() {
    if (bookmarks) {
        bookmarkGrid(bookmarks);
    }
}