// ARRAYS/ POSSIBLE PASSWORD OPTIONS INCLUDING; ALPHANUMERIC + SYMBOLS
const characters = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", 
    "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", 
    "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"
];


// DEFINE VARIABLES
const generatorBTN = document.getElementById("generator-btn");
let passwordResultOne = document.getElementById("password-one");
let passwordResultTwo = document.getElementById("password-two");
let toggleSymbol = document.getElementById("toggle-symbol");
let switchMessage = document.getElementById("switch-message");
let toggleBtnOff = true;


// SYMBOLS ON/OFF FUNCTION
toggleSymbol.addEventListener("click", function() {
    function toggle() {
        if (toggleSymbol.value == "Off") {
            toggleSymbol.value = "On";
            toggleBtnOff = false;
            switchMessage.textContent = "High";
        } else if (toggleSymbol.value == "On") {
            toggleSymbol.value = "Off";
            toggleBtnOff = true;
            switchMessage.textContent = "Medium";
        }
    }
    toggle();
})


// RANDOM PASSWORD GENERATOR FUNCTION
generatorBTN.addEventListener("click", function() {
    function togglePassword() {
        passwordResultOne.textContent = "";
        passwordResultTwo.textContent = "";
        if (toggleBtnOff === true) {
            for (let i = 0; i < 15; i++) {
                function getRandomCharacter() {
                    let characterX = Math.floor(Math.random() * 62);
                    let characterY = Math.floor(Math.random() * 62);
                    passwordResultOne.textContent += characters[characterX];
                    passwordResultTwo.textContent += characters[characterY];
                }
                getRandomCharacter();
            }
        } else {
            for (let i = 0; i < 15; i++) {
                function getRandomCharacter() {
                    let characterX = Math.floor(Math.random() * characters.length);
                    let characterY = Math.floor(Math.random() * characters.length);
                    passwordResultOne.textContent += characters[characterX];
                    passwordResultTwo.textContent += characters[characterY];
                }
                getRandomCharacter();
            }
        }
    }
    togglePassword();
})


