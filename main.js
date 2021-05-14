const input = document.querySelector('#morse__input');
const translateButton = document.querySelector('#morse__translator');
const morseDisplay = document.querySelector('#morse__window');

let reverse = {}
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
console.log(reverse);

const generateMorse = (alphabet) => {
  const morseChecker = userInput.map(function (letter) {
    const morseTranslate = alphabet[letter];
    return morseTranslate;
  });
  return morseChecker.join('');
};

const generateEnglish = (reverse) => {
  console.log('inside',reverse);
  const englishChecker = userInput.map(function (morse) {
    const englishTranslate = reverse[morse]
    return englishTranslate
  });
  console.log(englishChecker);
  return englishChecker.join('');
};

translateButton.addEventListener('click', (event) => {
  event.preventDefault();

  if (input.value.match(/[a-z0-9]/gi)) {
    userInput = input.value.toLowerCase().split('');
    console.log('english', userInput, typeof userInput);
    morseDisplay.innerHTML = generateMorse(alphabet);
  } else {
    userInput = input.value.split('/');
    console.log('morse', userInput, typeof userInput);
    morseDisplay.innerHTML = generateEnglish(reverse);
  }
});

