// Starting from Scratch 

// Assignment Code
var generateBtn = document.querySelector("#generate");
//This function allows you to generate a random password based on the users choices and password length
function generatePassword() {
  //variables needed to generate a password
  var validNumbers = "0123456789";
  var validLowerCase = "abcdefghijklmnopqrstuvwxyz";
  var validUpperCase = "ABCDEFGHIJKLMONPQRSTUVWXYZ";
  var validSpecialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  //make sure that the password length is correct

  var passwordLength = 0;

  while (true) {
    passwordLength = prompt("Enter your password Length. (Must be between 8 and 128");
    if (passwordLength >= 8 && passwordLength <= 128) {
      break;
    } else {
      alert("Must be a number between 8 and 128")
    }
  }

  // Confirm user wants to use certain values answer should show in box
  while (true) {
    //valid Characters is our final result
    result = "";
    validCharacters = "";
    if (confirm("Would you like to include numbers in your password?")) {
      validCharacters += validNumbers;
    }
    if (confirm("Would you like to include lower case in your password?")) {
      validCharacters += validLowerCase;
    }
    if (confirm("Would you like to include upper case in your password?")) {
      validCharacters += validUpperCase;
    }
    if (confirm("Would you like to include special characters in your password?")) {
      validCharacters += validSpecialCharacters;
    }
    if (validCharacters.length === 0) {
      alert("Please pick one.")
    } else {
      break;
    }
  }

  for (i = 0; i < passwordLength; i++) {
    randomIndex = Math.floor(Math.random() * validCharacters.length);
    randomCharacter = validCharacters[randomIndex];
    result += randomCharacter;
  }

  return result;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);