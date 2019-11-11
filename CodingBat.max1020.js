/*
Warmup-1 -- max1020
Given 2 positive int values, return the larger value that is in the range 10..20 inclusive, or return 0 if neither is in that range.

Examples

max1020(11, 19) → 19
max1020(19, 11) → 19
max1020(11, 9) → 1
*/

//attempt 1: 
function max1020(a, b){
    var largerVal = 0;
    if ((a >= 10 && a <= 20) && (b >= 10 && b <= 20)){
      if (a > b){
        return a;
      }
      else if (b > a){
        return b;
      }
      else{
        return largerVal;
      }
    }
    return largerVal
       
    
  }

  //attempt 2:
  function max1020(a, b){
    var largerVal = 0;
    if ((a >= 10) && (a <= 20)){
      if (a > b){
        return a;
      }
    }
    if((b >= 10) && (b <= 20)){
      if (b > a){
        return b;
      }
    }
    if((a < 10) || (a > 20)){
      if((b < 10) || (b > 20)){
      return largerVal;
      }
    }
  }

  //attempt 3:
  function max1020(a, b){
    var largerVal = 0;
    if ((a >= 10 && a <= 20) && (b >= 10 && b <= 20)){
      if (a > b){
        return a;
      }
      else if (b > a){
        return b;
      }
      else{
        return largerVal;
      }
    }
    if ((a<10 || a>20) && (b<10 || b> 20)){
    return largerVal
    }
  }
  // solution: had not considered all the possible combinations before.  Maybe there is a more concise and clever solution?--probably would sacrifice readability though.

function max1020(a, b) {
  var largerVal = 0;
  //both out of range:
  if ((a < 10 || a > 20) && (b < 10 || b > 20)) {
    return largerVal;
  }
  //both in range:
  if ((a >= 10 && a <= 20) && (b >= 10 && b <= 20)) {
    if (a > b) {
      largerVal = a;
    } else {
      largerVal = b;
    }
  }
  // 'a' out of range, while 'b' in range: 
  if ((a < 10 || a > 20) && (b >= 10 && b <= 20)) {
    largerVal = b;
  }
  // 'b' out of range, while 'a' in range:
  if ((b < 10 || b > 20) && (a >= 10 && a <= 20)) {
    largerVal = a;
  }
  return largerVal
}