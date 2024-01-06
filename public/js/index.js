// // Array of special characters to be included in password
// const specialCharacters = [
//     '@',
//     '%',
//     '+',
//     '\\',
//     '/',
//     "'",
//     '!',
//     '#',
//     '$',
//     '^',
//     '?',
//     ':',
//     ',',
//     ')',
//     '(',
//     '}',
//     '{',
//     ']',
//     '[',
//     '~',
//     '-',
//     '_',
//     '.'
//   ];
  
//   // Array of numeric characters to be included in password
//   const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
//   // Array of lowercase characters to be included in password
//   const lowerCasedCharacters = [
//     'a',
//     'b',
//     'c',
//     'd',
//     'e',
//     'f',
//     'g',
//     'h',
//     'i',
//     'j',
//     'k',
//     'l',
//     'm',
//     'n',
//     'o',
//     'p',
//     'q',
//     'r',
//     's',
//     't',
//     'u',
//     'v',
//     'w',
//     'x',
//     'y',
//     'z'
//   ];
  
//   // Array of uppercase characters to be included in password
//   const upperCasedCharacters = [
//     'A',
//     'B',
//     'C',
//     'D',
//     'E',
//     'F',
//     'G',
//     'H',
//     'I',
//     'J',
//     'K',
//     'L',
//     'M',
//     'N',
//     'O',
//     'P',
//     'Q',
//     'R',
//     'S',
//     'T',
//     'U',
//     'V',
//     'W',
//     'X',
//     'Y',
//     'Z'
//   ];
  
//   // Function to prompt user for password options
//   function getPasswordOptions() {
  
//   }
  
//   // Function for getting a random element from an array
//   function getRandom(arr) {
  
//   }
  
//   // Function to generate password with user input
//   function generatePassword() {
  
//   }
  
//   // Get references to the #generate element
//   var generateBtn = document.querySelector('#generate');
  
//   // Write password to the #password input
//   function writePassword() {
//     var password = generatePassword();
//     var passwordText = document.querySelector('#password');
  
//     passwordText.value = password;
//   }
  
//   // Add event listener to generate button
//   generateBtn.addEventListener('click', writePassword);


  //New functions 
    // variables for sliders and number range

    var slider = document.getElementById("customRange2");
    var numberInput = document.getElementById("numberRange");
    var flexRadioDefault1 = document.getElementById("flexRadioDefault1");
    var flexRadioDefault2 = document.getElementById("flexRadioDefault2");
    var flexRadioDefault3 = document.getElementById("flexRadioDefault3");
    var flexCheckDefault = document.getElementById("flexChecked1");
    var flexCheckDefault = document.getElementById("flexChecked2");
    var flexCheckDefault = document.getElementById("flexChecked3");
    var flexCheckDefault = document.getElementById("flexChecked4");
  // slider range selector

  slider.oninput = function(){
    numberInput.value = this.value;
  }

  // number input
  numberInput.oninput = function(){
    slider.value = this.value;

  }
