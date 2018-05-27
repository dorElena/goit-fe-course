"use strict";

class Hamburger {
  constructor ({size, stuffing}) { 
  this.size = size;
  this.stuffing = stuffing;
  this.topping = [];
  }
}

Hamburger.SIZE_SMALL = 'SIZE_SMALL';
Hamburger.SIZE_LARGE = 'SIZE_LARGE';

Hamburger.SIZES = {
  [Hamburger.SIZE_SMALL]: {
    price: 30,
    calories: 50,
  },
  [Hamburger.SIZE_LARGE]: {
    price: 50,
    calories: 100,
  },
};

Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
Hamburger.STUFFING_SALAD = 'STUFFING_SALAD';
Hamburger.STUFFING_MEAT = 'STUFFING_MEAT';

Hamburger.STUFFINGS = {
  [Hamburger.STUFFING_CHEESE]: {
    price: 15,
    calories: 20,
  },
  [Hamburger.STUFFING_SALAD]: {
    price: 20,
    calories: 5,
  },
  [Hamburger.STUFFING_MEAT]: {
    price: 35,
    calories: 15,
  },
};
					
Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
Hamburger.TOPPING_SAUCE = 'TOPPING_SAUCE';

Hamburger.TOPPINGS = {
  [Hamburger.TOPPING_SPICE]: {
    price: 10,
    calories: 0,
  },
  [Hamburger.TOPPING_SAUCE]: {
    price: 15,
    calories: 5,
  },
};

Hamburger.prototype.addTopping = function (topping) {
  
  if (this.topping.length === 0) {
    this.topping.push(topping);
  } else if (!this.topping.includes(topping)) {
    this.topping.push(topping);
  } else {
    return this.topping;
  }
}

Hamburger.prototype.removeTopping = function (topping) { 
  if (Object.values(this).includes(topping)) {
    return Object.values(this).filter(val => val !== topping);
  }
}

Hamburger.prototype.getToppings = function () { 
  return this.topping;
}

Hamburger.prototype.getSize = function () { 
  return this.size;
}

Hamburger.prototype.getStuffing = function () { 
  return this.stuffing;
}

Hamburger.prototype.calculatePrice = function () { 
  let calculatePrice = 0;
  let calculatePriceSize = Hamburger.SIZES[this.getSize()]['price'];
  let calculatePriceStuffings = Hamburger.STUFFINGS[this.getStuffing()]['price'];
  let calculatePriceToppings = 0;
  if (this.getToppings().length === 0) {
    calculatePriceToppings;
  } else if (this.getToppings().length === 1) {
    calculatePriceToppings = Hamburger.TOPPINGS[this.getToppings()[0]]['price'];
  } else {
    calculatePriceToppings = Hamburger.TOPPINGS[this.getToppings()[0]]['price'] + 
    Hamburger.TOPPINGS[this.getToppings()[1]]['price'];
  }
  
  calculatePrice = calculatePriceSize + calculatePriceStuffings + calculatePriceToppings;

  return calculatePrice;
}

Hamburger.prototype.calculateCalories = function () { 
  let calculateCalories = 0;
  let calculateCaloriesSize = Hamburger.SIZES[this.getSize()]['calories'];
  let calculateCaloriesStufings = Hamburger.STUFFINGS[this.getStuffing()]['calories'];
  let calculateCaloriesToppings = 0;
  if (this.getToppings().length === 0) {
    calculateCaloriesToppings;
  } else if (this.getToppings().length === 1) {
    calculateCaloriesToppings = Hamburger.TOPPINGS[this.getToppings()[0]]['calories'];
  } else {
    calculateCaloriesToppings = Hamburger.TOPPINGS[this.getToppings()[0]]['calories'] + 
    Hamburger.TOPPINGS[this.getToppings()[1]]['calories'];
  }
  
  calculateCalories = calculateCaloriesSize + calculateCaloriesStufings + calculateCaloriesToppings;
  
  return calculateCalories;
}

const hamburger = new Hamburger({ 
  size: Hamburger.SIZE_SMALL, 
  stuffing: Hamburger.STUFFING_CHEESE
});

hamburger.addTopping(Hamburger.TOPPING_SPICE);

console.log("Calories: ", hamburger.calculateCalories());

console.log("Price: ", hamburger.calculatePrice());

hamburger.addTopping(Hamburger.TOPPING_SAUCE);

console.log("Price with sauce: ", hamburger.calculatePrice());

console.log("Is hamburger large: ", hamburger.getSize() === Hamburger.SIZE_LARGE);

hamburger.removeTopping(Hamburger.TOPPING_SPICE);

console.log("Hamburger has %d toppings", hamburger.getToppings().length);