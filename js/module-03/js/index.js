'use strict';
/*
  Есть массив logins с логинами пользователей.
  Написать функцию, addLogin(logins, login) которая:
    1) Получает новый логин и массив всех логинов как аргументы
  
    2) Проверяет валидность логина используя вспомогательную 
       функцию checkLoginValidity(login), которая проверяет 
       количество символов логина и возвращает true если логин 
       подходит под условие длины от 4-х до 16-ти символов 
       включительно, и false если не подходит.
    3) Если логин не валиден, прекратить исполнение функции addLogin 
       и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'.
    4) Если логин валиден, проверить уникальность логина с помощью 
       функции checkIfLoginExists(logins, login), которая проверяет наличие 
       логина в массиве logins, возвращая false если такого логина
       в массиве еще нет, и true если есть.
     
    5) Если checkIfLoginExists вернет false, добавить новый логин 
       в logins и вернуть строку 'Логин успешно добавлен!'. 
       Если checkIfLoginExists вернет true, тогда addLogin не добавляет 
       логин в массив и возвращает строку 'Такой логин уже используется!'.
*/

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const login = function() {
    let val = prompt("Введите логин");
    return val;
};

const checkIfLoginExists = function(arr, val) {
    if (!logins.includes(val)) {
        return false;
    } else {
        return true;
    }
};

const checkLoginValidity = function(val) {
    if (val.length <= 4 && val.length >= 16) {
        return false;
    } else {
        return true;
    }
};

const addLogin = function(val, arr) {
    
    if (checkLoginValidity(val) === false) {
    console.log('Ошибка! Логин должен быть от 4 до 16 символов');
    } 
    else if (checkIfLoginExists(arr, val) === false) {
    logins.push(val);
        console.log('Логин успешно добавлен!');
        console.log(logins);
    } 
    else {
        console.log('Такой логин уже используется!');
    };
};

const log = login();
addLogin(log, logins);