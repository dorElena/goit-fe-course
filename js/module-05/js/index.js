"use strict";
/*
  Для создания объекта используйте функцию-конструктор, принимающую следующие параметры:
    - users - массив пользователей. Каждый пользователь это объект с полями:
        id - уникальный идентификатор
        login - почта
        password - пароль
        isActive - статус активности
    - posts - объект с ключами равными id пользователя соцсети SocialBook. Значениями свойств 
      являются массивы постов пользователя. Каждый пост состоит из:
        id - уникальный идентификатор
        text - текст поста
        likes - количество лайков поста
*/

function SocialBook (users = [], posts = {}) {
    this.users = users;
    this.posts = posts;

    // - возвращает массив всех пользователей
    this.getAllUsers = () => {
        this.users.map(user => user)
 
    }
    
    // - ищет и возвращает объект пользователя с совпадающим логином
    this.getUserByLogin = (login) => {
        this.users.find(user => user[this.login])

    }
    

    // - ищет пользователя по id и возвращает 'active'
    // если isActive true, в противном случае возвращает 'inactive'
    this.getUserStatus = (userId) => {

    }
    

    // - принимает объект user с полями email и password и добавляет 
    //ему поля id(используя функцию getId) и isActive (false). Затем добавляет пользователя в 
    //свойство users самого экземпляра
    this.addUser = (email, password) => {
        this.id = getId();
        this.login = email;
        this.password = password;
        this.isActive = false;
        }
    }

    // - удаляет пользователя из массива пользователей по полю id
    this.removeUserById = (userId) => {
        //find
        if (initialUsers.find(user => user === userId)) {
            delete initialUsers.user
        }
    }

    // - возвращает общее количество пользователей
    this.getUsersCount = () => {
        initialUsers.map()
    }

    }


/*
  Используйте следующий массив пользователей при создании экземпляра SocialBook
*/
const initialUsers = [
  { id: "-s19a6hqce", login: "mangozedog@mail.com", password: "qwe123zv", isActive: true },
  { id: "-qkpzenjxe", login: "polysweet@skynet.ze", password: "123zxc78", isActive: true },
  { id: "-e51cpd4di", login: "ajax2k@change.ua", password: "ert234qw", isActive: false }
];

/*
  Используйте следующий объект постов пользователей при создании экземпляра SocialBook
*/
const initialPosts = {
  "-s19a6hqce": [
    { id: "-5sgljaskg", text: "post #1", likes: 3 },
    { id: "-199hb6igr", text: "post #2", likes: 5 },
    { id: "-hy0eyw5qo", text: "post #3", likes: 13 }
  ],
  "-qkpzenjxe": [
    { id: "-5tu69g5rf", text: "post #1", likes: 8 },
    { id: "-bje766393", text: "post #2", likes: 15 }
  ],
  "-e51cpd4di": [
    { id: "-9y6nkmlj4", text: "post #1", likes: 18 },
    { id: "-i03pbhy3s", text: "post #2", likes: 45 }
  ],
};

/*
  Для создания уникального идентификатора для поля id, используйте 
  вспомогательную функцию getId(), возвращающую уникальную строку.
  
  К примеру: const user = { id: getId(), name: 'Mango' };
*/
const getId = () => "-" + Math.random().toString(36).substr(2, 9);

const book = new SocialBook(initialUsers, initialPosts);

book.addPost('-qkpzenjxe', { id: 'xxx', text: 'post #qweqwe', likes: 666 });

console.log(book);