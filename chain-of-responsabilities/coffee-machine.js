const colors = require('colors')

function CheckIfIngredientIsIncluded(ingredient) {
  const ingredientsList = ['Milk', 'Sugar', 'Cinammon'];
  return ingredientsList.includes(ingredient)
}

const CoffeeIngredents = function (ingredient) {
  this.ingredient = ingredient;
  this.next = null;
}

CoffeeIngredents.prototype = {

  CheckNewFlavorsAndPrintCurrent: function (ingredient) {
    this.Printer(ingredient);
    
    this.next && this.next.CheckNewFlavorsAndPrintCurrent(this.next.ingredient)
  },

  SetNextIngredient: function (ingredient) {
      this.next = ingredient;
  },

  Printer: function (flavor) {
    console.log(`This cup is added with: ${flavor}`);
  }
}

const CoffeeMachine = function () {
  const [ingredient01, ingredient02, ingredient03, ingredient04] =
    [
      new CoffeeIngredents('Expresso'),
      new CoffeeIngredents('Milk'),
      new CoffeeIngredents('Sugar'),
      new CoffeeIngredents('Cinammon')
    ]

  ingredient01.SetNextIngredient(ingredient02);
  ingredient02.SetNextIngredient(ingredient03);
  ingredient03.SetNextIngredient(ingredient04);

  this.firstIngredient = ingredient01;
}

CoffeeMachine.prototype.serve = function (ingredient) {
  this.firstIngredient.CheckNewFlavorsAndPrintCurrent(ingredient);
}

var coffeeMachine = new CoffeeMachine();
coffeeMachine.serve('Cinammon');
