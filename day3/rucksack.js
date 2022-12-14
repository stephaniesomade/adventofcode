const fs = require('fs');
const input = fs.readFileSync('day3.txt', 'utf8').trimEnd();

class Rucksack  {
  constructor() { 
    this.input = input
  }

  commonItem(input) {
    let value = 0;
    const letterValue = (letter) => {
      if (/[a-z]/.test(letter)) { return letter.charCodeAt(0) - 96 }
      if (/[A-Z]/.test(letter)) { return letter.charCodeAt(0) - 38 }
    }

    const arr = this.input.split(/\r?\n/);
    arr.forEach( rucksack => {
      const halfIndex = rucksack.length/2
      const firstHalf = rucksack.slice(0, halfIndex)
      const secondHalf = rucksack.slice(-1 * halfIndex)
  
      const str1Set = new Set([...firstHalf]);
      let i = 0; while( !str1Set.has( secondHalf[i] ) ){
        i++
      }
      let letterVal = letterValue(secondHalf[i]);
      value += letterVal;
    })
  
    console.log(value)
    this.priority()
  }

  priority() {
    let value = 0;
    const letterValue = (letter) => {
      if (/[a-z]/.test(letter)) { return letter.charCodeAt(0) - 96 }
      if (/[A-Z]/.test(letter)) { return letter.charCodeAt(0) - 38 }
    }

    const arr = this.input.split(/\r?\n/);

    for (let i = 0; i < arr.length; i+=3){
      let line1Set = new Set([...arr[i]])
      let line2Set = new Set([...arr[i+1]])
      let comparisonString = arr[i+2];
      for (let j = 0; j < comparisonString.length; j++) {
        let ltr = comparisonString[j]
        if ( line1Set.has(ltr) && line2Set.has(ltr) ){
          value += letterValue(ltr);
          break;
        }
      }
    }
      console.log(value) 
  }
}
const elfRucksack = new Rucksack;
elfRucksack.priority();
