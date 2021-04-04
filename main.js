const input = document.querySelector("#morse__input");
const translateButton = document.querySelector("#morse__translator");
const morseDisplay = document.querySelector("#morse__window");

let userInput = [];
// holder for user input
// array of objects, ther key is the leter and value is the morse
// check the user input against the key and return value to new string
// - have object with letters/numbers and morse equivalents {a: ".-", b: "-..."}

const alphabet = {
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
  

const generateMorse = (alphabet) => {
  const morseChecker = userInput.map(function (letter)  {
    const morseTranslate = alphabet[letter];
    return morseTranslate;
  })
  return morseChecker.join("");
}


// event listner for the translate button when hit will spit back morse or english 
translateButton.addEventListener("click", (event) => {
  event.preventDefault();
  userInput = input.value.split("");
  morseDisplay.innerHTML = generateMorse(alphabet); 
});

let clicked = false;

const toggleButton = () => {
  if (!clicked) {
    clicked = true;
    document.querySelector("#morse__selector").innerHTML = "english to morse code";
  } else {
    clicked = false;
    document.querySelector("#morse__selector").innerHTML = "morse to english";
  }
}

const morseToEnglish = (alphabet) => {
  const englishChecker = userInput.map(function (morse) {
    const englishTranslate = alphabet[letter];
    return englishTranslate;
  })
  return englishChecker.join('');
}





function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}


console.log(getKeyByValue(alphabet,".--"));



