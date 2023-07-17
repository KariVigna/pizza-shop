function Pizza(toppings, size) {
    this.toppings = toppings;
    this.size = size;
}

Pizza.prototype.calculateToppingCost = function(topping) {
    let toppingCost = this.toppings.length * 3;
    return toppingCost;
};

Pizza.prototype.calculateSizeCost = function(size) {
    if (this.size <= 10) {
        let sizeCost = 5;
        return sizeCost
    } else if (this.size <= 18){
        let sizeCost = 10;
        return sizeCost 
    } else {
        let sizeCost = 15;
        return sizeCost
    }}
let myPizza = new Pizza(["pepperoni", "onion", "pineapple"], 14)

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