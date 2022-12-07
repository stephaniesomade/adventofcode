const fs = require('fs');
const input = fs.readFileSync('day2.txt', 'utf8').trimEnd();

class Tournament { 
  constructor() {
    this.input = input;
    this.firstScore = 0;
    this.secondScore = 0;
  }
  firstResults() { 
    const array = this.input.split("\n") 
    array.forEach((moves) => { 
      let yourMove = moves[2];
      let theirMove = moves[0];
      if (yourMove === "X") { 
        this.firstScore += 1;
        if (theirMove === "A") {
          this.firstScore += 3;
        } else if (theirMove === "B"){
          this.firstScore += 0;
        } else {
          this.firstScore += 6;
        }
      }
      else if (yourMove === "Y") { 
        this.firstScore += 2;
        if (theirMove === "A") { 
          this.firstScore += 6;
        } else if (theirMove === "B") { 
          this.firstScore += 3;
        } else { 
          this.firstScore += 0;
        }
      }
      else if (yourMove === "Z") {
        this.firstScore += 3;
        if (theirMove === "A") { 
          this.firstScore += 0;
        } else if (theirMove === "B") { 
          this.firstScore += 6;
        } else {
          this.firstScore += 3;
        }
      }
      else {
        console.log("error")
      }
    })
    console.log(this.firstScore)
  }

  secondResults() { 
    const array = this.input.split("\n") 
    array.forEach((moves) => {
    let result = moves[2];
    let theirMove = moves[0];
    if (theirMove === "A") {
      if (result === "X") { 
        this.secondScore += 3
      } else if (result === "Y") { 
        this.secondScore += 4
      } else {
        this.secondScore += 8
      }
      } else if (theirMove === "B") {
        if (result === "X") { 
          this.secondScore += 1
        } else if (result === "Y") { 
          this.secondScore += 5
        } else { 
          this.secondScore += 9
        }
      } else { 
        if (result === "X") { 
          this.secondScore += 2
        } else if (result === "Y") {
          this.secondScore += 6
        } else { 
          this.secondScore += 7
        }
      }
    })
    console.log(this.secondScore)
  }
  
}

const game = new Tournament;
// game.firstResults();
game.secondResults();
// will be refactored
