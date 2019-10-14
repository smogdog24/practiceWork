function resetNegatives(arr){
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            arr[i] = 0;
        }
    }
    return arr;
}
var result = resetNegatives([1,2,-1,-3]);
console.log(result);




function moveForward(arr){
    for (var i = 0; i < arr.length-1; i++){
        arr[i] = arr[i+1];
    }
    arr[arr.length-1] = 0;
    return arr;
}
var result = moveForward([1,2,3]);
console.log(result);




function returnReversed(arr){
    for (var i = 0; i < arr.length/2; i++){
        var temp = arr[i];
        arr[i] = arr[arr.length-i-1];
        arr[arr.length-i-1] = temp;
    }
    return arr;
}
var result = returnReversed([1,2,3]);
console.log(result);




function repeatTwice(arr){
    for (var i = arr.length-1; i >= 0; i--){
        arr[2*i+1] = arr[i];
        arr[2*i] = arr[i];
    }
    console.log(arr);
}
repeatTwice([4,"Ulysses",42,false]);