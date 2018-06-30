"use strict";

/*
  Написать приложение для работы с REST сервисом, 
  все функции делают запрос и возвращают Promise 
  с которым потом можно работать. 
  
  Документацию по бэкенду и пример использования прочитайте 
  в документации https://github.com/trostinsky/users-api#users-api.
  Сделать минимальный графический интерфейс в виде панели с полями и кнопками. 
  А так же панелью для вывода результатов операций с бэкендом.
*/
const apiUrl = "https://test-users-api.herokuapp.com/users/";

const btnGetAllUsers = document.querySelector('.js-btn-get-all-users');
const resultGetAllUsers = document.querySelector(".js-result-get-all-users");

btnGetAllUsers.addEventListener("click", getAllUsers);

const btnGetUserById = document.querySelector('.js-btn-get-user-by-id');
const resultGetUserById = document.querySelector('.js-result-get-user-by-id');
const inputId = document.querySelector('.js-input-id');

btnGetUserById.addEventListener('click', getUserById);

const btnAddUser = document.querySelector('.js-btn-add-user');
const resultAddUser = document.querySelector('.js-result-add-user');
const inputAddUserName = document.querySelector('.js-input-add-user-name');
const inputAddUserAge = document.querySelector('.js-input-add-user-age');

btnAddUser.addEventListener('click', addNewUser);

const btnRemoveUser = document.querySelector('.js-btn-remove-user');
const resultRemoveUser = document.querySelector('.js-result-remove-user');
const inputRremoveUser = document.querySelector('.js-input-remove-user');

btnRemoveUser.addEventListener('click', removeUser);

const btnUpdateUserNname = document.querySelector('.js-btn-update-user');
const resultUpdateUserName = document.querySelector('.js-result-update-user');
const inputUpdateUserId = document.querySelector('.js-input-update-user-id')
const inputUpdateUserAge = document.querySelector('.js-input-update-user-age');
const inputUpdateUserName = document.querySelector('.js-input-update-user-name');

btnUpdateUserNname.addEventListener('click', updateUser);

//функция getAllUsers() - должна вернуть текущий список всех пользователей в БД.
function getAllUsers(evt) {
  evt.preventDefault();
  fetchUsers(apiUrl).then(createUser);
}

//функция getUserById(id) - должна вернуть пользователя с переданным id.
function getUserById(evt) {
  evt.preventDefault();
  fetchUsers(apiUrl).then(userById);
}

//функция addUser(name, age) - должна записывать в БД юзера с полями name и age.
function addNewUser(evt) {
  evt.preventDefault();
  const newUserObj = {
    name: inputAddUserName.value,
    age: inputAddUserAge.value,
  };
  
  fetchUsersPost(newUserObj);
}

//функция removeUser(id) - должна удалять из БД юзера по указанному id.
function removeUser(evt) {
  evt.preventDefault();
  fetchDelUsers(inputRremoveUser.value);
}

//функция updateUser(id, user) - должна обновлять данные пользователя по id. 
function updateUser(evt) {
  evt.preventDefault();
  const updateUserObj = {
    name: inputUpdateUserName.value,
    age: inputUpdateUserAge.value,
  };
  fetchUpdateUsers(updateUserObj, inputUpdateUserId.value);
}

function createUser(arrUsers) {
  const listUser = `<ul>
      ${arrUsers.reduce(
      (acc, user) =>
        acc +
        `<li>Id: ${user.id}, name: ${user.name}, age: ${user.age}</li>`,
      ""
    )}
    </ul>`;
  resultGetAllUsers.innerHTML = listUser;
}

function userById(arrUsers) {
  const userData = arrUsers.find(user => user.id === inputId.value);
  if (userData === undefined) {
    resultGetUserById.textContent = "Пользователь не найден";
  }
  resultGetUserById.textContent = 
    `id: ${userData.id}, name: ${userData.name}, age: ${userData.age}`;
}

function fetchUsers(url) {
  return fetch(url)
    .then(response => {
      if (response.ok) return response.json();
      throw new Error("Error fetching data");
    })
    .then(users => users.data)
    .catch(err => {
      console.error("Error: ", err);
    });
}

function fetchUsersPost(newUserObj) {
  return fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify(newUserObj),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  });
}

function fetchUpdateUsers(updateUserObj, input) {
  return fetch((apiUrl+input), {
    method: 'PUT',
    body: JSON.stringify(updateUserObj),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  });
}

function fetchDelUsers(input) {
  return fetch((apiUrl+input), {
    method: 'DELETE',
  });
}