// Balance Point
// Write a function that returns whether the given array has a balance point between indices, where one side’s sum is equal to the other’s. Example: [1,2,3,4,10] → true ( between indices 3&4 ), but [1,2,4,2,1] → false .
function balancePoint(arr){
    var countsum = 0;
    for(var i = 0; i <arr.length ; i++){
        countsum += arr[i];
        console.log(countsum, "first countsum loop");
    }
    var subsum = 0;
    for(var j = 0; j<arr.length; j++){
        countsum -= arr[j];
        subsum += arr[j];
        console.log(countsum, subsum);
        if(subsum == countsum){
            return true;
        }
    }
    return console.log(countsum, subsum, "final return"), false
}
var one = [1,2,3,4,10] // balanced
var two = [1,2,4,2,7,1] // unbalanced
balancePoint(two, one)


// Balance Index
// Here, a balance point is on an index, not between indices. Return the balance index where sums are equal on either side (exclude its own value). Return -1 if none exist. Ex.: [-2,5,7,0,3] → 2 , but [9,9] → -1 .
function balanceIndex(arr){
    
}

var three = [9,9] // returns -1
var four = [-2,5,7,0,3] //returns 2
balanceIndex(one)


//Array: Binary Search
// Given a sorted array and a value, return whether the array contains that value. Do not sequentially iterate the array. Instead, ‘divide and conquer’, taking advantage of the fact that the array is sorted . As always, only use built-in functions that you are prepared to recreate (write yourself) on demand!
function BinarySearch(arr, val){
    x=Math.floor(arr.length/2);
    start=0;
    end=arr.length-1
        while(end >= start){
            if(arr[x] == val){
                return true
            }
            else if(arr[x] > val){
                end = x-1;
                x = Math.floor((start+end)/2);
                console.log(x);
            }
            else if(arr[x] < val){
                start = x+1;
                x = Math.floor((start+end)/2);
                console.log(x);
            }
        }
    return false
}
console.log(BinarySearch([1, 2, 3, 4, 5, 6, 7], 7))


//Array: Flatten
//Flatten a given array, eliminating nested & empty arrays. Do not alter it; return a new one retaining order. For [1,[2,3],4,[]] return [1,2,3,4] .
function flatten(arr){
    var newarr = [];
    for(var i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            console.log("if arr[i]statement is true")
            for(var j = 0; j<arr[i].length; j++){
                    newarr.push(arr[i][j])
            }
        }
        else{
            console.log(arr[i] + "this is the console log arr[i]")
            newarr.push(arr[i])
        }
    }
    return newarr;
}
flatten([1,[2,3],4,[]])


// Array: Remove Duplicates
// Remove array duplicates. Do not alter original. Return new array with results ‘stable’ (original order). For [1,2,1,3,4,2] return [1,2,3,4] .
// Second: work ‘in-place’ in given array. Alter order if needed ( stability is not required). Ex.: [1,2,1,3,4,2] could become [1,2,4,3] .
// Third: make it in-place and stable .
function removeDuplicates(arr){
    var newarr = [];
    newarr.push(arr[0]);
    
    for(var i=0; i<arr.length; i++){
        var same = false;
        for(var j=0; j<newarr.length; j++){
            console.log
            if(arr[i] == newarr[j]){
                console.log(same)
                same = true;
            }
        }
        if(same == false){
            console.log('hit else if')
            newarr.push(arr[j])
        }
    }
    return newarr;
}
removeDuplicates([1, 3, 4, 5, 5, 5, 5, 1])