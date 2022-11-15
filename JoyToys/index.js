class User {
  constructor(name,age) {
    this.name = name
    this.age = age
    this.likes = []
    this.basket = []
    this.reviews = []
  }

  greet() {
    console.log(`Hello ${user.name}, welcome to Joy Toys!`)
  }

  likeProduct(product) {
    this.likes.push(product)
    product.likedBy.push(this)
  }

  addToBasket(product) {
    this.basket.push(product)
    product.addedToBasketBy.push(this)
  }

  review(product) {
    this.reviews.push(product)
    product.reviewedBy.push(this)
  }
}

class Product {
  constructor(name,price) {
    this.name = name
    this.price = price
    this.likedBy = []
    this.addedToBasketBy = []
    this.reviewedBy = []
  }
}

const kerem = new User("kerem", 11);
const mete = new User("mete", 7)

const teddyBear = new Product("teddy bear", 19.99)
const kitty = new Product("kitty", 14.99)

kerem.addToBasket(kitty)
mete.addToBasket(teddyBear)

console.log(kerem)
