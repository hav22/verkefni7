/**
 * Verkefni 7 – Caesar dulmál
 */

const LETTERS = `AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ`;
/**
 * Byrja forrit.
 */

let action;
let n;
let valStrengur;
let letter;
let str;
let nidurstada = [];
let output;


function start() {
  'use strict'
  action = prompt('Hvort viltu kóða eða afkóða streng? Skrifaðu „kóða“ eða „afkóða“');
  valAction(action);
}

function valAction() {
  if (action === 'kóða' || action === 'afkóða') {
    hlidrun();
  }
  else
    alert(`Veit ekki hvaða aðgerð " ${action} " er. Reyndu aftur.`);
    start();
}

function hlidrun(){
  n = prompt('Hversu mikið á að hliðra streng? Gefðu upp heiltölu á bilinu [1, 31]');
  samanburdurHeiltala();
}

function samanburdurHeiltala() {
  if (n > 0 && n < 32){
    Strengur();
  }
  else {
    alert(`${n} er ekki heiltala á bilinu [1, 31]. Reyndu aftur.`);
  }
}

function Strengur(){
  valStrengur = prompt(`Gefðu upp strenginn sem á að ${action} með hliðrun ${n}:`);
  str = valStrengur.toUpperCase();
  samanburdurStrengur();
}

function samanburdurStrengur(){
  for (let i = 0; i < str.length; i++){
    do{
      letter = LETTERS.indexOf(str[i]);
    } 
    while(letter === true){
      if (action === 'kóða'){
        output = encode();
        alert(`Niðurstaða: ${output}`);
        start();
      }
      else if (action === 'afkóða') {
        output = decode();
        alert(`Niðurstaða: ${output}`);
        start();
      }
      else if(action !== 'kóða' || action !== 'afkóða'){
        
      }
    }
  }
}

// Hér er gott að commenta út til að vinna í encode/decode föllum fyrst og síðan „viðmóti“ forrits
start();

/**
 * Kóðar streng með því að hliðra honum um n stök.
 *
 * @param {string} str Strengur sem skal kóða, aðeins stafir í stafrófi
 * @param {number} n Hliðrun, heiltala á bilinu [0, lengd stafrófs]
 * @returns {string} Upprunalegi strengurinn hliðraður um n til hægri
 */


function encode(str, n) {
  for (let i = 0; i < str.length; i++){
    letter = LETTERS.indexOf(str[i]);
    if (letter + n > 31){
      letter = letter - 32;
    }
    nidurstada[i] = LETTERS[letter + n];
 }
 alert(nidurstada.join(''));
 str = nidurstada.join('');
 return str;
}

/**
 * Afkóðar streng með því að hliðra honum um n stök.
 *
 * @param {string} str Strengur sem skal afkóða, aðeins stafir í stafrófi
 * @param {number} n Hliðrun, heiltala á bilinu [0, lengd stafrófs]
 * @returns {string} Upprunalegi strengurinn hliðraður um n til vinstri
 */

function decode(str, n) {
  for (let j = 0; j < str.length; j++){
    letter = LETTERS.indexOf(str[j]);
    if (letter - n < 0){
      letter = letter + 32;
    }
    nidurstada[j] = LETTERS[letter - n];
  }  
  str = nidurstada.join('');
  return str;
}

console.assert(encode('A', 3) === 'D', 'kóðun á A með n=3 er D');
console.assert(decode('D', 3) === 'A', 'afkóðun á D með n=3 er A');
console.assert(encode('AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 32) === 'AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 'kóðun með n=32 er byrjunarstrengur');
console.assert(encode('AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 3) === 'DÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖAÁB', 'kóðun á stafrófi með n=3');
console.assert(decode('DÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖAÁB', 3) === 'AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 'afkóðun á stafrófi með n=3');
console.assert(decode(encode('HALLÓHEIMUR', 13), 13) === 'HALLÓHEIMUR', 'kóðun og afkóðun eru andhverf');
