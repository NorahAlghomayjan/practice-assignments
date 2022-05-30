
function sandwichFactory(bread, protein, cheese, toppings) {
    var sandwich = {};
    sandwich.bread = bread;
    sandwich.protein = protein;
    sandwich.cheese = cheese;
    sandwich.toppings = toppings;
    
    return sandwich;
}

function pizzaOven(crustType,sauceType,cheese, toppings)
{
    var sandwich = {};
    sandwich.sauceType = sauceType;
    sandwich.crustType = crustType;
    sandwich.cheeses = cheese;
    sandwich.toppings = toppings;
    return sandwich;
}

function randomPizza ()
{
    var s1 = {};
    s1.cheeses = sandwich.cheeses[Math.floor(Math.random()*2)]; 
    s1.toppings = sandwich.toppings[Math.floor(Math.random()*5)]; 
    s1.crustType = sandwich.crustType[Math.floor(Math.random()*2)]; 
    s1.sauceType = sandwich.sauceType[Math.floor(Math.random()*2)]; 
    console.log(s1);
}

    



var sandwich = {
    cheeses:   ["mozzarella", "feta"],
    toppings: ["mushrooms", "olives", "onions","pepperoni", "sausage"],
    crustType:["deep dish", "hand tossed",],
    sauceType:["traditional","marinara"],
};
    
var s1 = pizzaOven("deep dish","traditional",["mozzarella"],["pepperoni", "sausage"]);
var s2 = pizzaOven("hand tossed","marinara",["mozzarella", "feta"],["onions","pepperoni", "sausage"]);
var s3 = pizzaOven("deep dish","marinara",["feta"],["sausage"]);
var s4 = pizzaOven("hand tossed","marinara",["mozzarella"],["pepperoni", "sausage"]);


console.log(s1,s2,s3,s4);
randomPizza ()