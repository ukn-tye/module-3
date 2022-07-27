var generateBtn = document.querySelector("#generate");

function passwordLength() {

  let Userlength = prompt("Please enter desired password length. Must be between 8 and 128 ");
  
  if (Userlength < 8 || Userlength > 128) {
    window.alert("That is not an accepetable Password length")
    return;
  }
 
  else {
    console.log(`You want the password to be ${Userlenght} characters long`);
  
  }
  generateCriteria(Userlength);
}

function generateCriteria(length_pw) {
  
  let generatePassword = "";
  
  let newPassword = "";

  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var characters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

  let criteriaLow = confirm(`Do you want to include lowercase characters?`);
  let criteriaUpp = confirm(`Do you want to include uppercase characters?`);
  let criteriaNum = confirm(`Do you want to include numbers?`);
  let criteriaChar = confirm(`Do you want to include special characters?`);

  if (criteriaLow == true) {
    newPassword += lowercase.charAt(Math.floor(Math.random() * lowercase.length));
    generatePassword = generatePassword.concat(lowercase);
    console.log( `you want lowercase values`);
    window.alert(`you want lowercase values`);
  }

  if (criteriaUpp == true) {
    newPassword += uppercase.charAt(Math.floor(Math.random() * uppercase.length));
    generatePassword = generatePassword.concat(uppercase);
    console.log( `you want uppercase values`);
    window.alert(`you want uppercase values`);
  }
 
  if (criteriaNum == true) {
    newPassword += numbers.charAt(Math.floor(Math.random() * numbers.length));
    generatePassword = generatePassword.concat(numbers);
    console.log( `you want number values`);
    window.alert(`you want number values`);
  }
  
  if (criteriaChar == true) {
    newPassword += characters.charAt(Math.floor(Math.random() * characters.length));
    generatePassword = generatePassword.concat(characters);
    console.log( `you want special values`);
    window.alert(`you want special values`);
  }

  for (var i = 0; i < length_pw; i++) {

    newPassword += generatePassword.charAt(Math.floor(Math.random() * generatePassword.length));
  }
  
  writePassword(newPassword);

}

function writePassword(pw) {
 
  var passwordText = document.querySelector("#password");
  passwordText.value = pw;
  console.log(`Your new password is ${pw}`);
}

generateBtn.addEventListener("click", passwordLength);
