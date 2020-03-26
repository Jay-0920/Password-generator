//Password Generator Script

//Lowercase array
var lowerCaseLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];


console.log(lowerCaseLetters);

//Array of special characters
var specialCharacters = ['!','@','#','$','%','^','&','*','~','.','/','<','>','?',';',':','+','=','-','_'];


console.log(specialCharacters);

//This is the array of numbers
var numbers = ['1','2','3','4','5','6','7','8','9','0'];


console.log(numbers);


var upperCaseLetters = String.prototype.toUpperCase.apply(lowerCaseLetters).split(",");


console.log(upperCaseLetters);

//Password length variable.
var passwordLength;


var passwordGeneratingCriteria = [];


function userChoices() {

    //Confirm Lowercase Letters
    var wantsLowerCaseLetters = confirm("Include lowercase letters in your password? 'OK' for Yes or 'Cancel' for No");

   
    if (wantsLowerCaseLetters) {
        passwordGeneratingCriteria.push(lowerCaseLetters);
        alert("Your password will include lowercase letters.");
    }
    else { 
        alert("Your password will not have lowercase letters.");
    }

    //Confirm Uppercase Letters
    var wantsUpperCaseLetters = confirm("Include uppercase letters in your password? 'OK' for Yes or 'Cancel' for No");

    
    if (wantsUpperCaseLetters) {
        passwordGeneratingCriteria.push(upperCaseLetters);
        alert("Your password will include uppercase letters.");
    }
    else { 
        alert("Your password will not have uppercase letters.");
    }

    //Confirm Special Characters.
    var wantsSpecialCharacters = confirm("Include special characters in your password? 'OK' for Yes or 'Cancel' for No");

    
    if (wantsSpecialCharacters) {
        passwordGeneratingCriteria.push(specialCharacters);
        alert("Your password will include special characters.");
    }
    else { 
        alert("Your password will not have special characters.");
    }

    //Confirm Numbers
    var wantsNumbers = confirm("Include numbers in your password? 'Ok' for Yes or 'Cancel' for No");

       if (wantsNumbers) {
        passwordGeneratingCriteria.push(numbers);
        alert("Your password will include numbers.");
    }
    else { 
        alert("Your password will not have numbers.");
    }
   
    if (!wantsLowerCaseLetters && !wantsUpperCaseLetters && !wantsSpecialCharacters && !wantsNumbers) {
        //Alerts the user of password generation.
        alert("Must choose at least one character type to generate password.");
    
        userChoices();
    }

    //Using console.log
    console.log(passwordGeneratingCriteria);
}
userChoices();

//PromptPasswordLength Function
function promptPasswordLength() {

    //Password Length Value
    passwordLength = prompt("Choose a number from 8 to 250 to determine the length of your password.").trim();

    
    if (isNaN(passwordLength) || !(passwordLength >= 8) || !(passwordLength <= 250)) {

        
        alert("Your input must be a number between eight (8) and two hundred-fifty (250).");

        
        promptPasswordLength();
    }

    //Else statement alerts the user of password length choice.
    else {
        alert("Your password will be " + passwordLength + " characters long.");
    }
}

promptPasswordLength();


//Generating Password
function generatePassword() {
    //RandomPassword
    var randomPassword = "";
    
    for (i = 0; i < passwordLength; i++) {

 
        var randomArrayNumber = Math.floor(Math.random() * passwordGeneratingCriteria.length);
        
        var randomCharArr = passwordGeneratingCriteria[randomArrayNumber];
        
        var randomCharacterNumber = Math.floor(Math.random() * randomCharArr.length);
        
        var randomCharacter = randomCharArr[randomCharacterNumber];
        
        randomPassword = randomPassword + randomCharacter;
    }

    return randomPassword;
}


console.log(generatePassword);

var generateBtn = document.querySelector("#generate");


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

//Event listener to generate button
generateBtn.addEventListener("click", writePassword);
