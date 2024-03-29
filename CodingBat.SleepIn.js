
/*The parameter weekday is true if it is a weekday, 
and the parameter vacation is true if we are on vacation. 
We sleep in if it is not a weekday or we're on vacation. Return true if we sleep in.

Examples

sleepIn(true, true) → true
sleepIn(true, false) → false
sleepIn(false, true) → true
*/

/* Solution 1
function sleepIn(weekday, vacation): number {
    if(vacation==true){
        return true;
    }else{
        if(weekday==true){
            return false;
        }else{
            return true;
        }
    }   
}

Solution 2
function sleepIn(weekday, vacation): number {
    if(vacation || !weekday){
        return true;
    }
    return false;
}
*/

function sleepIn(weekday, vacation) {
    if (vacation || !weekday) {
        return true;
    }
    return false;
}

console.log(sleepIn(true, true) === true);
console.log(sleepIn(true, false) === false);
console.log(sleepIn(false, true) === true);