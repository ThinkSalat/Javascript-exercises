// class TowersOfHanoi {
//   run() {
//     // until disks have been moved to a single tower aside from the first.
//       //render towers
//       //get move from player
//         //check if move is valid
//        // make move on towers
//   }
// }

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


class TowersOfHanoi {
  constructor() {
    this.towers = [[1],[3,2],[]];
  }
  
  promptMove(completionCallback) {
    this.printStacks();
    reader.question('Where do you want to move the disk from? (0,1,2) ', answer => {
      const start = answer;
      reader.question('Where do you want to move the disk to? (0,1,2) ', answer => {
        const end = answer;
        if (!this.validateMove(start,end)) {
          console.log('invlaid move! try again');
          this.promptMove(completionCallback);
        } else {
          this.moveDisk(start,end);
          this.run(completionCallback);
        }
      });
    });
  }
  
  validateMove(start,end) {
    if (![0,1,2].includes(parseInt(start))|| ![0,1,2].includes(parseInt(start))) {
      return false;
    }
    const startTower = this.towers[start];
    const endTower = this.towers[end];
    if (startTower.length === 0) {
      return false;
    } else if (startTower[startTower.length-1] > endTower[endTower.length-1]) {
      return false;
    } else {
      return true;
    }
  }
  
  moveDisk(start,end) {
    this.towers[end].push(this.towers[start].pop());
  }
  
  run(completionCallback) {
    if (this.gameWon()) {
       completionCallback();
    } else {
      this.promptMove(completionCallback);
    }    
  }
  
  gameWon() {
    if ((this.towers[1].length === 3) || (this.towers[2].length === 3)) {
      return true;
    } else {
      return false;
    }
  }
  
  printStacks(){
    let i = 0;
    this.towers.forEach(tower=> {
      
      console.log(`${i++}: [${tower}]`);
    });
  }
}

const game = new TowersOfHanoi();
game.run(() => {
  reader.close();
  console.log("Congrats, you won!!!!!");
});