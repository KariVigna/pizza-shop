//Business Logic
function Pizza(toppings, size) {
    this.toppings = toppings;
    this.size = size;
}
Pizza.prototype.calculateTotalCost = function(cost) {
    let toppingCost = this.toppings.length * 3;
    let totalCost = 0
    if (this.size <= 10) {
        let sizeCost = 5;
        return totalCost = sizeCost + toppingCost
    } else if (this.size <= 14){
        let sizeCost = 10;
        return totalCost = sizeCost + toppingCost
    } else {
        let sizeCost = 15;
        return totalCost = sizeCost + toppingCost
    };
};


//UI Logic
window.addEventListener("load", function () {
    document.getElementById("order").addEventListener("click", displayCost);
})


function displayCost() {
    event.preventDefault();
    
    totalDiv = document.getElementById("totalDiv");
    totalDiv.classList.remove("hidden");
    totalDiv.innerHTML = Pizza.calculateTotalCost
}






// Pizza.prototype.calculateToppingCost = function(topping) {
//     let toppingCost = this.toppings.length * 3;
//     return toppingCost;
// };

// Pizza.prototype.calculateSizeCost = function(size) {
//     if (this.size <= 10) {
//         let sizeCost = 5;
//         return sizeCost
//     } else if (this.size <= 18){
//         let sizeCost = 10;
//         return sizeCost 
//     } else {
//         let sizeCost = 15;
//         return sizeCost
//     }};

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