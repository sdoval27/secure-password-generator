// Assignment Code
var generateBtn = document.querySelector("#generate");

const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H','I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '=', '+', '?'];

function generatePassword() {
  var charLength = window.prompt('How many characters do you want in your password?');
  var passwordLength = parseInt (charLength);
  var alphabetSoup = [];
  
 //determine password length
  if (passwordLength < 8) {
    window.alert('Your password must be longer than 8 characters!')
    return 'Think big, you can do it!';
    } else if (128 < passwordLength) {
    window.alert('The maximum password length is 128 characters, make it shorter!')
    return 'Why would you want a password that long?';
    };
 console.log(passwordLength);

 var upperLetters = window.confirm ('Do you want to include uppercase letters?');
 var lowerLetters = window.confirm ('Do you want to include lowercase letters?');
 var numerical = window.confirm ('Do you want to include numbers?');
 var special = window.confirm ('Do you want to include special characters?');

//character selectors
  if (upperLetters){
   var alphabetSoup = alphabetSoup.concat(uppercase);
   console.log('yes');
  } else {
    console.log('no');
  };

  if (lowerLetters){
    var alphabetSoup = alphabetSoup.concat(lowercase);
    console.log('yes');
  } else {
    console.log('no');
  }

  if (numerical){
    var alphabetSoup = alphabetSoup.concat(numbers);
    console.log('yes');
  } else {
    console.log('no');
  }

  if (special){
    var alphabetSoup = alphabetSoup.concat(specialCharacters);
    console.log('yes');
  } else {
    console.log('no');
  }

console.log(alphabetSoup);

  if (!upperLetters && !lowerLetters && !numerical && !special){
    return 'Well this is awkward. . . no password for you I guess.';
  }

  if (8 <= passwordLength && passwordLength <= 128 ) {
    var passActual = '';
    for (var i = 0; i < passwordLength ; i++){
      var randomized = Math.floor(Math.random() * alphabetSoup.length);
      console.log(alphabetSoup[i]);
      passActual = passActual + alphabetSoup[randomized];
      }
    return passActual;
  };

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