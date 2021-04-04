"use strict";

var input = document.querySelector("#morse__input");
var translateButton = document.querySelector("#morse__translator");
var morseDisplay = document.querySelector("#morse__window");
var userInput = []; // holder for user input
// array of objects, ther key is the leter and value is the morse
// check the user input against the key and return value to new string
// - have object with letters/numbers and morse equivalents {a: ".-", b: "-..."}

var alphabet = {
  "a": ".- ",
  "b": "-... ",
  "c": "-.-. ",
  "d": "-.. ",
  "e": ". ",
  "f": "..-. ",
  "g": "--. ",
  "h": ".... ",
  "i": ".. ",
  "j": ".--- ",
  "k": "-.- ",
  "l": ".-.. ",
  "m": "-- ",
  "n": "-. ",
  "o": "--- ",
  "p": ".--. ",
  "q": "--.- ",
  "r": ".-. ",
  "s": "... ",
  "t": "- ",
  "u": "..- ",
  "v": "...- ",
  "w": ".-- ",
  "x": "-..- ",
  "y": "-.-- ",
  "z": "--.. "
};

var generateMorse = function generateMorse(alphabet) {
  var morseChecker = userInput.map(function (letter) {
    var morseTranslate = alphabet[letter];
    return morseTranslate;
  });
  return morseChecker.join("");
}; // event listner for the translate button when hit will spit back morse or english 


translateButton.addEventListener("click", function (event) {
  event.preventDefault();
  userInput = input.value.split("");
  morseDisplay.innerHTML = generateMorse(alphabet);
});
var clicked = false;

var toggleButton = function toggleButton() {
  if (!clicked) {
    clicked = true;
    document.querySelector("#morse__selector").innerHTML = "english to morse code";
  } else {
    clicked = false;
    document.querySelector("#morse__selector").innerHTML = "morse to english";
  }
};

var morseToEnglish = function morseToEnglish(alphabet) {
  var englishChecker = userInput.map(function (morse) {
    var englishTranslate = alphabet[letter];
    return englishTranslate;
  });
  return englishChecker.join('');
};

function getKeyByValue(object, value) {
  return Object.keys(object).find(function (key) {
    return object[key] === value;
  });
}

console.log(getKeyByValue(alphabet, ".--"));