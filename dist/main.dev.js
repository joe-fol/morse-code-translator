"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var input = document.querySelector('#morse__input');
var translateButton = document.querySelector('#morse__translator');
var morseDisplay = document.querySelector('#morse__window');
var reverse = {};
var userInput = [];
var alphabet = {
  a: '.-',
  b: '-...',
  c: '-.-.',
  d: '-..',
  e: '.',
  f: '..-.',
  g: '--.',
  h: '....',
  i: '..',
  j: '.---',
  k: '-.-',
  l: '.-..',
  m: '--',
  n: '-.',
  o: '---',
  p: '.--.',
  q: '--.-',
  r: '.-.',
  s: '...',
  t: '-',
  u: '..-',
  v: '...-',
  w: '.--',
  x: '-..-',
  y: '-.--',
  z: '--..'
};

var invert = function invert(alphabet) {
  var morseAlphabet = {};

  for (var keyName in alphabet) {
    if (alphabet.hasOwnProperty(keyName)) {
      morseAlphabet[alphabet[keyName]] = keyName;
    }
  }

  return morseAlphabet;
};

reverse = invert(alphabet);
console.log(reverse);

var generateMorse = function generateMorse(alphabet) {
  var morseChecker = userInput.map(function (letter) {
    var morseTranslate = alphabet[letter];
    return morseTranslate;
  });
  return morseChecker.join('');
};

var generateEnglish = function generateEnglish(reverse) {
  console.log('inside', reverse);
  var englishChecker = userInput.map(function (morse) {
    var englishTranslate = reverse[morse];
    return englishTranslate;
  });
  console.log(englishChecker);
  return englishChecker.join('');
};

translateButton.addEventListener('click', function (event) {
  event.preventDefault();

  if (input.value.match(/[a-z0-9]/gi)) {
    userInput = input.value.toLowerCase().split('');
    console.log('english', userInput, _typeof(userInput));
    morseDisplay.innerHTML = generateMorse(alphabet);
  } else {
    userInput = input.value.split('/');
    console.log('morse', userInput, _typeof(userInput));
    morseDisplay.innerHTML = generateEnglish(reverse);
  }
});