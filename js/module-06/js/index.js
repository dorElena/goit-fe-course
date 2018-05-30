"use strict";

class Hamburger {
  constructor ({size, stuffing}) { 
  this.size = size;
  this.stuffing = stuffing;
  this.topping = [];
  }

  addTopping (topping) {
    if (!this.topping.includes(topping)) {
      this.topping.push(topping);
    }
  }

  removeTopping (topping) { 
    if (this.topping.includes(topping)) {
      this.topping = this.topping.filter(val => val !== topping);
    }
  }

  getToppings () { 
    return this.topping;
  }

  getSize () { 
    return this.size;
  }

  getStuffing () { 
    return this.stuffing;
  }

  calculatePrice () { 
    let calculatePrice = 0;
    let calculatePriceSize = Hamburger.SIZES.this.size.price;
    let calculatePriceStuffings = Hamburger.STUFFINGS.this.stuffing.price;
    let calculatePriceToppings = this.topping.reduce((acc, topping) => acc + (Hamburger.TOPPINGS[topping].price), 0);
      
    calculatePrice = calculatePriceSize + calculatePriceStuffings + calculatePriceToppings;
    return calculatePrice;
  }

  calculateCalories () { 
    let calculateCalories = 0;
    let calculateCaloriesSize = Hamburger.SIZES.this.size.calories;
    let calculateCaloriesStufings = Hamburger.STUFFINGS.this.stuffing.calories;
    let calculateCaloriesToppings = this.topping.reduce((acc, topping) => acc + (Hamburger.TOPPINGS[topping].calories), 0);
      
    calculateCalories = calculateCaloriesSize + calculateCaloriesStufings + calculateCaloriesToppings;
    return calculateCalories;
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

const hamburger = new Hamburger({ 
  size: Hamburger.SIZE_SMALL, 
  stuffing: Hamburger.STUFFING_CHEESE
});

console.log(hamburger);

hamburger.addTopping(Hamburger.TOPPING_SPICE);

console.log("Calories: ", hamburger.calculateCalories());

console.log("Price: ", hamburger.calculatePrice());

hamburger.addTopping(Hamburger.TOPPING_SAUCE);

console.log("Price with sauce: ", hamburger.calculatePrice());

console.log("Is hamburger large: ", hamburger.getSize() === Hamburger.SIZE_LARGE);

hamburger.removeTopping(Hamburger.TOPPING_SPICE);

console.log("Hamburger has %d toppings", hamburger.getToppings().length);

