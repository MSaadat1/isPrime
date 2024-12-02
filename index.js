// prime number
// check to see if a number is prime or not
// what is prime?
// If a number is bigger than 1 and can only be divided by 1 and itself, then it is a prime number.
// it should not be leaving any remainder and be divisible by 2 numbers only
// ex: 3 ÷ 1 = 3 (exact)
//     3 ÷ 3 = 1 (exact)
// It has no other divisors. This means 3 is a prime number.
// 4 ÷ 1 = 4 (exact)
// 4 ÷ 4 = 1 (exact)
// 4 ÷ 2 = 2 (exact)
// It has more than two divisors (1, 2, 4), so 4 is not a prime number.
function isPrime(num){
    // if number is bigger than 2 or equal to 2
    if(num < 2) return false;
    if(num === 2) return true;
    // starting from 2 and if 2 is bigger or equal to num, we iterate
    // To make this efficient, only check divisors up to the square root of num
    for(let i = 2; i <= Math.sqrt(num); i++){
        // if num % 2 is equal to 0 return false 
        if(num % i === 0) return false
    }
    // return true if no divisors found
    return true;
    
}
// this function return a list of prime numbers in array of numbers
function checkPrimeNumbers(arr) {
    return arr.filter((num) => isPrime(num));
}
 console.log(isPrime(3));
 console.log(checkPrimeNumbers([1,2,3,4,5,6,7,8,9,10]));