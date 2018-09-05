import { fetchImages } from './services/api';
import gridItemTpl from './templates/grid-item.hbs';
import './styles.css';

const logo = document.querySelector('.logo');
const grid = document.querySelector('.grid');
const form = document.querySelector('.form');
const input = form.querySelector('.input');
const loadMoreBtn = document.querySelector('.load-more');
const fetchedPhotos = [];

let currentPage = 1;
let currentQuery = '';



form.addEventListener('submit', handleFormSubmit);
loadMoreBtn.addEventListener('click', hanelLoadMoreClick);

// ============= Helpers

function handleFormSubmit(e) {
    e.preventDefault();
  
    logo.classList.add('logo-js');
    resetCurrentPage();
    resetPhotosGrid();
  
    currentQuery = input.value;
  
    handleFetch({
      query: currentQuery,
      count: 12,
      page: currentPage,
    });
  
    e.target.reset();
    showLoadMoreBtn();
  }

  function handleFetch(params) {
  
    fetchImages(params).then(photos => {
      fetchedPhotos.push(...photos);
       
      const markup = createGridItems(photos);
      updatePhotosGrid(markup);
      scrollToBottom();
    });
  }

function createGridItems(items) {
  return items.reduce((markup, item) => markup + gridItemTpl(item), '');
}

function updatePhotosGrid(markup) {
  grid.insertAdjacentHTML('beforeend', markup);
}

function hanelLoadMoreClick() {
  incrementCurrentPage();

  handleFetch({
    query: currentQuery,
    count: 12,
    page: currentPage,
  });
}

function showLoadMoreBtn() {
    if (!loadMoreBtn.classList.contains('visible')) {
      loadMoreBtn.classList.add('visible');
    }
}

function scrollToBottom() {
  scrollTo(0, document.body.scrollHeight);
}

function resetPhotosGrid() {
  grid.innerHTML = '';
}

function resetCurrentPage() {
    currentPage = 1;
  }
  
  function incrementCurrentPage() {
    currentPage += 1;
  }








//import Model from './js/model';
//import View from './js/view';
//import Controller from './js/controller';
//import './styles.css';

//const view = new View();
//const model = new Model();

//new Controller(model, view);