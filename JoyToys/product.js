class Product {
  constructor(name,price) {
    this.name = name
    this.price = price
    this.likedBy = []
    this.addedToBasketBy = []
    this.reviewedBy = []
  }
}



module.exports = Product;
