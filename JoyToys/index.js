class User {
  constructor(name,age) {
    this.name = name
    this.age = age
    this.likes = []
    this.addsToBasket = []
    this.reviews = []
  }

  greet(user) {
    console.log(`Hello ${user.name}, welcome to Joy Toys!`)
  }

  likeProduct(product) {
    this.likes.push(product)
    product.likedBy.push(this)
  }

  addToBasket(product) {
    this.addsToBasket.push(product)
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
