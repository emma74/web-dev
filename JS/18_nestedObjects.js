let book = {
  title: "Javascript Basics",
  author : {
    firstname: "John",
    lastname: "Doe"
  },
  depts: 56,
  publicationDate: new Date("2023-01-01"),
  buyDate : new Date(),
  students: [
    {studentNumber: 345, studentName: "James"},
    {studentNumber: 346, studentName: "Jane"}
  ]
}

// console.log(book);
console.log(book.buyDate)  //prints current date and time

//popularly used method
// console.log(book.publicationDate)
//Both print firstname
// console.log(book.author.firstname);  // print John
// console.log(book["author"]["firstname"]);  //print John

// console.log(book.students[0].studentName); //print James
// console.log(book["students"][0]["studentName"]); //print James

// console.log(book.students[1].studentName); //print Jane
// console.log(book["students"][1]["studentName"]); //print Jane

//add new property
// book.publisher = "John Doe";