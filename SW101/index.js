const foo = 4

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
    this.photos = []
  }

  addPhoto(photo) {
    this.photos.push(photo)
  }
}

const armagan = new Person('Armagan', 36)
const steve = new Person('Steve', 21)

console.log(armagan.addPhoto === steve.addPhoto)
console.log(armagan.photos === steve.photos)
