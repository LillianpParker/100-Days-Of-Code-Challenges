//The Fibonacci Sequence is a series of numbers starting at zero and one where the rest of the numerical sequence is created by adding the previous two numbers.

// Determine the nth Place within the Fibonacci Sequence
function fib(n){
    let arr = [0, 1];
    for (let i = 2; i < n + 1; i++){
      arr.push(arr[i - 2] + arr[i -1])
    }
   return arr[n]
  }

//Display the full Fibonacci Sequence up to an nth Place
