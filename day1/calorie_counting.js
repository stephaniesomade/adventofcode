const fs = require('fs');
const input = fs.readFileSync('day1.txt', 'utf8').trimEnd();

class Solution {
  constructor() {
    this.input = input.split('\n\n').map((anElf) => anElf.split('\n'));
    this.cal = [];
  }
  
  solve(input) { 
    const elves = this.input;   
    elves.forEach((elf) => {
      let sum = 0;
      for (const value of elf) {
        sum += parseInt(value);
      }
      this.cal.push(sum); 
    })
    var largest = Math.max.apply(0, this.cal);
    return largest;
  }

  topThree(input) {
    this.solve(input)
    this.cal.sort(function(a, b) {
      return a - b;   
    });
    const highestCal = this.cal.reverse().slice(0, 3).reduce(function(a, b){
      return a + b;
     }, 0);
    console.log(highestCal);

  }
}

const solution = new Solution;
solution.topThree(input);
