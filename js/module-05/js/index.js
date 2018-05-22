"use strict";

function SocialBook (users = [], posts = {}) {
  this.users = users;
  this.posts = posts;

  this.getAllUsers = (users) => {
    return this.users;
  };
    
  this.getUserByLogin = (users, login) => {
    return this.users.find(user => user.login === login);
  };
  
  this.getUserStatus = (userId) => {
    let userOb;
    this.users.find(user => {
      if (Object.values(user).includes(userId)) {
        return userOb = user;
      }
    });
    let userStatus;
    if (userOb.isActive) {
        userStatus = "active";
      } else {
        userStatus = "inactive";
    }
    return userStatus;
  };
  
  this.removeUserById = (userId) => {
    let indexUser;
    this.users.filter(user => {
      if (Object.values(user).includes(userId)) {
        return indexUser = this.users.indexOf(user);
      }
    });
    
    return this.users = this.users.splice(indexUser, 1);
  };

  this.getUsersCount = () => {
    return this.users.length;
  };

  this.addUser = (user) => {
    user.isActive = false;
    user.id = getId();

    this.users.push(user);

    return this.users;
  };
};

const initialUsers = [
  { id: "-s19a6hqce", login: "mangozedog@mail.com", password: "qwe123zv", isActive: true },
  { id: "-qkpzenjxe", login: "polysweet@skynet.ze", password: "123zxc78", isActive: true },
  { id: "-e51cpd4di", login: "ajax2k@change.ua", password: "ert234qw", isActive: false }
];

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

const getId = () => "-" + Math.random().toString(36).substr(2, 9);

const book = new SocialBook(initialUsers, initialPosts);

console.log(book.getUserStatus("-e51cpd4di"));
console.log(book.removeUserById("-e51cpd4di"));
console.log(book.addUser({login: 'qweqwe@gmai.com', password: 'qweqwe'}));
console.log(book);