function Pizza(toppings, size) {
    this.toppings = [];
    this.size = 0;
}

Pizza.prototype.calculateToppingCost = function(topping) {
    let toppingCost = this.toppings.length * 3;
    return toppingCost;
};

let myPizza = new Pizza(["pepperoni", "onion", "pineapple"], med)

// Pizza.prototype.calculateToppingCost = 
// toppings.forEach(function(topping) {
// let toppingInput = document.querySelectorAll("input[name=topping]:checked");
// toppingInput.push(this.toppings)
// let toppingPrice = toppings * 3
// return toppingPrice
// });

// Pizza.prototype.caculateSizeCost = function(size) {
//     sizeSelect = document.querySelector("#size");
// }


//user interface

function DisplayTotal()
let totalDiv = document.getElementById("totalDiv")
totalDiv.classList.remove("hidden");
totalDiv.innerText="Your total will be $"