"use strict";

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

function getAllUsers(evt) {
  evt.preventDefault();
  fetchUsers(apiUrl).then(createUser);
}

function getUserById(evt) {
  evt.preventDefault();
  fetchUsers(apiUrl).then(userById);
}

function addNewUser(evt) {
  evt.preventDefault();
  const newUserObj = {
    name: inputAddUserName.value,
    age: inputAddUserAge.value,
  };
  
  fetchUsersPost(newUserObj).then(newUser);
}

function removeUser(evt) {
  evt.preventDefault();
  fetchDelUsers(inputRremoveUser.value).then(delUser);
}

function updateUser(evt) {
  evt.preventDefault();
  const updateUserObj = {
    name: inputUpdateUserName.value,
    age: inputUpdateUserAge.value,
  };
  fetchUpdateUsers(updateUserObj, inputUpdateUserId.value).then(upUser);
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
  resultGetUserById.textContent = `id: ${userData.id}, name: ${userData.name}, age: ${userData.age}`;
}

function newUser(user) {
  resultAddUser.textContent = `id: ${user._id}, name: ${user.name}, age: ${user.age}`;
}

function upUser(user) {
  resultUpdateUserName.textContent = `id: ${user.id}, name: ${user.name}, age: ${user.age}`;
}

function delUser(user) {
  if (user.status === 200) {
    resultRemoveUser.textContent = `Юзер удален из БД`;
  }
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
  })
  .then(response => response.json())
  .then(user => user.data)
  .catch(error => console.log('ERROR' + error));
}

function fetchUpdateUsers(updateUserObj, input) {
  return fetch((apiUrl+input), {
    method: 'PUT',
    body: JSON.stringify(updateUserObj),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  })
  .then(response => response.json())
  .then(user => user.data)
  .catch(error => console.log('ERROR' + error));
}

function fetchDelUsers(input) {
  return fetch((apiUrl+input), {
    method: 'DELETE',
  })
  .then(response => response.json())
  .then(user => user)
  .catch(error => console.log('ERROR' + error));
}