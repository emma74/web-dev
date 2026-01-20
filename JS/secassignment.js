let urlString = "https://phegon.com/course?id=12332";
// console.log(urlString.substring(29, 35));



// function passwordValidator() {
//   let password = prompt("Enter your password:");
//   if (password.length < 6 || password.includes(A-Z, a-z) === false || password.includes(0-9) === false) {
//     console.log("Paasword is invlaid");
//   } else {
//     console.log("Password is valid");
//   }
// }

// passwordValidator();

//Assigmnet solution - 1st soln
let splitUrl = urlString.split("id");
// console.log(splitUrl)
// console.log("Course ID solution 1: " + splitUrl[1]);

//2nd solution
let urlName = new URL(urlString);
let courseID = urlName.searchParams.get("id");
// console.log("Course ID solution 2: " + courseID);

//password validator
function isStrongPassword(password) {
  //check if password length is at least 6 characters
  const isLongEnough = password.length > 6;

  //check if password has lower or uppercase letter
  const hasLetter = /[A-Za-z]/.test(password)

  //check if password has number
  const hasNumber = /[0-9]/.test(password);

  return isLongEnough && hasLetter && hasNumber;
}

// console.log(isStrongPassword("pass1234"));
// console.log(isStrongPassword("pass"));
// console.log(isStrongPassword("1234567"));
// console.log(isStrongPassword("Pass12"));

//solution 2
function isStrongPassword2(pwd){
  return pwd.length > 6 &&
  /[A-Za-z]/.test(pwd) &&
  /[0-9]/.test(pwd);
}

console.log(isStrongPassword2("mypassword1")); //true
console.log(isStrongPassword2("short")); //false