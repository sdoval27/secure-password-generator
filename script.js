// Assignment Code
var generateBtn = document.querySelector("#generate");

const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H','I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '=', '+', '?'];

//array randomizers
function randomUpper(){
  return uppercase [Math.floor(Math.random()*uppercase.length)];
}
console.log(randomUpper());

function randomLower(){
  return uppercase [Math.floor(Math.random()*lowercase.length)];
}
function randomNum(){
  return uppercase [Math.floor(Math.random()*numbers.length)];
}
function randomSpecial(){
  return uppercase [Math.floor(Math.random()*specialCharacters.length)];
}

function generatePassword() {
  var passwordLength = window.prompt('How many characters do you want in your password?');
  var alphabetSoup = [];
  
 //determine password length
  if (passwordLength < 8) {
    window.alert('Your password must be longer than 8 characters!');
  } else if (8 <= passwordLength && passwordLength <= 128 ){
    window.alert('Your password is '+ passwordLength + ' characters long.');
    } else {
    window.alert('The maximum password length is 128 characters, make it shorter!');
    };
 console.log(passwordLength);

 var upperLetters = window.confirm ('Do you want to include uppercase letters?');
 var lowerLetters = window.confirm ('Do you want to include lowercase letters?');
 var numerical = window.confirm ('Do you want to include numbers?');
 var special = window.confirm ('Do you want to include special characters?');

  if (upperLetters){
    return alphabetSoup = randomUpper()* passwordLength;
  }
  if (lowerLetters){
    return alphabetSoup = randomLower()* passwordLength;
  }
  if (numerical){
    return alphabetSoup = randomNum()* passwordLength;
  }
  if (special){
    return alphabetSoup = specialCharacters()* passwordLength;
  }
  if (!upperLetters && !lowerLetters && !numerical && !special){
    return 'Well this is awkward. . . no password for you I guess.';
  }

}


// Write password to the #password input
function writePassword() {
//determine password elements 
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");
  


   passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

