/*
Warmup-1 -- intMax
Given three int values, a b c, return the largest.

Examples

intMax(1, 2, 3) → 3
intMax(1, 3, 2) → 3
intMax(3, 2, 1) → 3
*/

/* first solution (long):
function intMax(a, b, c){
    var largest;
    if (a>b && a>c){
      largest = a;
    }
    else if (b>a && b>c){
      largest = b;
    }
    else{
      largest = c;
    }
    return largest;
    
  }
  */

  // second solution (built-in fx)

  function intMax(a, b, c){
    return Math.max(a, b, c);
  }

  