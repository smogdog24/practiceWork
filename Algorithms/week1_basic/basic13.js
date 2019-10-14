function print1To255(){
    for(var i=1; i<256; i++){
        console.log(i)
    }
}
print1To255()

function printIntsAndSum0To255(){
    var sum = 0
    for(var i=0; i<256; i++){
        sum = sum + i;
        console.log(sum);
    }
}
printIntsAndSum0To255()

function printMaxOfArray(arr){
    var max = arr[0]
    for(var i=0; i<arr.length; i++){
            if (max < arr[i]){
                max = arr[i]
            }
        }
        console.log(max)
}
printMaxOfArray([4, 2, 6, 8])


function returnOddsArray1To255(){
    var arr=[]
    for (var i=1; i<256; i++){
        if ( i % 2 !== 0)
        arr.push(i)
    }
        return arr
}
returnOddsArray1To255()

function returnArrayCountGreaterThanY(arr, y){
    var count = 0;
    for(var i=0; i<arr.length; i++){
        if ( arr[i] > y ) {
            count++
        }
    }
    console.log(count)
    return count
}
returnArrayCountGreaterThanY([5, 4, 7, 10], 6)

function maxMinAverage(arr){
    var max = arr[0];
    var min = arr[0];
    var sum = arr[0];

    for (var i=0; i<arr.length; i++){
        if (max<arr[i]){
            max=arr[i];
        }
        if (min>arr[i]){
            min=arr[i];
        }
        sum = sum + arr[i];
    }
    var average = sum / arr.length;
    var arrnew = [max, min, average];
    console.log(arrnew);
    return arrnew
}
maxMinAverage([8, 3, 9, 2])

function swapStringForArrayNegativeVals(arr){
    
    for (var i=0; i<arr.length; i++){
        if (arr[i]<0){
            arr[i] = "Dojo";
        }
    }
    console.log(arr)
}
swapStringForArrayNegativeVals ([-2, 3, -5, 4])

function odds1255(){
    for(var i = 1; i < 256; i++){
        if( i%2==1){
            console.log(i);

        }
    }
}
odds1255()


function printArrayVals(arr){
    for(var i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}
printArrayVals([4, 3, 5])


function printAverageOfArray(arr){
    var sum = arr[0];
    for(var i = 1; i < arr.length; i++){
        sum = sum + arr[i];
    }
    var avg = sum/arr.length;
    console.log(avg)
}
printAverageOfArray([2, 3, 4])


function squareArrayVals(arr){
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i] * arr[i];
    }
    return arr;
}
squareArrayVals([1, 2, 3])


function zeroOutArrayNegativeVals(arr){
    for(var i=0; i<arr.length; i++){
        if (0 > arr[i]){
            arr[i] = 0;
        }
    }
    return arr;
}
zeroOutArrayNegativeVals([1, 4, -9])



function shiftArrayValsLeft(arr){
   for(var i=0; i<arr.length; i++){
        arr[i] = arr[i + 1];
   }
    arr[arr.length - 1] = 0;
    return arr;
}
shiftArrayValsLeft([1, 2, 3, 4])
// [2, 3, 4, 0]