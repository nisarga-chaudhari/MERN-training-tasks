function fizzBuzz(num){
    //for(let num=start; num <= end; num++){
        if(num % 5 === 0 && num % 3 === 0){
          return "FizzBuzz"
        }   
        else if(num % 3 === 0){
          console.log("Fizz")
          return "Fizz"
        }
        else if(num % 5 === 0){
          console.log("Buzz")
          return "Buzz"
        }
        else {
          console.log(num)
          return num
        }
    //}
}
fizzBuzz(2)

module.exports = fizzBuzz;