"use strict";
const galleryItems = [
  { preview: 'img/preview-1.jpg', fullview: 'img/fullview-1.jpg', alt: "alt text 1" },
  { preview: 'img/preview-2.jpg', fullview: 'img/fullview-2.jpg', alt: "alt text 2" },
  { preview: 'img/preview-3.jpg', fullview: 'img/fullview-3.jpg', alt: "alt text 3" },
  { preview: 'img/preview-4.jpg', fullview: 'img/fullview-4.jpg', alt: "alt text 4" },
  { preview: 'img/preview-5.jpg', fullview: 'img/fullview-5.jpg', alt: "alt text 5" },
  { preview: 'img/preview-6.jpg', fullview: 'img/fullview-6.jpg', alt: "alt text 6" },
];

const gallery = document.querySelector('.js-image-gallery');

const addGallery = createGallery(galleryItems);
gallery.innerHTML = addGallery;

function createGallery(arr) {
  return `<div class="fullview">
  </div>
  <ul class="preview">
  ${arr.reduce((acc, obj) => acc + 
    `<li class="preview-item">
    <img src="${obj.preview}" data-fullview="${obj.fullview}" alt="${obj.alt}">
    </li>`, "")}
  </ul>`;
}

const fullview = document.querySelector(".fullview");
const previewList = document.querySelector(".preview");
const previewItem = document.querySelector(".preview-item");
const previewItems = document.querySelectorAll("li");

const itemChild = previewItem.firstElementChild;
itemChild.classList.add("js-active");
fullview.innerHTML = `<img src=${itemChild.dataset.fullview} alt=${itemChild.alt}>`;

previewList.addEventListener('click', setActiveImg);

function setActiveImg(event) {
  const nodaName = event.target.nodeName;

  if (nodaName !== "IMG") return;
  
  previewItems.forEach(item => {
    if (item.firstElementChild === event.target) {
      item.firstElementChild.classList.add("js-active");
      fullview.innerHTML = `<img src=${item.firstElementChild.dataset.fullview} alt=${item.firstElementChild.alt}>`;
    } else {
      item.firstElementChild.classList.remove("js-active");
    }
  });
}