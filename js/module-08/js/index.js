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
    <img src="${obj.preview}" data_fullview="${obj.fullview}" alt="${obj.alt}">
    </li>`, "")}
  </ul>`;
}

const fullview = document.querySelector(".fullview");
const previewList = document.querySelector(".preview");
const previewItem = document.querySelector(".preview-item");
const previewItems = document.querySelectorAll("li");

const imgActive = previewItem.firstElementChild;
imgActive.classList.add("js-active");
const atributsImgActive = imgActive.attributes;
fullview.innerHTML = `<img src=${atributsImgActive.data_fullview.value} alt=${atributsImgActive.alt.value}>`;

previewList.addEventListener('click', handlePreviewClik);

function handlePreviewClik({target}) {
  const nodaName = target.nodeName;

  if (nodaName !== "IMG") return;

  setActive(previewItems, fullview, target);
}

function setActive(previewItems, fullview, target) {
  setActiveImg(previewItems, target);
  setActiveFul(fullview, target);
}

function setActiveImg(previewItems, target) {
  previewItems.forEach(item => {
    const itemChild = item.firstElementChild;
    if (itemChild === target) {
      itemChild.classList.add("js-active");
    } else {
      itemChild.classList.remove("js-active");
    }
  });
}

function setActiveFul(fullview, target) {
  const fullviewChild = fullview.firstElementChild;
  galleryItems.reduce((acc, obj) => {
    if (obj.alt === target.alt) {
      fullviewChild.setAttribute('src', obj.fullview);
      fullviewChild.setAttribute('alt', obj.alt);
    }
  }) 
}