class User {
  constructor(name, age) {
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
  }

  review(product) {
    this.reviews.push(product)
    product.reviewedBy.push(this)
  }
}



module.exports = User;
