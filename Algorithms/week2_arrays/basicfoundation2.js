//--------------------------------------------------------
/*Biggie Size - Given an array, write a function that changes
 all positive numbers in the array to the string "big".  
Example: makeItBig([-1,3,5,-5]) returns that
 same array, changed to [-1, "big", "big", -5]. */
function makeItBig(arr){
    for (var i=0; i<arr.length; i++){
        if (arr[i]>0){
            arr[i] = "big";
        }
    }
    return arr;
}
console.log(makeItBig([-1,3,5,-5]))
//[-1, "big", "big", -5]



//--------------------------------------------------------
 /*Print Low, Return High - Create a function that takes in an 
 array of numbers.The function should print the lowest value in the array,
 and return the highest value in the array.*/
function printLowReturnHigh(arr){
    var low = arr[0]
    var high = arr[0]
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < low){
            low = arr[i];
        }else if (arr[i]> high){
            high = arr[i];
        }
    }
    console.log(low);
    return high;
}
console.log(printLowReturnHigh([3,8,5,4]))
//3, 8



//--------------------------------------------------------
 /*Print One, Return Another - Build a function that takes in an array of 
 numbers.  The function should print the second-to-last value in the array, 
 and return the first odd value in the array. */
function print2ndToLastReturnOdd(arr){
    console.log(arr[arr.length-2]);
    for(var i=0; i<arr.length; i++){
        if(arr[i] % 2 == 1)
        return arr[i];
    }
}
console.log(print2ndToLastReturnOdd([4,3,8,-3,9,10,15]))
//10, 3



//--------------------------------------------------------
 /*Double Vision - Given an array (similar to saying 'takes in an array'), 
 create a function that returns a new array where each value in the original
  array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without
   changing the original array. */
function double(arr){
    var doublearr = [];
    for(var i=0; i<arr.length;i++){
        doublearr.push(arr[i] * 2);
    }
    return doublearr;
}
console.log(double([1,2,3]))
//[2,4,6]



//--------------------------------------------------------
 /*Count Positives - Given an array of numbers, create a function to replace
  the last value with the number of positive values found in the array.  
  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3]
   and returns it.*/
function countPositives(arr){
    var count = 0;
    for(var i=0; i<arr.length; i++){
        if(arr[i]>=0){
            count++;
        }
    }
    arr.push(count);
    return arr;
}
console.log(countPositives([-2,1,1,1,1]))
//[-2,1,1,1,4]



//--------------------------------------------------------
 /*Evens and Odds - Create a function that accepts an array.  Every time that
  array has three odd values in a row, print "That's odd!".  Every time the array
   has three evens in a row, print "Even more so!". */
function evensAndOdds(arr){
    var odds = 0
    var evens = 0
    for(var i=0; i<arr.length; i++){
        if(arr[i] % 2 == 1){
            odds++;
            evens = 0;
        }else{
            evens++;
            odds = 0;
        }if(odds  == 3){
            console.log("thats odd!");
            odds = 0;
        }else if(evens == 3){
            console.log("Even more so!");
            evens = 0;
        }
    }
}
evensAndOdds([2,2,2,3,3,3,4,4,5,4,6,8])
//Even more so!, thats odd!, Even more so!



//--------------------------------------------------------
 /*Increment the Seconds - Given an array of numbers arr, add 1 to every
  other element, specifically those whose index is odd (arr[1], arr[3], arr[5],
 etc).  Afterward, console.log each array value and return arr. */
function incrementSeconds(arr){
    for(var i = 1; i < arr.length; i+=2){
        arr[i] = arr[i] + 1;
    }
    for(var i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
    return arr;
}
incrementSeconds([2,3,4,5,6,7])
//[2,4,4,6,6,8]



//--------------------------------------------------------
 /*Previous Lengths - You are passed an array (similar to saying 'takes in an array'
  or 'given an array') containing strings.  Working within that same array, replace 
  each string with a number - the length of the string at the previous array index 
  - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"])
   should return ["hello", 5, 4]. Hint: Can for loops only go forward? */
function previousLengths(arr){
    for(var i = arr.length -1; i> 0; i--){
        arr[i] = arr[i-1].length;
    }
    return arr;
}
previousLengths(["hello", "dojo", "awesome"])
//["hello", 5, 4]



//--------------------------------------------------------
 /*Add Seven - Build a function that accepts an array. Return a new array with all
  the values of the original, but add 7 to each. Do not alter the original array.  
  Example, addSeven([1,2,3]) should return [8,9,10] in a new array. */
function addSeven(arr){
    newarr = []
    for( var i=0; i< arr.length; i++){
        newarr[i] = arr[i] + 7;
    }
    return newarr;
}
addSeven([1,2,3])
//[8,9,10]



//--------------------------------------------------------
 /*Reverse Array - Given an array, write a function that reverses its values, in-place.
   Example: reverse([3,1,6,4,2]) returns the same array, but now contains
    values reversed like so... [2,4,6,1,3].  Do this without creating an empty
     temporary array.  (Hint: you'll need to swap values). */
function reverseArray(arr){
    for (var i = 0; i < arr.length/2; i++){
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}
reverseArray([3,1,6,4,2])
//[2,4,6,1,3]



//--------------------------------------------------------
 /* Outlook: Negative - Given an array, create and return a new one containing
  all the values of the original array, but make them all negative (not simply
     multiplied by -1). Given [1,-3,5], return [-1,-3,-5].*/
function outlookNegative(arr){
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            arr[i] = arr[i]*-1;
        }
        newArr.push(arr[i]);
    }
    return newArr;
}
outlookNegative([1,-3,5])
//[-1,-3,-5]



//--------------------------------------------------------
 /*Always Hungry - Create a function that accepts an array, and prints "yummy" 
 each time one of the values is equal to "food".  If no array values are "food",
  then print "I'm hungry" once. */
function alwaysHungry(arr){
    for(var i=0; i<arr.length; i++){
        if( arr[i] == "food"){
            console.log("Yummy");
        }else{
            console.log("I'm hungry");
        }
    }
}
alwaysHungry(["food", 4, "food", "rottenfood"])
//Yummy, I'm hungry, Yummy, I'm hungry



//--------------------------------------------------------
 /*Swap Toward the Center - Given an array, swap the first and last values, 
 third and third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"])
  turns the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6])
   turns the array into [6,2,4,3,5,1].  No need to return the array this time. */
function swapTowardCenter(arr){
    for (var i = 0; i < arr.length/2; i++){
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}
swapTowardCenter(["true",42,"Ada",2,"pizza"])
//["pizza", 42, "Ada", 2, true]


//--------------------------------------------------------
 /* Scale the Array - Given an array arr and a number num, multiply all values 
 in the array arr by the number num, and return the changed array arr.  
 For example, scaleArray([1,2,3], 3) should return [3,6,9].*/
 function scaleArray(arr, num){
     for(var i=0; i<arr.length; i++){
        arr[i] = arr[i] * num;
     }
     return arr;
 }
 scaleArray([1,2,3], 3)
 //[3,6,9]