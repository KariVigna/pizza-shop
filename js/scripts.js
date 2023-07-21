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
    document.getElementById("orderForm").addEventListener("submit", displayCost);
    document.querySelector(".reload").addEventListener("click", refreshPage);
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
    let newPizza = new Pizza(topArray, selectedSize);
    let newPizzaCost = newPizza.calculateTotalCost();
    totalDiv = document.getElementById("totalDiv");
    totalDiv.classList.remove("hidden");
    danceDiv = document.getElementById("dance");
    danceDiv.classList.remove("hidden");
    let formDiv = document.getElementById("formDiv");
    formDiv.setAttribute("class", "hidden");
    totalDiv.prepend("Thanks for placing your order! Your " + selectedSize + " inch pizza with " + topArray.join(", ") + " will be ready in 20 minutes.");
    totalSpan = document.getElementById("totalSpan");
    totalSpan.append(newPizzaCost);
}

function refreshPage () {
        location.reload();
}



