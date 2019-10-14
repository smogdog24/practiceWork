
function printUpTo(x){
    for(i=1; i<100; i++){
        console.log(i);
    }
    return printUpTo
  }
  printUpTo(1000000); // should print all the integers from 1 to 1000000
  y = printUpTo(-10); // should return false
  console.log(y); // should print false


  function printSum(x){
    var sum = 0;
    for(var i=0; i<256; i++){
        sum = sum + i;
        console.log(sum);
        console.log(i);
    }
    return sum, i;
  }
  y = printSum(255) // should print all the integers from 0 to 255 and with each integer print the sum so far.
  console.log(y) // should print 32640

  function printSumArray(arr){
    var sum = 0;
    console.log("sum is;",sum)
    for(var i=0; i<arr.length; i++) {
        sum = sum + arr[i]
        console.log("i is:", i)
        console.log("sum is;",sum)
    }
    return sum;
  }
  console.log( printSumArray([1,2,3]) ); // should log 6