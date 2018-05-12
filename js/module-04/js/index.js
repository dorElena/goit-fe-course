"use strict";
const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  chicken: 50,
  pork: 80,
  cheese: 60,
  tea: 20,
  candy: 25
};

function Cashier(name, products) {
  this.name = name;
  this.products = products;
  //totalPrice - число, общая стоимость покупок текущего покупателя, всегда начинается с 0 
  this.totalPrice = 0;
  //customerMoney - число, сумма введенная пользователем в prompt при запросе денег, всегда начинается с 0
  this.customerMoney = 0;
  //changeAmount - число, сдача, всегда начинается с 0
  this.changeAmount = 0;
  //countTotalPrice(order) - метод, получает список покупок,
  // считает общую сумму исходя из поля products
  this.countTotalPrice = function(order) {
    for (let key in order) {
      if (products.hasOwnProperty(key) === order.hasOwnProperty(key)) {
        this.totalPrice += (products[key] * order[key]);
      }
    }
    return this.totalPrice;
  };
   /*getCustomerMoney() - метод, при вызове показывает prompt, в котором указана общая сумма покупок
   из поля totalPrice. Ожидает ввода пользователя и записывает результат ввода в поле customerMoney.
    Проверить что пользователь ввел число. Также customerMoney должна быть не меньше чем totalPrice. 
    Просит покупателя ввести сумму до тех пор, пока не будет введена корректная сумма - число, 
    равное или больше чем totalPrice. Если пользователь нажмет Cancel, то функция возвращает null.*/
  this.getCustomerMoney = function() {
    this.customerMoney = prompt(
      `Общая сумма покупок ${this.totalPrice}. Введите сумму не менее ${this.totalPrice}.`
    );
    if (this.customerMoney === null) {
      return null;
    }
    if (!Number.isNaN(Number(this.customerMoney)) && this.customerMoney < this.totalPrice) {
      this.getCustomerMoney();
    }
    return this.customerMoney;
  };
  //countChange() - метод, считает сдачу, разницу между общей суммой покупок и деньгами покупателя.
  this.countChange = function() {
    this.changeAmount = this.customerMoney - this.totalPrice;
    return this.changeAmount;
  };
  //reset() - метод, сбрасывает поля totalPrice, customerMoney и changeAmount в 0.
  this.reset = function() {
    this.totalPrice = 0;
    this.customerMoney = 0;
    this.changeAmount = 0;
    return this.totalPrice, this.customerMoney, this.changeAmount;
  };
  /*serve(order) - метод, вызывается при обслуживании пользователя. Получает order - список покупок пользователя,
    вызывает метод countTotalPrice для подсчета общей суммы, getCustomerMoney для запроса денег покупателя,
    countChange для подсчета сдачи при успешном вводе пользователя. При успешном обслуживании возвращает
     строку `Спасибо за покупку, ваша сдача ${сдача}`,
      при неудачном 'Очень жаль, что-то пошло не так, приходите еще'.
       Вызывает метод reset при любом исходе обслуживания.*/
  this.serve = function(order) {
    this.countTotalPrice(order);
    this.getCustomerMoney();
    this.countChange();
    if (this.customerMoney >= this.totalPrice) {
      console.log(`Спасибо за покупку, ваша сдача ${this.changeAmount}`);
    } else {
      console.log("Очень жаль, что-то пошло не так, приходите еще");
    }
    this.reset();
  };
}

const order = { bread: 2, milk: 2, apples: 1, cheese: 1 };

const cashier = new Cashier("Mango", products);

cashier.serve(order);
/*
    При вызове cashier.serve, countTotalPrice посчитает общую сумму равную 20+30+20+60, итого 130
    Далее выполнение идет по вышеописанному алгоритму.
  */
