import gridItemTpl from './templetes/grit-item.hbs';
import * as storage from './services/storage';
import './styles.css';

const grid = document.querySelector('.grid');
const form = document.querySelector('.form');
const input = document.querySelector('.input');

const persistedBookmarks = storage.get();
const fetchedBookmarks = persistedBookmarks ? persistedBookmarks : ['www.google.com', 'github.com','app.schoology.com'];

form.addEventListener('submit', handleFormSubmit);
grid.addEventListener('click', deleteUrlBookmark);

bookmarkGid(fetchedBookmarks);

function handleFormSubmit(e) {
    e.preventDefault();
  
    if (fetchedBookmarks.includes(input.value)) {
        alert('такая закладка уже есть');
        return;
    }

    fetchedBookmarks.unshift(input.value);

    bookmarkGid(fetchedBookmarks);
}

function bookmarkGid(fetchedBookmarks) {
    const markup = createGridItems(fetchedBookmarks);
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