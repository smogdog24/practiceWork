function greaterthany(Arr, Y){
    var count = 0;
    for (var i = 0; i <Arr.length; i++){
        if (Arr[i] > Y){
            count++;
        }
    }
}
greaterthany([3,5,7,2,4,10], 5);




function maxMinAvg(arr) {
    var max = arr[0];
    var min = arr[0];
    var sum = arr[0];
    
    for (var i=1; i<arr.length; i++){
        if (max < arr[i]){
            max = arr[i];
        }
        if (arr[i] < min){
            min = arr[i];
        }
        sum = sum + arr[i];
    }
    var avg = sum / arr.length;
    var arrnew = [max, min, avg];
    return arrnew;
}
console.log(max,min, arrnew);




function negativeSwap(arr){
    for(var i=0; i<arr.length;i++){
        if(arr[i]<0){
            arr[i]= "Dojo"
        }
    }
    return arr;
}

console.log(negativeSwap([3,-1,4,-4,6]));




function removeVals(arr, start, end){
    var offset = end-start+1;
    for (var i = start; i <= offset; i++){
        arr[i] = arr[i+offset];
    }
    console.log(arr);
    arr.length = arr.length - offset;
    return arr;
}
var result = removeVals([20,30,40,50,60,70],2,4);
console.log(result); 