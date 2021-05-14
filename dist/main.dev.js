"use strict";

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

var getTranslation = function getTranslation(alphabet) {
  var getItems = userInput.map(function (letter) {
    var getValues = alphabet[letter];
    return getValues;
  });
  return getItems.join('');
};

translateButton.addEventListener('click', function (event) {
  event.preventDefault();

  if (input.value.match(/[a-z0-9]/gi)) {
    userInput = input.value.toLowerCase().split('');
    morseDisplay.innerHTML = getTranslation(alphabet);
  } else {
    userInput = input.value.split('/');
    morseDisplay.innerHTML = getTranslation(reverse);
  }
});