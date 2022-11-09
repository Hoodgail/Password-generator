// Assignment code here

// Get references to the #generate element
const generateBtn = document.querySelector("#generate");
const charNum = document.querySelector("#charNum");
const lowercase = document.querySelector(".lowercase");
const options_container = document.querySelector(".options_container");

let allChar = "";
//  prettier-ignore
const allChars = ["abcdefghiklmnopqrstvxyz", "ABCDEFGHIKLMNOPQRSTVXYZ", "1234567890", "!\u0022#$%&'()*+,-./:;<=>?@[\u005C]^_`{|}~"];
console.log(allChar.length);

const addChar = function () {
    [...options_container.children].forEach(function (el) {
        if (el.tagName === "INPUT" && el.checked === true) {
            const typeOf = Number(el.dataset.num);
            allChar = allChar.concat(allChars[typeOf]);
        }
    });
};

const generatePassword = function () {
    let numOfChar = Number(charNum.value);
    if (allChar === "" || !Number.isFinite(numOfChar) || numOfChar < 8 || numOfChar > 128)
        return alert("You must choose an option and a number between 8 - 128");

    // const charNum = Math.floor(Math.random() * 120 + 8);
    let pass = "";
    for (let num = 0; num < numOfChar; num++) {
        pass = pass.concat(allChar[Math.floor(Math.random() * allChar.length)]);
    }
    // console.log(pass);
    return pass;
};

// Write password to the #password input
function writePassword() {
    addChar();
    const password = generatePassword();
    const passwordText = document.querySelector("#password");
    if (!password) return;
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
