"use strict";
/*
  1. Модифицируйте готовую функцию createPostCard() из задания 
    номер 4 (https://codepen.io/goit-fe-adv/pen/MVPaeZ) так, 
    чтобы она использовала не createElement, а возвращала 
    строку с тегами, которую потом можно будет поставить в документ 
    используя innerHTML или insertAdjacentHTML. Грубо говоря - шаблон поста.
  
  2. Модифицируйте createPostCard(post) так, чтобы она принимала 
    объект post с данными для заполнения полей в карточке. Используя 
    createPostCard создать карточки для 3-х разных постов по данному 
    массиву объектов и повесить их в документ.
  
  3. Создайте функцию createCards(posts), которая принимает массив
    объектов-карточек, вызывает функцию createPostCard(post) столько
    раз, сколько объектов в массиве, сохраняя общий результат и возвращает 
    строку с разметкой всех постов.
  
  4. Повесьте все посты в какой-то уже существующий DOM-узел.
  
  🔔 Подсказка: для того чтобы создать список .actions, необходимо в интерполяции 
    использовать reduce, вернув строку с разметкой. Например:
    
    const string = `<ul>${[1, 2, 3].reduce((acc, x) => acc + `<li>${x}</li>`, '')}</ul>`;
    console.log(string); // '<ul><li>1</li><li>2</li><li>3</li></ul>'
    
    Таким образом на место вызова reduce верентся строка с тегами, которую можно 
    поставить через innerHTML или insertAdjacentHTML.
*/

const posts = [
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    stats: {
      likes: 6,
      dislikes: 2,
      fav: 3
    }
  },
  {
    img: "https://placeimg.com/400/150/nature",
    title: "Post title 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    stats: {
      likes: 124,
      dislikes: 8,
      fav: 36
    }
  },
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    stats: {
      likes: 800,
      dislikes: 36,
      fav: 147
    }
  }
];

const post = document.body;

const addPosts = createCards(posts);
post.innerHTML = addPosts;

function createCards(arr) {
  return arr.reduce(
    (acc, obj) => acc + createPostCard(obj),
    ''
  );
}

function createPostCard({img, title, text, stats}) {
  return `<div class="post">
  <img class="post__image" src="${img}" alt="post image">
  <h2 class="post__title">${title}</h2>
  <p class="post__text">${text}</p>
  <ul class="actions post__actions">
  ${Object.entries(stats).reduce((acc, key) => acc + 
    `<li class="actions__item>
      <button class="actions__btn">
        <span class="actions__icon actions__icon--${key[0]}"></span>
        <span class="actions__count">${key[1]}</span>
      </button>
    </li>`, ``)}</ul>
  </div>`;
}
