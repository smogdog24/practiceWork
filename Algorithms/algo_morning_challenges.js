//given array, index and value, insert the value into array at given index. No built-in methods

function insertAt(arr,idx,val){
    for(var i = arr.length- 1; i >= idx; i--){ 
        arr[i + 1] = arr[i] 
    }
    arr[idx] = val
    return arr;

}
console.log(insertAt([1,3,4], 1, 2))
// [1,2,3,4]


function pushFront(arr, val){
    for(var i= arr.length -1 ; i>=0; i-- ){
    arr[i +1] = arr[i];
    }
    arr[0]= val;
    return arr;
 }

 pushFront([1,2,3,4], 5)
 // [5, 1, 2, 3, 4]


 function removeAt(arr, num){
     var value = arr[num];
     
    for(var i=num; i<arr.length-1; i++){
        var temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
    }
    arr.pop();
    console.log(arr);
    return value;
 }
 removeAt([1,2,3,4,5,6,7], 4)


 
 function swapPairs(arr){
    if(arr.length %2== 0){
        for(var i = 0; i<arr.length; i+=2){
            var temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
    }else{
        for(var i = 0; i<arr.length-1; i+=2){
            var temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
    }
    return arr;
 }
 swapPairs([1,2,3,4,5])
 //[2,1,4,3,5

