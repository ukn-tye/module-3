// Get references to the #generate element -> button
var generateBtn = document.querySelector("#generate");

//function that produces a pw Length from user input
function passwordLength() {

  let Userlength = prompt("Please enter desired password length. Must be between 8 and 128 ");
  
  
  //gives error message if not between 8 and 128
  if (Userlength < 8 || Userlength > 128) {
    window.alert("That is not an accepetable Password length")
    return;
  }
  //returns the length of pw from user
  else {
    console.log(`You want the password to be ${Userlenght} characters long`);
  
  }
  generateCriteria(Userlength);
}

// get true/false statements fom User on criteria to use for pw AND genenrate function
function generateCriteria(length_pw) {
  
    
  // empty array to put in the possible character types
  let generatePassword = "";

  // empty list to put the new password 
  let newPassword = "";

  // list of possible characters to use

  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var characters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

  // Section to decide character type
  let criteriaLow = confirm(`Do you want to include lowercase characters?`);
  let criteriaUpp = confirm(`Do you want to include uppercase characters?`);
  let criteriaNum = confirm(`Do you want to include numbers?`);
  let criteriaChar = confirm(`Do you want to include special characters?`);
  //if yes, then add the type to genpw
  if (criteriaLow == true) {
    newPassword += lowercase.charAt(Math.floor(Math.random() * lowercase.length));
    generatePassword = generatePassword.concat(lowercase);
    console.log( `you want lowercase values`);
    window.alert(`you want lowercase values`);
  }
  //if yes, then add the type to genpw
  if (criteriaUpp == true) {
    newPassword += uppercase.charAt(Math.floor(Math.random() * uppercase.length));
    generatePassword = generatePassword.concat(uppercase);
    console.log( `you want uppercase values`);
    window.alert(`you want uppercase values`);
  }
  //if yes, then add the type to genpw
  if (criteriaNum == true) {
    newPassword += numbers.charAt(Math.floor(Math.random() * numbers.length));
    generatePassword = generatePassword.concat(numbers);
    console.log( `you want number values`);
    window.alert(`you want number values`);
  }
  //if yes, then add the type to genpw
  if (criteriaChar == true) {
    newPassword += characters.charAt(Math.floor(Math.random() * characters.length));
    generatePassword = generatePassword.concat(characters);
    console.log( `you want special values`);
    window.alert(`you want special values`);
  }

  //Use for loop to decide length
  for (var i = 0; i < length_pw; i++) {

    newPassword += generatePassword.charAt(Math.floor(Math.random() * generatePassword.length));
  }
  
  writePassword(newPassword);

}

// Write password to the #password input
function writePassword(pw) {
 
  var passwordText = document.querySelector("#password");
  passwordText.value = pw;
  console.log(`Your new password is ${pw}`);
}


// click button - start pw Length
generateBtn.addEventListener("click", passwordLength);