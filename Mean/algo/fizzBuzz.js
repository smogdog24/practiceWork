function fizzBuzz(numVal){
    for(var i = 0; i < numVal; i++)
        if (3 % numVal == true && 5 % numVal == true){
            return console.log("FizzBuzz");
        }
        else if( 3 % numVal == true){
            return console.log("Fizz");
        }
        else if( 5 % numVal == true){
            return console.log("Buzz")
        }
        else{
            return console.log(i)
        }
}
fizzBuzz(15)

