/* class BankAccount {
  #dollars = 0

  #overdraft = -50

  #balanceHistory = [0]

  get balance() {
    return this.#dollars
  }

  get balanceHistory() {
    return this.#balanceHistory.slice()
  }

  get overdraft() {
    return this.#overdraft
  }

  deposit(amount) {
    const newDollars = this.#dollars + amount
    if (newDollars < this.#overdraft) throw new Error('Overdraft exceeded.')

    this.#balanceHistory.push(newDollars)
    this.#dollars = newDollars
  }
}

const armagansAccount = new BankAccount()

armagansAccount.deposit(100)
armagansAccount.deposit(-150)
armagansAccount.deposit(72)
armagansAccount.deposit(92)
armagansAccount.deposit(-80)

console.log(armagansAccount.balance)
console.log(armagansAccount.balanceHistory) */

class Fruit {
  name = 'fruit'

  canEat = true

  printName() {
    console.log(this.name)
  }
}

class Banana extends Fruit {
  name = 'banana'
}

class Cherry extends Fruit {
  name = 'cherry'
}

const melon = new Fruit()
const armagansBanana = new Banana()
const armagansCherry = new Cherry()

melon.printName()
armagansCherry.printName()
armagansBanana.printName()
console.log(armagansBanana.canEat)
console.log(armagansCherry.canEat)

class Animal {
  makeSound() {}
}

// class FlyingAnimal extends Animal {
//   fly() {}
//   layEggs() {}
// }

class Wings {}

class FlyingWings extends Wings {
  fly() {}
}

class Chicken extends Animal {
  wings = new Wings()
}

class Bat extends Animal {
  wings = new FlyingWings()
}

class Ant extends Animal {}

const armagansChicken = new Chicken()
// armagansChicken.wings.fly()
const armagansBat = new Bat()

armagansBat.makeSound()
armagansBat.wings.fly()
