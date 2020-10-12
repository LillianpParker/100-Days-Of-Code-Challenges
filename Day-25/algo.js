// Algorithm Practice:

// Palindrome:
const checkWord = (string) => {
    const lower = string.toLowerCase();
    const array = lowerCase.split('');
    const reverseArray = letterArray.reverse();
    const reverseString = reverseArray.join('');

    if(reverseString === string.toLowerCase()){
        console.log(string + ": true!")
        return true;
    } else {
        console.log(string + ": false!")
        return false;
    }
}
checkWord('Racecar')

// Fizz Buzz:

for(let i=1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log(i, ': FizzBuzz!');
    } else if(i % 3 === 0){
        console.log(i, ": Fizz");
    } else if(i % 5 === 0){
        console.log(i, ": Buzz");
    } else{
        console.log(i)
    }
}