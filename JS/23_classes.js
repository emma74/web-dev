class Calculator {

  //methods
  add(a,b){
    return a+b;
  }

  subtract(a, b){
    return a-b;
  }

  multiply(a, b){
    return a*b;
  }
  divide(a, b){
    return a/b;
  }
}

//create an instance of the class
// const calc = new Calculator();
// const add = calc.add(2, 3);
// const subtract = calc.subtract(5, 3);
// const multiply = calc.multiply(2, 3);
// const divide = calc.divide(6, 3);

// console.log(add);
// console.log(subtract);
// console.log(multiply);
// console.log(divide);
// console.log(calc)

//constructor class
class Book {
  constructor(title, author){
    this.title = title;
    this.author = author;
    this.available = true;
  }

  borrow() {
    if (this.available === true) {
      this.available = false;
      return `You borrowed ${this.title} book by ${this.author}`
    }
  }

  returnBook() {
    if (this.available === false) {
      this.available = true;
      return `Thanks for returning ${this.title} book by ${this.author}`
    }
  }
}

// const book = new Book("The Great Gatsby", "F. Scott Fitzgerald");
// console.log(book.borrow());
// console.log(book.returnBook());

//Inheritance
class EBook extends Book {
  constructor(title, author, fileSize) {
    super(title, author); // call parent constructor
    this.fileSize = fileSize + "MB";
  }

  download() {
    return `Downloading ${this.title} of size ${this.fileSize}`;
  }
}

const ebook = new EBook("Javascript", "MDN", 15);
console.log(ebook.download());
console.log(ebook.borrow());
console.log(ebook.returnBook());
