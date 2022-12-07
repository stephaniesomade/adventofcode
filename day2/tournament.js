const fs = require('fs');
const input = fs.readFileSync('day2.txt', 'utf8').trimEnd();

class Tournament { 
  constructor() {
    this.input = input;
    this.arr = [];
    this.score = 0;
  }

  results() { 
    const array = this.input.split("\n") 
    // Yourmove is Rock, Rock/A - Draw(3), Paper/B - Lose (0), Scissors/C - Win(6)
    array.forEach((moves) => { 
      let yourMove = moves[2];
      let theirMove = moves[0];
      if (yourMove === "X") { 
        this.score += 1;
        if (theirMove === "A") {
          this.score += 3;
        } else if (theirMove === "B"){
          this.score += 0;
        } else {
          this.score += 6;
        }
      }
      // Yourmove is Paper, Rock/A - Win (6), Paper/B - Draw (3), Scissors/C - Lose (0)
      else if (yourMove === "Y") { 
        this.score += 2;
        if (theirMove === "A") { 
          this.score += 6;
        } else if (theirMove === "B") { 
          this.score += 3;
        } else { 
          this.score += 0;
        }
      }

      // YourMove is Scissors, Rock/A - Lose (0), Paper/B - Win(6), Scissors/C - Draw(3)
      else if (yourMove === "Z") {
        this.score += 3;
        if (theirMove === "A") { 
          this.score += 0;
        } else if (theirMove === "B") { 
          this.score += 6;
        } else {
          this.score += 3;
        }
      }
      else {
        console.log("error")
      }
    })
    console.log(this.score)
  }
  
}

const game = new Tournament;
game.results();
// can be refactored