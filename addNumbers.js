const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback){
  if (numsLeft < 1){
    completionCallback(sum);
    return;
  }
  
  let userNum;
  reader.question("What number do you want me to add? ", answer => {
    userNum = parseInt(answer);
    sum += userNum;
    numsLeft -= 1;
    
    console.log(`sum is currently ${sum}`);
    addNumbers(sum, numsLeft, completionCallback);
  });
  

}

// console.log("Last program line");


addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
