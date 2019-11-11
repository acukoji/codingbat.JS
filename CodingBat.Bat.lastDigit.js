//solution 1:
function lastDigit(a, b, c){
    var digitA = a % 10;
    var digitB = b % 10;
    if (digitA == digitB){
      return true;
    } else {
      return false;
    }
  }
  

//solution 2:
function lastDigit(a, b, c){
    var digitA = a % 10;
    var digitB = b % 10;
    return(digitA == digitB);
}

//solution 3: shortest but maybe less readable than #2
function lastDigit(a, b, c){
      return a % 10 == b % 10;
    }
