class Animal {
  constructor(name) {
    this.name = name
  }
  speak() {
    console.log(`${this.name} make a sound`)
  }
}

class dog extends Animal {
  constructor( name, bread) {
    super(name)
    this.bread = bread
  }
}

class cat extends Animal {
  constructor(name,bread,color) {
    super(name)
    super(bread)
    this.color = color
    
  }
}


let lilly = new cat("lilly","cat","blue")