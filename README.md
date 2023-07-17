Describe: Pizza()

Test: It should return an object with a toppings property and a size property.
Code: Pizza()
Expected Output: Pizza (toppings:[], size)

Describe: Pizza.prototype.calculateToppingCost

Test: It should return a new variable containing the product of the number of toppings and 3.
Code: let myPizza = new Pizza(["pepperoni", "pineapple", "jalapeno"], 14)
myPizza.calculateToppingCost()
Expected Output: 9

Describe: Pizza.prototype.calculateSizeCost

Test: It should return a new variable with the value of "5" for small, "10" for medium, and "15" for large.
Code: let myPizza = new Pizza(["pepperoni", "pineapple", "jalapeno"], 14)
myPizza.calculateSizeCost()
Expected Output: 10



