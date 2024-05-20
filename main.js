class Anamils {
  constructor(name) {
    this.name = name
  }
  speak() {
    console.log("spek")
  }
}

class dog extends Anamils {
  constructor(name,breed,size) {
    super(name)
    this.breed = breed
    this.size = size
  }
  speak() {
    console.log("speek speek")
  }
}

class cat extends Anamils {
  constructor(name, breed,) {
    super(name)
    this.breed = breed
  }
}
 let nathan = new cat("Nathan","guy")

