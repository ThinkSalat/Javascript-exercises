
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan(el1, el2, callback) {
  let prompt = `In your opinion, is ${el1} greater than ${el2}? (y/n)`;
  reader.question(prompt, answer => { 
    if (answer === 'y') {
      callback(true); 
    } else {
      callback(false);
    }
  });
}
// 
// function outerBubbleSortLoop(arr) {
//   madeAnySwaps = false;
//   innerBubbleSortLoop(arr, 0, madeAnySwaps, outerBubbleSortLoop(arr));
// }

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  console.log(arr);
  if ((arr.length-1) === i) {
    return outerBubbleSortLoop(madeAnySwaps);
  }
  
  askIfGreaterThan(arr[i],arr[i+1], greaterThan => {
    if (greaterThan) {
      madeAnySwaps = true;
      [arr[i],arr[i+1]] = [arr[i+1],arr[i]];
    }
    innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
  });
}

// askIfGreaterThan(1,2,x => console.log(x));
// innerBubbleSortLoop([2,1,3,4,2,6],0,false,x => console.log('in outer bubbble loop sort loop bubble'));
function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr,0,false,outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
      return;
    }
  }
  outerBubbleSortLoop(true);
}

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
