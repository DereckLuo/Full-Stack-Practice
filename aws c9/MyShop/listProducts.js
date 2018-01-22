var faker = require("faker");

console.log("========================");
console.log("WELCOME TO MY SHOPE !");
console.log("========================");

faker.seed(123);

for(var i = 0; i < 10; i++){
    var name = faker.commerce.productName();
    // var price = Math.random()*1000 + (Math.random()*99)/100;
    var price = faker.commerce.price();
    console.log(name + " - $" + price);
}