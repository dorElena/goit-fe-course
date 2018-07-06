"use strict";

const laptops = [
  {
    size: 13,
    color: 'white',
    price: 28000,
    releaseDate: 2015,
    name: 'Macbook Air White 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 13,
    color: 'gray',
    price: 32000,
    releaseDate: 2016,
    name: 'Macbook Air Gray 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 13,
    color: 'black',
    price: 35000,
    releaseDate: 2017,
    name: 'Macbook Air Black 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'white',
    price: 45000,
    releaseDate: 2015,
    name: 'Macbook Air White 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'gray',
    price: 55000,
    releaseDate: 2016,
    name: 'Macbook Pro Gray 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'black',
    price: 45000,
    releaseDate: 2017,
    name: 'Macbook Pro Black 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 17,
    color: 'white',
    price: 65000,
    releaseDate: 2015,
    name: 'Macbook Air White 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 17,
    color: 'gray',
    price: 75000,
    releaseDate: 2016,
    name: 'Macbook Pro Gray 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 17,
    color: 'black',
    price: 80000,
    releaseDate: 2017,
    name: 'Macbook Pro Black 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
];

/*
  Реализуйте форму фильтра товаров в каталоге и список отфильтрованных товаров.
  Используйте шаблонизацию для создания карточек товаров.
  
  Есть массив объектов (дальше в задании), каждый из которых описывает 
  ноутбук с определенными характеристиками.
  
  Поля объекта по которым необходимо производить фильтрацию: size, color, releaseDate.
  Поля объекта для отображения в карточке: name, img, descr, color, price, releaseDate.
    
  Изначально есть форма с 3-мя секциями, состоящими из заголовка и группы 
  чекбоксов (разметка дальше в задании). После того как пользователь выбрал 
  какие либо чекбоксы и нажал кнопку Filter, необходимо собрать значения чекбоксов по группам. 
  
  🔔 Подсказка: составьте объект формата
      const filter = { size: [], color: [], releaseDate: [] }
    
  После чего выберите из массива только те объекты, которые подходят 
  под выбраные пользователем критерии и отрендерите список карточек товаров.
  
  Каждый раз когда пользователь фильтрует товары, в списке появляются новые
  карточки, соответствующие текущим критериям фильтра.
*/

const filter = { 
  size: [], 
  color: [], 
  releaseDate: [],
  isActive: false
};

const inputs = document.querySelectorAll('input');
const form = document.querySelector('.js-form');
const cardProduct = document.querySelector('.container');
const btnSubmit = document.querySelector('.btn[type=submit]');
const btnClear = document.querySelector('.btn[type=reset]');
const check = document.querySelector("input[type=checkbox]");

btnSubmit.addEventListener('click', getBtnSubmit);
btnClear.addEventListener('click', resetFilter);

function getBtnSubmit(evt) {
  evt.preventDefault();
  if (!filter.isActive) {
    filter.isActive = true;
    const checkedInput = document.querySelectorAll("input[type=checkbox]:checked");
    getCheckedInputsData(checkedInput);
    rendTops(filter, laptops);
  }
}

function getCheckedInputsData(arr) {
  arr.forEach(input => {
    if (input.name === "size") { filter.size.push(input.value) }
    if (input.name === "color") { filter.color.push(input.value) }
    if (input.name === "release_date") {filter.releaseDate.push(input.value)}
  });
  
  return filter;
}

function resetFilter(evt) {
  evt.preventDefault();
  form.reset();
  filter.size = [];
  filter.color = [];
  filter.releaseDate = [];
  filter.isActive = false;
}

function rendTops(filter, laptops) {
  const source = document.querySelector('#card').innerHTML.trim();
  const template = Handlebars.compile(source);
  const markup = laptops.reduce((acc, laptop) => {
    if (filter.size.includes(`${laptop.size}`) 
      && filter.color.includes(`${laptop.color}`) 
      && filter.releaseDate.includes(`${laptop.releaseDate}`)) {
      console.log(template(laptop))
      acc + template(laptop);      
    }}, '');

  cardProduct.insertAdjacentHTML('afterbegin', markup);
}
