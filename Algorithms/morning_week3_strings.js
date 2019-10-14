function removeBlanks(str){
    var finalStr = ""
    for(var i = 0; i < str.length; i++){
        if(str[i] != " "){
            finalStr += str[i];
        }
    }
    return finalStr;
}

function getDigits(str){
    var fullstring = str.split("");
    var numstring = "";
    for(var i=0;i<fullstring.length;i++){
        if(fullstring[i] % 1 == 0){
            numstring += fullstring[i];
        }
    }
    return numstring;
}
getDigits("32n3n4n4j2nljkbb4")


function getDigits(string){
    var finalNum = 0;
    var place = 1;
    
    for(var i = string.length-1; i >= 0; i--){
        // if string character is within the range of 48 to 57
        // we know it's a number character
        if(string.charCodeAt(i) >= 48 && string.charCodeAt(i) <= 57){
            // now add that number character to our integer variable
            // and multiply it by the current number's place (which starts at 1)
            finalNum += string[i] * place;
            // then multiply by 10 to increment the number's place
            place *= 10;
        }
    }
    return finalNum;
}

console.log(getDigits("21hf35l4dg2kh3"))

function removeEven(arr){
    for (var i = arr.length-1; i > 0; i--){
        if(arr[i].length % 2 == 0){
            for(var j = i; j < arr.length-1; j++){
            var temp = arr[j];
            arr[j] = arr[j +1];
            arr[j +1] = temp;
            }
            arr.pop()
        }
    }
    return arr;
}

var arr1 = ["Nope!","Its","Kris","starting","with","K!","(instead","of","Chris","with","C)","."];
console.log(removeEven(arr1));






function parenValid(str){
    var open = 0;
    var close = 0;
    for(var i = 0; i<str.length; i++ ){
        if(str[i]==")"){
            close++
        }
        if(close>open){
            return false
        }
        if(str[i]=="("){
            open++;
        }
       
    }
    if(open===close){
        return true
    }
    return false
}
var str1 = "Y(3(p)p(3)r)s";
var str2 = "N(0(p)3";
var str3 = "N(0)t ) 0(k";
console.log(parenValid(str1))
console.log(parenValid(str2))
console.log(parenValid(str3))


//Given a sequence of parentheses, braces and brackets, determine whether it is valid. Example: "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!" => true . "D(i{a}l[ t]o)n{e" => false . "A(1)s[O (n]0{t) 0}k" => false .
function bracesValid(str){
    var open = 0;
    var close = 0;
    var inside = 0;
    var outside = 0;
    var bracketin = 0;
    var bracketout = 0;
    for(var i = 0; i<str.length; i++ ){
        if(str[i]==")"){
            close++
        }
        if(close>open){
            return false
        }
        if(str[i]=="("){
            open++;
        }
        if(str[i]=="}"){
            outside++
        }
        if(outside>inside){
            return false
        }
        if(str[i]=="{"){
            inside++;
        }
        if(str[i]=="]"){
            bracketout++
        }
        if(bracketout>bracketin){
            return false
        }
        if(str[i]=="["){
            bracketin++;
        }
       
    }
    if(open===close && inside===outside && bracketin===bracketout){
        return true
    }
    return false-
}

var str1 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!" //true
var str2 = "D(i{a}l[ t]o)n{e" //false
var str3 = "A(1)s[O (n]0{t) 0}k" //false
console.log(bracesValid(str1))
console.log(bracesValid(str2))
console.log(bracesValid(str3))


function palindrome(str){
    var newstr1 = str.toLowerCase(); 
    var newstr2 = newstr1.replace(/\s/g,'');
    var newstr = "";
    for(var i=newstr2.length-1; i>=0; i--){
        newstr+=newstr2[i]
    }
    if(newstr == newstr2){
        return true;
    }
    return false;
}
palindrome('Rats live,         on no evil star')


//Longest Palindrome
//For this challenge, we will look not only at the entire string provided, but also at the substrings within it. Return the longest palindromic substring. Given "what up, daddy-o?" , return "dad" . Given "uh... not much" , return "u" . Include spaces as well (i.e. be strict, as in previous challenge): given "Yikes! my favorite racecar erupted!" , return "e racecar e" .
//Strings longer or shorter than complete words are OK.

function isPalindrome(str){
    for(var i=0; i<str.length/2; i++){
        if(str[i] != str[str.length-1-i]){
            return false;
        }
    }
    return true;
}

// "tacocat"
isPalindrome("hello")

//Associative arrays are sometimes called maps because a key (string) maps to a value. Given two arrays, create an associative array (map) containing keys of the first, and values of the second. For arr1 = ["abc", 3, "yo"] and arr2 = [42, "wassup", true] , return {"abc": 42, 3: "wassup", "yo": true}.
function mapArray(arr1, arr2){
    var newArr= {};
    for (var i=0; i<arr1.length; i++){
        newArr[arr1[i]] = arr2[i];
    }
    return newArr;
}


var arr1 = ["abc", 3, "yo"];
var arr2 = [42, "wassup", true];

console.log(mapArray(arr1, arr2));