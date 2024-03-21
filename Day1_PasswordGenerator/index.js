import Process from "node:process";
import zxcvbn from "zxcvbn";

const lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
const upperCaseChar = lowerCaseChar.toUpperCase();
const numberChar = "0123456789";
const symbolChar = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

// argv[0]: path to node.js executable
// argv[1]: path to node js file that is being executed.
const passLen = parseInt(Process.argv[2], 10) || 12; // argv[2]: password length

const options = Process.argv.slice(3).map((option) => option.toLowerCase()); // after argv[2] argv contains contains all the options for the password generator

function getRandomChar(charSet) {
  return charSet[Math.floor(Math.random() * charSet.length)];
}

function generatePassword() {
  let charSet = "";
  if (options.length === 0) {
    charSet = lowerCaseChar + upperCaseChar + symbolChar + numberChar;
  } else {
    if (options.includes("lowercase")) {
      charSet += lowerCaseChar;
    }
    if (options.includes("uppercase")) {
      charSet += upperCaseChar;
    }
    if (options.includes("symbol")) {
      charSet += symbolChar;
    }
    if (options.includes("numbers")) {
      charSet += numberChar;
    }
  }

  let password = "";
  for (let i = 0; i < passLen; i++) {
    password += getRandomChar(charSet);
  }
  console.log(`Here is your password: ${password}`);
  //   console.log(zxcvbn(password));
}

generatePassword();
