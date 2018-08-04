import gridItemTpl from './templetes/grit-item.hbs';
import * as storage from './services/storage';
import { fetchUrl } from './services/api';
import './styles.css';

const grid = document.querySelector('.grid');
const form = document.querySelector('.form');
const input = document.querySelector('.input');

const persistedBookmarks = storage.get();
const fetchedBookmarks = persistedBookmarks ? persistedBookmarks : [];

form.addEventListener('submit', handleFormSubmit);
grid.addEventListener('click', deleteUrlBookmark);

bookmarkGid(fetchedBookmarks);

handleFetch();

function handleFormSubmit(e) {
    e.preventDefault();

    resetGrid();
  
    if (fetchedBookmarks.includes(input.value)) {
        alert('такая закладка уже есть');
        return;
    }

    fetchedBookmarks.unshift(input.value);

    bookmarkGid(fetchedBookmarks);
    
    
    
    e.target.reset();
}

function bookmarkGid(fetchedBookmarks) {
    const markup = createGridItems(fetchedBookmarks);
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

function resetGrid() {
    grid.innerHTML = '';
}

function handleFetch() {
      
    fetchUrl().then(url => {
      fetchedBookmarks.push(...url);
      storage.set(fetchedBookmarks);
  
      const markup = createGridItems(photos);
      updatePhotosGrid(markup);
      
    });
  }