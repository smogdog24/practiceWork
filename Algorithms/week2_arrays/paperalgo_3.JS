function printAverage(x){
   sum = 0;
   for(var i=0; i<x.length; i++){
      sum = sum + x[i];   
   }
      return sum / x.length;
   }

y = printAverage([1,2,3]);
console.log(y); // should log 2
  
y = printAverage([5,2,8]);
console.log(y); // should log 5



function returnOddArray(){
   var arr=[];
   for (var i=1; i<256; i++){
       if ( i % 2 !== 0);
       arr.push(i);
   }
       return arr;
}
var y = returnOddArray();
console.log(y); // should log [1,3,5,...,253,255]



function squareValue(arr){
   for(var i=0; i<arr.length; i++){
      arr[i] = arr[i]*arr[i];
   
   console.log(arr[i])
   }
   return arr;
}
y = squareValue([1,2,3]);
console.log(y); // should log [1,4,9]
  
y = squareValue([2,5,8]);
console.log(y); // should log [4,25,64]

