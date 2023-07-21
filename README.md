# _Pizza Parlor_

#### By _Kari Vigna_

#### _This application allows a user to choose and order a custom pizza, then view the final cost._

## Technologies Used

* _HTML_
* _CSS_
* _Javascript_

## Description

_This application takes the user submitted input and creates an object with two properties: toppings and size. It then displays the selected size and toppings as well as the final cost owed._

## Setup/Installation Requirements

* _Clone this repository to desktop_
* _Navigate this projects top level directory._
* _Open pizza-shop/index.html in your browser._

## Known Bugs

* _No curently known bugs_

## License

_MIT_

Copyright (c) _7/23/2023_ _Kari Vigna_



Describe: Pizza()

Test: It should return an object with a toppings property and a size property.
Code: Pizza()
Expected Output: Pizza (toppings:[], size)

Describe: Pizza.prototype.calculateTotalCost

Test: It should return a sum of the results of Topping Cost and Size Cost.
Code: let myPizza = new Pizza(["pepperoni", "pineapple", "jalapeno"], 14)
myPizza.calculateTotalCost()
Expected Output: 19



