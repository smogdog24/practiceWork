class ArrStack{
    constructor(){
        this.data = [];
    }
    push(val){
        this.data[this.data.length] = val
        // add the new val variable into the array. It should be added to the end of the array, just like a regular push method
        // you can use .length 
        // you can relative index positions
    }
    pop(){
        var lastVal = this.data.length-1
        this.data.length = this.data.length - 1 
        return lastval
        // removes and returns the last value in the array
    }
    isEmpty(){
        if(this.data == []){
            return true;
        }
        else{
            return false;
        }
        // if there are no values in the array, return true
        // else, return false
    }
    top(){
        newval = this.data.length-1;
        return newval

        // returns the last value in the array. it does NOT REMOVE it, though.
    }
    contains(val){

        while(this.isEmpty() == false){
            if(this.top() == val){
                return true
            }
            else{
                this.pop()
            }
        }
        return false
    }
        // go thru the stack and see if it contains the "val" parameter.
        // remember, you can ONLY SEE the "top", aka last, value in a stack. In order to check further you need to remove the top, then check the next top value, and so on and so forth.
        // if the stack contains the val, return true; else, return false
        // this method should use pop, top, and isEmpty

    size(arr){
        var count = 0;
        while(this.data !== []){
                count++;
                this.pop;
        }
            return count;
        }
}



