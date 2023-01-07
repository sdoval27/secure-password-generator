// Assignment Code
var generateBtn = document.querySelector("#generate");

const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H','I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '=', '+', '?'];


function generatePassword() {
//password type prompts
 

//determine password length

  //var passwordLength = window.prompt ('how long do you want your password to be?');

 // 
}



// Write password to the #password input
function writePassword() {
//determine password length
var passwordLength = window.prompt('How many characters do you want in your password?');

  if (passwordLength < 8) {
    window.alert('Your password must be longer than 8 characters!');
  } else if (8 <= passwordLength && passwordLength <= 128 ){
    window.alert('Your password is '+ passwordLength + ' characters long.');
    } else {
    window.alert('The maximum password length is 128 characters, make it shorter!');
    }
//determine password elements
var upperLetters = window.prompt ('Do you want to include uppercase letters?(yes/no)');
var lowerLetters = window.prompt ('Do you want to include lowercase letters?(yes/no)');
var numerical = window.prompt ('Do you want to include numbers?(yes/no)');
var special = window.prompt ('Do you want to include special characters?(yes/no)');

  if (upperLetters === "yes") {
    return Math.floor(Math.random(uppercase)*passwordLength);
  } else if(lowerLetters === "yes") {
    return Math.floor(Math.random(uppercase)*passwordLength);
  } else if(numerical === "yes") {
    return Math.floor(Math.random(uppercase)*passwordLength);
  } else if(special === "yes") {
    return  Math.floor(Math.random(uppercase)*passwordLength);
  }


  //class code  
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");
  


   passwordText.value = password;
  //class code ends
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);