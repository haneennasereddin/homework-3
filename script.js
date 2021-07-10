// assignment code
var generateBtn = document.querySelector("#generate");
 
let passwordLenght  = 0;
let includeUpperrcase = false;
let includeLowercase = false;
let includeSpecial = false;
let includeNum = false;
 
// stores password length
passwordLenght = window.prompt("How long would you like to make you password? (8-128)");
while(passwordLenght < 8 || passwordLenght > 128){
 passwordLenght = window.prompt("Password not between 8 and 128 characters. Please enter a new value.");
}
 
// stores if users has uppercase letters
includeUppercase = window.confirm("Would you like to include uppercase letters?");
 
// stores if users has lowercase letters
includeLowercase = window.confirm("Would you like to include lower case letters?");
 
// stores if users have special characters
includeSpecial = window.confirm("Would you like to include special characters?");
 
// stores if users have numbers
includeNum = window.confirm("Would you like to include numbers?");
 
function generatePassword(passwordLenght, includeSpecial, includeLowercase, includeUppercase)
{
 // creating arrays //
 let characterOptions = []
 let uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
 let lowcase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
 let special = ["!", "@", "#", "$", "%", "^", "&", "*", "~", "(", ")", "-", "=", "+"];
 let num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
 
 if (includeSpecial){
   characterOptions = characterOptions.concat(special);
 }
 if (includeUppercase){
   characterOptions = characterOptions.concat(uppercase);
 }
 if (includeLowercase){
   characterOptions = characterOptions.concat(lowcase);
 }
 if (includeNum){
     characterOptions = characterOptions.concat(num);
 }
 
 //set to null
 let password = "";
 for (i = 0; i<passwordLenght; i++){
   password += characterOptions[Math.floor(Math.random() * characterOptions.length)];
 }
 return password;
}
 
// type password to the #password input
function writePassword() {
 
 //checks if any parameters were given by user and returns if not
  if (includeSpecial || includeLowercase || includeUppercase  || includeNum) {
    wasAnythingSelected = true;
   }else{
     window.alert("Parameters was not selected. Please select and refresh your page.");
     return;
     getInfo();
   }
  // generates a password & stores it in variable
 if(wasAnythingSelected){
   var password = generatePassword(passwordLenght, includeSpecial, includeLowercase, includeUppercase, includeNum);
   var passwordText = document.querySelector("#password");
 }
 
 
 passwordText.value = password;
 
}
 
// add event listener
generateBtn.addEventListener("click", writePassword);
