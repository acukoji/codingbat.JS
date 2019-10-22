

/*
Warmup-1 -- close10
Given 2 int values, return whichever value is nearest to the value 10, or return 0 in the event of a tie. Note that Math.abs(n) returns the absolute value of a number.

Examples

close10(8, 13) → 8
close10(13, 8) → 8
close10(13, 7) → 0
*/

//solution 1:
function close10(a, b){
  
    var absValA= Math.abs(10-a);
    var absValB= Math.abs(10-b);
    var closest;
    
    if (absValB < absValA){
      var closest = b;
    }
    else if(absValA < absValB){
      var closest = a;
    }
    else{
      closest = 0;
    }
      return closest;
  }

  //solution 2:  Is this solution better?

  function close10(a, b){
  
    var absValA= Math.abs(10-a);
    var absValB= Math.abs(10-b);
    var closest=0;
    
    if (absValB < absValA){
      var closest = b;
    }
    if(absValA < absValB){
      var closest = a;
    }
      return closest;
  }