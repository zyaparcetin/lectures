const User = require("./user");
const Product = require("./product");

const kerem = new User("kerem", 11);
const mete = new User("mete", 7)

const teddyBear = new Product("teddy bear", 19.99)
const kitty = new Product("kitty", 14.99)

kerem.addToBasket(kitty)
mete.addToBasket(teddyBear)

console.log(kerem)
