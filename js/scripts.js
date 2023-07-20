//Business Logic
function Pizza(toppings, size) {
    this.toppings = toppings;
    this.size = size;
}
Pizza.prototype.calculateTotalCost = function() {
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
    document.getElementById("topForm").addEventListener("submit", displayCost);
})

function displayCost() {
    event.preventDefault();
    const selectedSize = document.getElementById("size").value;
    const selectedTop = document.querySelectorAll("input[name='topping']:checked");
    let topArray = [];
    selectedTop.forEach(function(topping){
        if (topping.checked === true) {
            topArray.push(topping.value)
        }
    })
    console.log(topArray);
    let newPizza = new Pizza(topArray, selectedSize);
    console.log(newPizza);
    let newPizzaCost = newPizza.calculateTotalCost();
    totalDiv = document.getElementById("totalDiv");
    totalDiv.classList.remove("hidden");
    totalDiv.innerText = "The cost of your pizza is: $" + newPizzaCost
}



