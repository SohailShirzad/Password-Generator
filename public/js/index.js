// Array of special characters to be included in password
const specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];
  
  // Array of numeric characters to be included in password
  const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  // Array of lowercase characters to be included in password
  const lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  
  // Array of uppercase characters to be included in password
  const upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];

  
  //New functions 
    // variables for sliders and number range
    var slider = document.getElementById("customRange2");
    var numberInput = document.getElementById("numberRange");
    var flexRadioDefault1 = document.getElementById("flexRadioDefault1");
    var flexRadioDefault2 = document.getElementById("flexRadioDefault2");
    var flexRadioDefault3 = document.getElementById("flexRadioDefault3");
    var flexChecked1 = document.getElementById("flexChecked1");
    var flexChecked2 = document.getElementById("flexChecked2");
    var flexChecked3 = document.getElementById("flexChecked3");
    var flexChecked4 = document.getElementById("flexChecked4");
  // slider range selector

  if(flexRadioDefault1.checked = true){
    disableNumbersAndSymbols();
  }else if(flexRadioDefault2.checked = true){
    uncheckNumbersAndSymbols();
  }else{
    enableAllCheckBoxes();
  }



  slider.oninput = function(){
    numberInput.value = this.value;
    writePassword();
  }
  // number input
  numberInput.oninput = function(){
    slider.value = this.value;
    writePassword();
  }

  // conditional functions
  function disableNumbersAndSymbols() { 
    flexChecked3.disabled = true;
    flexChecked4.disabled = true;
  }

  function uncheckNumbersAndSymbols(){
    flexChecked3.checked = false;
    flexChecked4.checked = false;

  }

  function enableAllCheckBoxes(){
    flexChecked3.disabled = false;
    flexChecked4.disabled = false;
  }
  
  // Function to prompt user for password options
  function getPasswordOptions() {
  
  }
  
  // Function for getting a random element from an array
  function getRandom(arr) {
  
  }
  
  // Function to generate password with user input
  function generatePassword() {
    let passInfo = "";
    const passChars = [];
    let characterAmount = slider.value && numberInput.value;
    const getInteger = flexChecked3;
    
    if (getInteger){
      passInfo += numericCharacters.num;
      passChars.push(getRandomChar(numericCharacters.num))
    };
  }
  
  // Get references to the #generate element
  var generateBtn = document.querySelector('#generate');
  
  // Write password to the #password input
  function writePassword() {
   let password = generatePassword();
   let passwordText = document.querySelector("#password");
   passwordText.value = password;
   passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener('click', writePassword);


