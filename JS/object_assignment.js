const library = {
  name : "The Library",
  books: [],

  addBook(title, author){
    const newBook = {
      title : title,
      author : author,
      available : true
     }
     this.books.push(newBook);
     return "Book added successfully"
    },
 
  borrowBook(title){
    const book = this.books.find(b => b.title === title);

    if (!book) return "Book not found";
    if (!book.available) return "Book not available";

    book.available = false;
    return `You borrowed "${title}"`
    },

  returnBook(title){

    const book = this.books.find(b => b.title === title);
    if (!book) return "This book doesn't belong to us";
    if (book.available) return "This book is already available";

    book.available = true;
    return `Thanks for returning ${title} book`
  },

  showAvailableBooks(){
    return this.books
    .filter(b => b.available)
    .map(b => `${b.title} by ${b.author}`)
    .join(", ")
    .trim()  
  }
}

//add books
console.log(library.addBook("The Great Gatsby", "F. Scott Fitzgerald"));
console.log(library.addBook("The Great controversy", "Ellen G. White"));
console.log(library.addBook("1984", "George Orwell"));

//borrow books
console.log(library.borrowBook("Things all appart"));
console.log(library.borrowBook("The Great Gatsby"));
console.log(library.borrowBook("The Great Gatsby"));

//return ad borrow again
const returnedBook = library.returnBook("The Great Gatsby");
console.log(returnedBook);

//return book that doesn't belong to us
const returnedBook2 = library.returnBook("Playbook");
console.log(returnedBook2);

//show available books
console.log("These are the available books: \n" + library.showAvailableBooks());
