const input = document.querySelector('#morse__input');
const translateButton = document.querySelector('#morse__translator');
const morseDisplay = document.querySelector('#morse__window');

let reverse = {};
let userInput = [];

const alphabet = {
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
  z: '--..',
};

const invert = (alphabet) => {
  const morseAlphabet = {};

  for (const keyName in alphabet) {
    if (alphabet.hasOwnProperty(keyName)) {
      morseAlphabet[alphabet[keyName]] = keyName;
    }
  }
  return morseAlphabet;
};

reverse = invert(alphabet);

const getTranslation = (alphabet) => {
  const getItems = userInput.map(function (letter) {
    const getValues = alphabet[letter];
    return getValues;
  });
  return getItems.join('');
};

translateButton.addEventListener('click', (event) => {
  event.preventDefault();

  if (input.value.match(/[a-z0-9]/gi)) {
    userInput = input.value.toLowerCase().split('');
    morseDisplay.innerHTML = getTranslation(alphabet);
  } else {
    userInput = input.value.split('/');
    morseDisplay.innerHTML = getTranslation(reverse);
  }
});
