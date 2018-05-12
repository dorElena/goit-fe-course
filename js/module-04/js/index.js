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
  this.totalPrice = 0;
  this.customerMoney = 0;
  this.changeAmount = 0;
  
  this.countTotalPrice = function(order) {
    for (let key in order) {
      if (products.hasOwnProperty(key)) {
        this.totalPrice += (products[key] * order[key]);
      }
    }
  };
  
  this.getCustomerMoney = function() {
    do { this.customerMoney = prompt(
      `Общая сумма покупок ${this.totalPrice}. Введите сумму не менее ${this.totalPrice}.`
    );
    if (this.customerMoney === null) {
      break;
    }
   } while (Number.isNaN(Number(this.customerMoney)) || this.customerMoney < this.totalPrice);
  };
  
  this.countChange = function() {
    this.changeAmount = this.customerMoney - this.totalPrice;
  };
  
  this.reset = function() {
    this.totalPrice = 0;
    this.customerMoney = 0;
    this.changeAmount = 0;
  };
  
  this.serve = function(order) {
    this.countTotalPrice(order);
    this.getCustomerMoney();
    if (this.customerMoney >= this.totalPrice) {
      this.countChange();
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